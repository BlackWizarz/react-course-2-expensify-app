import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses'
import { removeExpense } from '../actions/expenses'


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
            this.props.editExpense(this.props.expense.id, expense)
            // Dispatch the action to edit the expense
            // Redirect to the dashboard
            this.props.history.push('/')
    }

    onClick = () => {
            this.props.removeExpense({ id: this.props.expense.id })
            this.props.history.push('/')
    }
  
    render () {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
}



const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === this.props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeExpense: (idObj) => dispatch(removeExpense(idObj)),
        editExpense: (idObj, expense) => dispatch(editExpense(idObj, expense))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)