import assert from 'node:assert'
import { describe, it } from 'node:test'

import { parseTimeData } from '../index.js'

await describe('avanti-time-data-parser', async () => {
  await it('Parses a time data file', async () => {
    const timeData = parseTimeData('test/timeData/timesheet.xlsx')

    console.log(JSON.stringify(timeData, undefined, 2))

    assert.ok(timeData)
  })
})
