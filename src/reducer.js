export const initialState = {
    currentIndex: 0,
    playing: false,
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_INDEX":
            return {
                ...state,
                currentIndex: action.currentIndex,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;