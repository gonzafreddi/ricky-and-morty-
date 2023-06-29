import SearchBar from "../searchbar/SearchBar"
import About from "../about/About"
import { Link } from "react-router-dom"

export default function Nav({onSearch}){
    return(
        <div>
            <h2>Nav</h2>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}