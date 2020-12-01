export const initialState = {
    currentIndex: 0,
    currentSentence: "",
    titlePlayer: "No music to play",
    timer: null,
    playing: false,
    user: null,
    toggle: true,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_INDEX":
            return {
                ...state,
                currentIndex: action.currentIndex,
            };
        case "SET_TOGGLE":
            return {
                ...state,
                toggle: action.toggle,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_TIMER":
            return {
                ...state,
                timer: action.timer
            };
        case "SET_TITLE":
            return {
                ...state,
                titlePlayer: action.titlePlayer,
            };
        case "SET_CURRENTSENTENCE":
            return {
                ...state,
                currentSentence: action.currentSentence
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