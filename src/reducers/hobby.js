/** @format */
const initialState = {
    list: [],
    activeId: '',
};

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newHobbyList = [...state.list];
            newHobbyList.push(action.payload);

            return { ...state, list: newHobbyList };
        }
        case 'SET_ACTIVE_HOBBY': {
            return { ...state, activeId: action.payload };
        }
        default:
            return state;
    }
};

export default hobbyReducer;
