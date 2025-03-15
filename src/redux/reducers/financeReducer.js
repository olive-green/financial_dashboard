const initialState = {
    balance: 0,
    transactions: [],
    notifications: [],
    loading: false,
};

const financeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FINANCE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_FINANCE_SUCCESS':
            return { ...state, ...action.payload, loading: false };
        default:
            return state;
    }
};

export default financeReducer;
