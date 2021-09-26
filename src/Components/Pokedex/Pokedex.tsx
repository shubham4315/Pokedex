import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import PokeList from "../PokeList/PokeList";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import './Pokedex.css'

interface pokedexProps {
    searchedPokemons : PokemonSchema[];
    selectedPokemon : PokemonSchema | undefined;
    onInputChange : (inputValue : string) => void;
    onPokemonClick : (pokemonName : string) => void;

}

const Pokedex = ({searchedPokemons ,selectedPokemon, onPokemonClick ,  onInputChange} : pokedexProps) =>{
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputChange={onInputChange}/>
                <PokeList onPokemonClick={onPokemonClick} searchedPokemons={searchedPokemons}/>
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
    );
}

export default Pokedex;