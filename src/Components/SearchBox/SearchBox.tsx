import React from "react";
import './SearchBox.css';

interface serachBoxProps{
    onInputChange : (inputValue : string) => void; 
}

const SearchBox = ({onInputChange}:serachBoxProps) => {
    return(
        <input 
            onChange = {(e) => onInputChange(e.target.value)}
            className="search"
            type="search"
            placeholder="Search Pokemons"
        ></input>
    );
}
export default SearchBox;