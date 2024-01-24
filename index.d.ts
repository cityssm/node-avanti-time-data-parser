import type { TimeData } from './types.js';
/**
 * Parses a time data Excel file from Avanti into a JavaScript object.
 * @param {string} xlsxFilePath - The path to the time data Excel file.
 * @returns {TimeData} Parsed time data
 */
export declare function parseTimeData(xlsxFilePath: string): TimeData;
export * as types from './types.js';
