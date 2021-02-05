import React , { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function  Input(props) {
    const [city , setCity] = useState(null);
    const [currCity , searchCity] = useState();
    const [search , setSearch] = useState("Mumbai");
    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f11ef21d13e45e5bc0d1029c10fdc4e1`
            const responce = await fetch(url)
            const resJson = await responce.json();
            setCity(search)
        }
        fetchApi();
    } , [setSearch])
    const updateCity = (event)=>{
        searchCity(event.target.value)
    }
    const finalCity = ()=>{
        setSearch(currCity)
    }
    return(
        <>
          <div>
                <input type='text' placeholder="Enter city name" 
                onChange={updateCity} value={currCity}
                style={{padding:'0.9rem'} , {margin:'0.5rem'}}></input>
                <button onClick={finalCity} style={{padding:'0.2rem'}}><SearchIcon/></button>
                <br/>
                <h1 style={{padding:'0.5rem'}}><WbSunnyIcon/>{search}</h1>
                
                {/* <h3>{city.main.temp}</h3> */}
            </div>
        </>
    )
    
}

export default Input