export const initialState = {
    currentIndex: 0,
    playing: false,
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


        default:
            return state;
    }
};

export default reducer;