import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should gen set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should gen set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should set text filter with para that provide', () => {
    const action = setTextFilter('Hello')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hello'
    })
})

test('should set text filter with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


test('should sort filter by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('should sort filter by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})