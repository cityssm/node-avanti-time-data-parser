const dateColumnRegularExpression = /^\w{3} \d/;
const monthNumbers = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
};
/**
 * Tests if a column name is a date column.
 * @param {string} columnName - A column name
 * @returns {boolean} - True when the column name is a date column.
 */
export function isDateColumn(columnName) {
    return dateColumnRegularExpression.test(columnName);
}
/**
 * Formats a date column name.
 * @param {DateColumn} columnName - ex. 'Tue 16-Jan-2024'
 * @returns {TimeDataDateString} ex. '2024/01/16'
 */
export function formatDate(columnName) {
    const datePieces = columnName.slice(4).split('-');
    return `${datePieces[2]}/${monthNumbers[datePieces[1]]}/${datePieces[0].padStart(2, '0')}`;
}
