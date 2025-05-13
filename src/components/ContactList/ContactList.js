
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import ContactListItem from "components/ContactListItem/ContactListItem"
import { getContacts , getFilters} from "../../redux/selectors"


export default function ContactList() {

    let contacts = useSelector(getContacts)
    const  filter = useSelector(getFilters)
    console.log('contact State: ', contacts);
    console.log('filter:', filter);

    if(filter){
       contacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    }
    
    

    return (
        <div>
            {contacts.map(({id, name, phone})=>(
                <ContactListItem key={nanoid()} id={id} name={name} phone={phone} />
            ))}
        </div>
    )
}