import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    items: []
};

/**
 * Add item to state
 */
const addItem = ( state, action ) => {
    return updateObject( state, {
        items: state.items.concat( action.payload ),
        loading:false
    } );
};

/**
 * Upadate item status
 */
const changeItemStatus = (state, action) => {
    return updateObject(state, {
        loading: false,
        items: action.payload
    });
};
/**
 * Upadate item status
 */
const updateItemLoading = (state, action) => {
    return updateObject(state, {
        loading: action.payload
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state, action);
        case actionTypes.CHANGE_STATUS: return changeItemStatus(state, action);
        case actionTypes.LOADING_STATUS: return updateItemLoading(state, action);
        default: return state;
    }
};

export default reducer;