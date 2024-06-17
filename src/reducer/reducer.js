const initialState = JSON.parse(localStorage.getItem('favs')) || [];

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            const updatedState = [...state, action.payload];
            localStorage.setItem('favs', JSON.stringify(updatedState));
            return updatedState;
        case 'REMOVE_FAV':
            const filteredState = state.filter(dentist => dentist.id !== action.payload.id);
            localStorage.setItem('favs', JSON.stringify(filteredState));
            return filteredState;
        default:
            return state;
    }
};



export { initialState, favoritesReducer };