import * as actionTypes from './actionTypes';
import update from 'immutability-helper';

/**
 * Add item to state
 */
export const addItem = (item) => {
    item.status = 'pending';
    item.id = Math.random();
    return {
        type: actionTypes.ADD_ITEM,
        payload: item
    };
};

export const updateItems = (items) => {
    return {
        type: actionTypes.CHANGE_STATUS,
        payload: items,
    };
};

/**
 * Upadate item status on click
 */

export const changeItemStatus = (itemId) => {
    return (dispatch, getState) => {

        const items = getState().item.items;
        // const selectedIndex = items.findIndex(function(item) { 
        //     return item.id === itemId; 
        // });
        // const selectedItem = items[selectedIndex];

        let selectedIndex = 0;
        let selectedItem = '';
        items.map((item, itemIndex) => {
            if (item.id === itemId) {
                selectedItem = item;
                selectedIndex = itemIndex;
            }
        })

        selectedItem.status = selectedItem.status === 'pending' ? 'completed' : 'pending';
        var updatedComment = update(items[selectedIndex], { $set: selectedItem });

        var newItems = update(items, {
            $splice: [[selectedIndex, 1, updatedComment]]
        });

        dispatch(updateItems(newItems));
    };
};
