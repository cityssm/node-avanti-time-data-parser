import type { TimeDataDateString } from './types.js';
import { type DateColumn } from './workSheetTypes.js';
/**
 * Tests if a column name is a date column.
 * @param {string} columnName - A column name
 * @returns {boolean} - True when the column name is a date column.
 */
export declare function isDateColumn(columnName: string): columnName is DateColumn;
/**
 * Formats a date column name.
 * @param {DateColumn} columnName - ex. 'Tue 16-Jan-2024'
 * @returns {TimeDataDateString} ex. '2024/01/16'
 */
export declare function formatDate(columnName: DateColumn): TimeDataDateString;
