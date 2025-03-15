export const login = (username, password) => async (dispatch) => {
    const mockUser = { 
        username: 'user123', 
        name: 'John Doe', 
        password: "pankaj", 
        token: 'e234234dffflkj24324lkjdsd' 
    };

    if (username === mockUser.username && password === mockUser.password) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });

       
        localStorage.setItem('user', JSON.stringify(mockUser));
        sessionStorage.setItem('userSession', JSON.stringify(mockUser));
    } else {
        dispatch({ type: 'LOGIN_FAIL', payload: 'Invalid credentials' });
    }
};

export const logout = () => (dispatch) => {
    sessionStorage.removeItem('userSession'); 
    dispatch({ type: 'LOGOUT' });
};

export const updateProfile = (name, password) => (dispatch) => {
    let updatedUser = JSON.parse(localStorage.getItem('user')) || {};

    updatedUser.name = name;

    if (password) {
        updatedUser.password = password;
    }

    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    sessionStorage.setItem('userSession', JSON.stringify(updatedUser));

    dispatch({ type: 'UPDATE_PROFILE', payload: updatedUser });
};
