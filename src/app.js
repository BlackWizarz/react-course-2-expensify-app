import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses  from './selectors/expenses'
import './styles/styles.scss'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css' // css for SingleDatePicker
// const date = new Date()
const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    console.log(getVisibleExpenses(state.expenses, state.filters))
}) 
store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))





const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// class in react need to return jsx from render medthod
ReactDOM.render(jsx, document.getElementById('app'))



































// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting() {
//         return `Hi ${this.name}`
//     }
// }
 
// const oldSyntax = new OldSyntax()
// const getGreeting = oldSyntax.getGreeting
// console.log(getGreeting())


// // --------------------->

// class NewSyntax {
//     name = 'Mike'
//     getGreeting = () => {
//         return `Hi ${this.name}`
//     }
// }
// const newsyntax = new NewSyntax()
// const newGetGreeting = newsyntax.getGreeting
// console.log(newGetGreeting())





