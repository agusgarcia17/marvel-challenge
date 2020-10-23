import React, {useEffect, useState} from 'react'; 
import NavBar from "./../../components/NavBar";
import List from "./../../components/List";

function Home(){
    
  const [heroes, setHeroes] = useState([]) // listado de heroes que trae la api
  const [query, setQuery] = useState("") // valor del input de busqueda


  // Se ejecuta cuando se monta el componente y cuando se actualiza, por lo que realiza el fetch a media que cambia el input
  useEffect(() => {
    async function fetchData() {
        const marvelUrl = "https://gateway.marvel.com:443/v1/public/characters?" 
        const apiKey = "29f5064dd46a6ec4f6e14ab16a6f38e7"
        const ts = "1"
        const hash = "3f798637cd8f9b70f33dea553b100db2" //ts + privateKey + apiKey
    
        const data = await fetch(`${marvelUrl}nameStartsWith=${query}&apikey=${apiKey}&ts=${ts}&hash=${hash}`) // fetch a la data segun como empieza el valor del input
        const dataJson = await data.json();
    
        setHeroes(dataJson.data.results)  // se guarda el listado de heroes
    }
    // Si no hay query, no se realiza el pedido
      if(query){
          fetchData();
      } 

  }, [query]); // query es el valor de busqueda que se utiliza en la url dinamica

    // Callback para traer el valor del input y guardarlo en estado
    function handleSearch(input) {
        setQuery(input)
    }

    return(
        <div className="homeContainer">
            <NavBar pagina="home" handleSearch={handleSearch}/> 
            <List heroes={heroes}/>  
        </div>
    )
}

export default Home;