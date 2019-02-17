import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} /> // if we pass an object that doesn't have a name in Component this object'll be refered as a props object
                })
            )
        } 
    </div>
)

const mapStateToProps = (state) => { // This function return props Object
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}



export default connect(mapStateToProps)(ExpenseList) // When we connect redux store to the component when redux store chnage component will auto render 

