import { combineReducers } from "redux";

const initialState = {
    contacts: [
        { id: 0, name: "Rosie Simpson", phone: '123-456-78' },
        { id: 1, name: "Hermione Kline", phone: '234-567-81' },
        { id: 2, name: "Eden Clements", phone: '345-678-12' },
        { id: 3, name: "Annie Copeland", phone: '456-123-87' },
    ],
    filter: '',
};

const contactReducer = (state = initialState, action) => {

    switch (action.type) {

        case "contacts/addContact":

            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload,
                ],
            };

        case "contacts/deleteContact":

            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };

        case "filter/filterContact":
            return {
                ...state,
                filter: action.payload,
            };

        default:
            return state;
    }
};


// const filtersInitialState = {
//     status: statusFilters.all,
//   };

// const filtersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "filter/filterContact":
//             return {
//                 ...state,
//                 filter: action.payload,
//             };
//         default:
//             return state;
//     }
// };


export const rootReducer = combineReducers({
    contacts1: contactReducer,
    //filter: filtersReducer,
});