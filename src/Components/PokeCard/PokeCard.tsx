import React from "react";
import './PokeCard.css';

interface pokeCardProps{
    spriteUrl?: string;
    name : string;
    onPokemonClick : (pokemonName :string) => void;
}

const PokeCard = ({spriteUrl,name,onPokemonClick} : pokeCardProps) => {
    return(
        <div onClick={()=>onPokemonClick(name)} className="pokecard">
            <img src={spriteUrl} alt="pokemon" className="pokemon-sprite" />
            <p>{name}</p>
        </div>
    );
}

export default PokeCard;