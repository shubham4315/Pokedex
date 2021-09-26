import React from "react";
import { pokemonData } from "../../Data/pokemonData";
import { PokemonSchema, PokemonSpritesSchema, UnPatchedPokemonSchema } from "../../types/PokemonSchema";
import Pokedex from "../Pokedex/Pokedex";
import './App.css';

interface AppState{
    searchField : string;
    allPokemons : PokemonSchema[];
    searchedPokemons : PokemonSchema[];
    selectedPokemon : PokemonSchema | undefined;
}
 class App extends React.Component<any,AppState>{

    state = {
        searchField : "",
        allPokemons : [],
        searchedPokemons : [],
        selectedPokemon : undefined
    }

    patchPokemonData = (pokemons : UnPatchedPokemonSchema[]) : PokemonSchema[] =>{
        const patchedPokemons = pokemons.map((pokemon)=>{
            let parsedSprites : PokemonSpritesSchema ={
                normal : undefined,
                animated : undefined,
            };
            try{
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            }catch(e){
                console.log("Exception while parsing sprites : " , e);
            }

            const patchedPokemon : PokemonSchema = {
                ...pokemon,
                sprites : parsedSprites
            };

            return patchedPokemon;
        });

        return patchedPokemons;
    }

    componentDidMount(){
        const patchedPokemons : PokemonSchema[] = this.patchPokemonData(pokemonData);
        this.setState({
            allPokemons : patchedPokemons,
            searchedPokemons : patchedPokemons
        });
    }

    handleInputChange = (inputValue : string) =>{
        const {allPokemons} = this.state;

        const searchedPokemons = allPokemons.filter((pokemon : PokemonSchema)=>{
            return(
                pokemon.name && pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
            );
        })

        this.setState({searchedPokemons : searchedPokemons, searchField : inputValue});
    }

    handleClick = (pokemonName : string)=>{
        const {allPokemons} = this.state;

        const selectedPokemon = allPokemons.find((pokemon : PokemonSchema)=>
            pokemon.name === pokemonName
        )
        this.setState({selectedPokemon});
    }

    render(){
        return(
            <div className="app">
                <h1>Pokedex</h1>
                <Pokedex searchedPokemons = {this.state.searchedPokemons} onInputChange = {this.handleInputChange} selectedPokemon={this.state.selectedPokemon} onPokemonClick={this.handleClick}/>
            </div>
        )
    }
 }

 export default App;