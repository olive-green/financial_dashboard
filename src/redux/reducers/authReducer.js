const storedUser = JSON.parse(sessionStorage.getItem('userSession')) || JSON.parse(localStorage.getItem('user'));

const initialState = {
    isAuthenticated: !!storedUser, // User is logged in if found in session or localStorage
    user: storedUser || null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true, user: action.payload, error: null };
        case 'LOGIN_FAIL':
            return { ...state, error: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null };
        case 'UPDATE_PROFILE':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default authReducer;
