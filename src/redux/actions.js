import { type } from "@testing-library/user-event/dist/type";
import { nanoid } from "nanoid";

export const addContact = (name, phone) =>{
    return{
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            name,
            phone
        }
    }
}

export const deleteContact = contactID =>{
    return{
        type: "contacts/deleteContact",
        payload: contactID
    }
}