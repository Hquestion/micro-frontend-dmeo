const initialState = {
    username: '',
    password: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const { username, password } = action.payload;
            return {
                ...state,
                username,
                password,
            };
        }
        default:
            return state;
    }
}
