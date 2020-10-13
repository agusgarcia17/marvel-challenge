import React, {useEffect, useState} from 'react'; 
import NavBar from "./../../components/NavBar"
import List from "./../../components/List";

function Home(){
    
  const [heroes, setHeroes] = useState([])
  const [query, setQuery] = useState("")
  
  useEffect(() => {
    async function fetchData() {
        const marvelUrl = "https://gateway.marvel.com:443/v1/public/characters?"
        const apiKey = "29f5064dd46a6ec4f6e14ab16a6f38e7"
        const ts = "1"
        const hash = "3f798637cd8f9b70f33dea553b100db2"
    
        const data = await fetch(`${marvelUrl}nameStartsWith=${query}&apikey=${apiKey}&ts=${ts}&hash=${hash}`)
        const dataJson = await data.json();
    
        setHeroes(dataJson.data.results)
        // console.log(heroes)
    }

      if(query){
          fetchData();
      }
    //   console.log(query)
  }, [query]);

    function handleSearch(input) {
        setQuery(input)
    }

return(
    <>
        <NavBar pagina="home" handleSearch={handleSearch}/>
        <List heroes={heroes}/>  
    </>
)

}

export default Home;