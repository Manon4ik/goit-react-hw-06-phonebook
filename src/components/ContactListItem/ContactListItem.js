export default function ContactListItem({id, name, phone}){
    return(
        <div>{name} : {phone} <button type="button">Delete</button></div>
    )
}