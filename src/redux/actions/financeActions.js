export const fetchFinanceData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_FINANCE_REQUEST' });

    setTimeout(() => {
        const mockData = {
            balance: 5000,
            transactions: [
                { id: 1, date: '2025-03-10', amount: -200, type: 'Groceries' },
                { id: 2, date: '2025-03-11', amount: 1500, type: 'Salary' },
                { id: 3, date: '2025-03-12', amount: -100, type: 'Electricity Bill' },

            ],
            notifications: ['Your balance is low', 'Salary credited'],
        };
        dispatch({ type: 'FETCH_FINANCE_SUCCESS', payload: mockData });
    }, 1000);
};
