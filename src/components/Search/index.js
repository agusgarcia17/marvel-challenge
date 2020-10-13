import React from "react";
import {Form, FormControl} from "react-bootstrap";

function Search(props){
    

    function handleChange(e){
        const input = e.target.value
        props.handleSearch(input)

    }

    return(
        
            <Form inline>
                <FormControl className=" mr-sm-2" type="text" placeholder="Busca aquí..." onChange={(e)=>handleChange(e)} /> 
            </Form>
    )

}

export default Search;