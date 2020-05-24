import * as actionTypes from './actionTypes';
import axios from 'axios';
import update from 'immutability-helper';

/**
 * fetch items & store to state
 */
export const fetchItems = () => {
    return (dispatch, getState) => {
        dispatch(updateLoading(true));
        const userid = getState().auth.userId;

        axios.get(process.env.REACT_APP_FIREBASE_DB_URL+'?orderBy="userid"&equalTo="' + userid + '"')
            .then(response => {
                let items = [];
                Object.keys(response.data).map((itemIndex) => {
                    response.data[itemIndex].id = itemIndex;
                    items.push(response.data[itemIndex]);
                });
                dispatch(updateItems(items));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

/**
 * Add item to state
 */
export const addItem = (item) => {
    return (dispatch, getState) => {
        item.status = 'pending';
        item.userid = getState().auth.userId;

        /**
            Add item on firebase database
        **/
        axios.post(process.env.REACT_APP_FIREBASE_DB_URL, item)
            .then(response => {
                dispatch(addItemToState(item));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const updateLoading = (status) => {
    return {
        type: actionTypes.LOADING_STATUS,
        payload: status,
    };
};

export const addItemToState = (item) => {
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

        const newStatus = selectedItem.status === 'pending' ? 'completed' : 'pending';
        selectedItem.status = newStatus;
        var updatedItem = update(items[selectedIndex], { $set: selectedItem });

        /**
            * Upadate item on firebase database
        */
        axios.put('https://rakassessment.firebaseio.com/items/' + updatedItem.id + '/status.json', '"' + newStatus + '"')
            .then(response => {
                var newItems = update(items, {
                    $splice: [[selectedIndex, 1, updatedItem]]
                });
                dispatch(updateItems(newItems));
            })
            .catch(err => {
                console.log(err);
            });
    };
};
