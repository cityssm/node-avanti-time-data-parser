// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/indent */

type DayOfWeek = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

type MonthOfYear =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'

export type DateColumn = `${DayOfWeek} ${number}-${MonthOfYear}-${number}`

export type WorkSheetRow =
  | WorkSheetEmployeeRecordRow
  | WorkSheetEmployeeSummaryRow
  | WorkSheetFooterSummaryRow

interface WorkSheetEmployeeRecordRow {
  EmpNo: string
  Name: string
  Code: string
  Description: string
  [columnDate: DateColumn]: `${number}`
  'Total Hours': `${number}`
}

interface WorkSheetEmployeeSummaryRow {
  EmpNo: string
  Code: undefined
  Name:
    | 'Total service worked:'
    | 'Processed'
    | 'Approved'
    | 'In a batch'
    | string
  [columnDate: DateColumn]: string
  'Total Hours'?: string
}

interface WorkSheetFooterSummaryRow {
  EmpNo: undefined
  Name: 'Total Hours:' | 'Grand Total Service Hours:' | string
  Code?: string
  Description?: string
  [columnDate: DateColumn]: `${number}`
  'Total Hours': `${number}`
}
