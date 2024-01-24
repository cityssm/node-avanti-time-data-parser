export const dateColumnRegularExpression = /^\w{3} \d/;
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
 * Formats a date column name.
 * @param {string} columnName - ex. 'Tue 16-Jan-2024'
 * @returns {TimeDataDateString} ex. '2024/01/16'
 */
export function formatDate(columnName) {
    const datePieces = columnName.slice(4).split('-');
    return `${datePieces[2]}/${monthNumbers[datePieces[1]]}/${datePieces[0].padStart(2, '0')}`;
}
