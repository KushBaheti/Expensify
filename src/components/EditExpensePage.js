import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}

// Want to give the component the current expense object
// We have access to props as second argument, can use it to get expense ID

// Take some of the current props that were passed into the 
// higher order component and use it to calc the props that we want to add on
const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)