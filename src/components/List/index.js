import React from "react";
import {Link} from "react-router-dom";
import {Container, CardColumns} from "react-bootstrap"
import Tarjeta from "../Tarjeta";
import "./styles.scss"; 

function List(props){
    
    const {heroes} = props // traigo el listado de heroes que se hizo el fetch en el home

    return(

        <Container>
            {heroes.length === 0 ? // pregunta si hay datos en el array de superheroes, si no hay se muestra el primer título, sino el segundo
                <h1 className="p-3">Ingrese el nombre de un superhéroe en el buscador</h1>
            : 
                <h1 className="p-3">Héroes</h1>
            }
                <CardColumns>
                {heroes
                    .map((hero)=>{
                    return(
                        <Link className="card-shadow" key={hero.id} to={`/${hero.id}`}>
                            <Tarjeta hero={hero}/> 
                        </Link>
                        )
                    }) 
                }
                </CardColumns> 
        </Container>

    )

}

export default List;