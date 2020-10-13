import React from "react";
import {Link} from "react-router-dom";
import {Container, CardColumns} from "react-bootstrap"
import "./styles.scss"
import Tarjeta from "../Tarjeta";

function List(props){
    // console.log(props.heros)
    const {heroes} = props
    return(

        <Container>

        {heroes.length === 0 ?
            <h1 className="p-3">Ingresa el nombre de un superhéroe en el buscador</h1>
        : 
            <h1 className="p-3">Heroes</h1>
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