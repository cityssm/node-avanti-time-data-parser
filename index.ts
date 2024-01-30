/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable security/detect-object-injection */

import fs from 'node:fs'

import XLSX from 'xlsx'

import type {
  TimeData,
  TimeDataDateString,
  TimeDataEmployee,
  TimeDataPayCode
} from './types.js'
import { dateColumnRegularExpression, formatDate } from './utilities.js'
import type { WorkSheetRow } from './workSheetTypes.js'

XLSX.set_fs(fs)

const timeDataSheetName = 'Time Data'
const approvedTimeDataSheetName = 'Approved Time Data'

function parseTimeDataSheet(worksheet: XLSX.WorkSheet): {
  dateMin?: TimeDataDateString
  dateMax?: TimeDataDateString
  timeData: Record<string, TimeDataEmployee>
} {
  const rows: WorkSheetRow[] = XLSX.utils.sheet_to_json(worksheet, {
    raw: false,
    rawNumbers: true
  })

  const timeData: Record<string, TimeDataEmployee> = {}
  let dateMin: TimeDataDateString | '' = ''
  let dateMax: TimeDataDateString | '' = ''

  for (const row of rows) {
    if (row.EmpNo === undefined || row.Code === undefined) {
      continue
    }

    if (!Object.hasOwn(timeData, row.EmpNo)) {
      timeData[row.EmpNo] = {
        employeeNumber: row.EmpNo,
        employeeName: row.Name,
        payCodes: {}
      }
    }

    const payCode: TimeDataPayCode = {
      payCode: row.Code,
      payCodeDescription: row.Description,
      hours: {}
    }

    for (const [columnName, columnValue] of Object.entries(row)) {
      if (!dateColumnRegularExpression.test(columnName)) {
        continue
      }

      const dateString = formatDate(columnName)
      const hours = Number.parseFloat(columnValue as string)

      payCode.hours[dateString] = hours

      if (dateMin === '' || dateMin > dateString) {
        dateMin = dateString
      }

      if (dateMax === '' || dateMax < dateString) {
        dateMax = dateString
      }
    }

    timeData[row.EmpNo].payCodes[row.Code] = payCode
  }

  return {
    timeData,
    dateMin: dateMin === '' ? undefined : dateMin,
    dateMax: dateMax === '' ? undefined : dateMax
  }
}

/**
 * Parses a time data Excel file from Avanti into a JavaScript object.
 * @param {string} xlsxFilePath - The path to the time data Excel file.
 * @returns {TimeData} Parsed time data
 */
export function parseTimeData(xlsxFilePath: string): TimeData {
  const workbook = XLSX.readFile(xlsxFilePath, {})

  const timeDataObject = parseTimeDataSheet(workbook.Sheets[timeDataSheetName])
  const approvedTimeDataObject = parseTimeDataSheet(
    workbook.Sheets[approvedTimeDataSheetName]
  )

  const timeData: TimeData = {
    dateMin: timeDataObject.dateMin,
    dateMax: timeDataObject.dateMax,
    timeData: timeDataObject.timeData,
    approvedTimeData: approvedTimeDataObject.timeData
  }

  return timeData
}

export * as types from './types.js'
