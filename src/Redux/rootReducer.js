import { createStore, combineReducers } from "redux";
import { randomReducer } from "./RandomReducer";
import { favoritesReducer } from "./FavoritesReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import { requestReducer } from "./RequestReducer";
import { showHideReducer } from "./ShowHideReducer";
import { formDataReducer } from "./FormDataReducer";

const rootReducer = combineReducers({
    random: randomReducer,
    favorites: favoritesReducer,
    request: requestReducer,
    showHide: showHideReducer,
    formData: formDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools())