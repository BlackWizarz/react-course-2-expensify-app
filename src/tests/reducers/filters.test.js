import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
}) 

// should set text filter
test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text:'Hello'})
    expect(state.text).toBe('Hello')
})


// should set startDate filter

test('should set dtartDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0))
})



// should set endDate filter 

test('should set endDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0))
})