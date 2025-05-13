import { useDispatch } from "react-redux"
import { filterContact } from "../../redux/actions"

export default function Filter(){

    const dispatch = useDispatch()

    const handleFilter = evt =>{
        const value = evt.currentTarget.value.toLowerCase()
        //console.log(value)
        dispatch(filterContact(value))
        
    }

    return(
        <div>
            <h2>Contacts</h2>
            <label htmlFor="filter">Find contacts by name
                <input id="filter" type="text" name="filter" onChange={handleFilter}/>
            </label>
        </div>
    )
}