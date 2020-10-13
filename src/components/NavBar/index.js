import React from "react";
import {Link} from "react-router-dom"
import Search from "./../Search"
import {Navbar, Button} from "react-bootstrap";


function NavBar(props){

    function handleSearch(input){ 
        props.handleSearch(input)

    }

    return(
        <Navbar bg="dark justify-content-between">
            <Navbar.Brand href="/">
            <img
                src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Marvel.png" 
                height="40"
                className="d-inline-block align-top"
                alt="Marvel logo"
            />
            </Navbar.Brand>

            {
                props.pagina === "home" ? 
                    <Search handleSearch={handleSearch}/> 
                :
                    <Link to="/"> <Button variant="danger">Volver a Home</Button>  </Link>
            }
        </Navbar>
    )

}

export default NavBar;