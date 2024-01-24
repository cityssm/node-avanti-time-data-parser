import type { TimeDataDateString } from './types.js';
export declare const dateColumnRegularExpression: RegExp;
/**
 * Formats a date column name.
 * @param {string} columnName - ex. 'Tue 16-Jan-2024'
 * @returns {TimeDataDateString} ex. '2024/01/16'
 */
export declare function formatDate(columnName: string): TimeDataDateString;
