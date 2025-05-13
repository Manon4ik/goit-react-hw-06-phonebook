import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/actions"

export default function ContactListItem({id, name, phone}){

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }

    return(
        <div>{name} : {phone} <button type="button" onClick={handleDelete}>Delete</button></div>
    )
}