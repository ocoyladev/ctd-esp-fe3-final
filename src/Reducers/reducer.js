export const reducer = (state, action) => {
    switch(action.type){
        case "GET_DENTIST":
            return {...state, dentist: action.payload};
        case "ADD_FAV":
            return {...state, favs: [...state.favs,action.payload]};
        case "TOOGLE_THEME":
            return {...state};
        case "REMOVE_FAV":
        const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id)
            return {...state,favs: filteredFavs};
    }
};