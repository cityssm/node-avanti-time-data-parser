import assert from 'node:assert';
import { parseTimeData } from '../index.js';
describe('avanti-time-data-parser', () => {
    it('Parses a time data file', () => {
        const timeData = parseTimeData('test/timeData/timesheet.xlsx');
        console.log(JSON.stringify(timeData, undefined, 2));
        assert.ok(timeData);
    });
});
