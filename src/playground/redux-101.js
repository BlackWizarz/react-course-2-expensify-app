import { createStore } from 'redux'

// Action generators - function that return aciton object


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers are pure functions
// Never change state or action


const countReducer = (state = { count: 0 }, action) => { // default stateObj
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: state.count - state.count
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
}


const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


// Actions - than an object that gets sent to the store

// walk, stop_walking, sit, work, stop_working


// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 101}))

// I'd like to reset to count to zero
