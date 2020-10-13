import React, {useEffect, useState} from "react"
import NavBar from "./../../components/NavBar"
import {Container} from "react-bootstrap";
import "./styles.scss"

function Hero (props){

    const [hero, setHero] = useState({})
    const heroId = props.match.params.heroId; 

    useEffect(() => {
        async function fetchData() {
            const marvelUrl = "https://gateway.marvel.com:443/v1/public/characters/"
            const apiKey = "29f5064dd46a6ec4f6e14ab16a6f38e7"
            const ts = "1"
            const hash = "3f798637cd8f9b70f33dea553b100db2"
        
            const data = await fetch(`${marvelUrl}${heroId}?apikey=${apiKey}&ts=${ts}&hash=${hash}`)
            const dataJson = await data.json();
            const dataHero = await dataJson.data.results[0];
            setHero(dataHero) 
        }
    
          if(heroId){
              fetchData();
            } 
      }, [heroId]);
 

    return (
        <>
        <NavBar pagina="hero"  />
        <Container>
            {
                hero && hero.thumbnail ? 
                <div className="heroContainer m-3">
                    <h2>{hero.name}</h2>   
                    <img className="m-auto"  height="350" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name}/>
                    <h3>Nro: {hero.id}</h3>   
                    <h5 className="m-3">{hero.description}</h5>

                    {hero.comics.available > 0 ? 
                        <div>
                            <h5 className="m-3 text-left">Comics: </h5>
                            <ol>
                                {hero.comics.items.map((comic)=>{
                                    return(
                                        <li className="text-left">{comic.name}</li>
                                    )
                                })}
                            </ol>
                        </div>
                        : ""
                        }
                    

                </div>
                
                : ""
            }
             
        </Container>
        </>
    )
}


export default Hero;