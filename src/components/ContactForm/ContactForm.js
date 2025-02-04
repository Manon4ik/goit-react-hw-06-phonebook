import { useDispatch } from "react-redux"
import { addContact } from "../../redux/actions"

export default function ContactForm() {

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.elements.name.value
        const phone = form.elements.phone.value

        dispatch(addContact(name, phone))        

    }

    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input id="name" type="text" name="Name" />
                </label>
                <label htmlFor="phone">
                    Phone
                    <input id="phone" type="text" phone="Phone" />
                </label>
                <button type="submit">Add contact</button>
            </form>
        </div>
    )
}