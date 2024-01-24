/**
 * Format: yyyy/mm/dd
 */
export type TimeDataDateString = `${number}/${number}/${number}`

export interface TimeData {
  /**
   * The start date for the time data.
   * Format: yyyy/mm/dd
   */
  dateMin?: TimeDataDateString

  /**
   * The end date for the time data.
   * Format: yyyy/mm/dd
   */
  dateMax?: TimeDataDateString

  /**
   * Data from the 'Time Data' sheet.
   * Keyed by Employee Number.
   */
  timeData: Record<string, TimeDataEmployee>

  /**
   * Data from the 'Approved Time Data' sheet.
   * Keyed by Employee Number.
   */
  approvedTimeData: Record<string, TimeDataEmployee>
}

export interface TimeDataEmployee {
  employeeNumber: string
  employeeName: string
  payCodes: Record<string, TimeDataPayCode>
}

export interface TimeDataPayCode {
  payCode: string
  payCodeDescription: string
  hours: Record<TimeDataDateString, number>
}
