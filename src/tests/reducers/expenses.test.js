import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    })
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('Should not remove expense when id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    })
    expect(state).toEqual(expenses)
})

test('Should add expense', () => {
    const newExpense = {
        id: '4',
        description: 'new expense',
        amount: 100,
        createdAt: 0,
        note: ''
    }
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: newExpense
    })
    expect(state).toEqual([...expenses, newExpense])
})

test('Should edit an expense', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test('Should not edit an expense when id not found', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})