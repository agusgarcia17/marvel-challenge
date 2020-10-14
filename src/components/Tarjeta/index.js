import React from "react";
import {Card, Button} from "react-bootstrap";
import "./styles.scss";

function Tarjeta(props){ 
    
    const {name, description, thumbnail} = props.hero // desestructuro los datos que quiero usar de las props que traigo del heroe
 
    return(
        <Card className="p-3" bg="dark" text="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button variant="danger">Ver mas detalles</Button>
            </Card.Body>
        </Card>
    )
}

export default Tarjeta;