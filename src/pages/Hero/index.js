import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import NavBar from "./../../components/NavBar";
import "./styles.scss";

function Hero (props){

    const [hero, setHero] = useState({}) // datos del heroe identificado con el id
    const heroId = props.match.params.heroId;  // se guarda el id que viene por params

    useEffect(() => {
        async function fetchData() {
            const marvelUrl = "https://gateway.marvel.com:443/v1/public/characters/"
            const apiKey = "29f5064dd46a6ec4f6e14ab16a6f38e7"
            const ts = "1"
            const hash = "3f798637cd8f9b70f33dea553b100db2"
        
            const data = await fetch(`${marvelUrl}${heroId}?apikey=${apiKey}&ts=${ts}&hash=${hash}`) // fetch a la data del heroe por id
            const dataJson = await data.json();

            const dataHero = await dataJson.data.results[0]; 

            setHero(dataHero) // se guarda la data util del heroe
        }
    
          if(heroId){ // si no tengo Id, no busca la data
              fetchData();
            } 
      }, [heroId]); // id que vino por params
 

    return (
        <div className="heroContainer">
            <NavBar pagina="hero"  />
            <Container>
                { hero && hero.thumbnail ? // si no tiene valor el hero, ni el thumbnail no se renderizan los datos
                    <div className="heroContainer m-3">
                        <h2>{hero.name}</h2>   
                        <img className="m-auto"  height="350" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name}/>
                        <h3>Nro: {hero.id}</h3>   
                        <h5 className="m-3">{hero.description}</h5>
                            {hero.comics.available > 0 ? // si no tiene comics no se renderiza el listado de comics 
                                <div>
                                    <h5 className="m-3 text-left">Comics: </h5>
                                    <ol>
                                        {hero.comics.items.map((comic)=>{
                                            return(
                                                <li className="text-left">{comic.name}</li>
                                            )}
                                        )}
                                    </ol>
                                </div>
                                : "" // vacio sin comics
                                } 
                    </div> 
                    : "" // vacio sin hero / hero.thumbnail 
                    } 
            </Container>
        </div>
    )}

export default Hero;