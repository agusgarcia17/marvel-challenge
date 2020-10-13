import React from "react";
import "./styles.scss"
import {Card, Button} from "react-bootstrap"

function Tarjeta(props){ 
    
    const {name, description, thumbnail} = props.hero
 

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