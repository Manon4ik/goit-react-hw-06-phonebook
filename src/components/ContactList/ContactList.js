
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import ContactListItem from "components/ContactListItem/ContactListItem"
import { getContacts } from "../../redux/selectors"


export default function ContactList() {

    const contacts = useSelector(getContacts)
    //console.log('contact State: ', contacts);
    

    return (
        <div>
            {contacts.map(({id, name, phone})=>(
                <ContactListItem key={nanoid()} id={id} name={name} phone={phone} />
            ))}
        </div>
    )
}