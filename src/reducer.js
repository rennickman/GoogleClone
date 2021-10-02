// Set up initial for when app is first loaded
export const initialState = {
    term: null
};

// Set the action type
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
};


const reducer = (state, action) => {
    // Debugger
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return { ...state, term: action.term };
        default:
            return state;
    }
};


export default reducer;