import '../assets/css/style.css'
import React , { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TextField from '@material-ui/core/TextField';
import temp_normal from '../assets/images/temp_normal.svg'
import temp_low from '../assets/images/temp_low.svg'
import not_found from '../assets/images/not_found.svg'
function  Box(props) {
    const [city , setCity] = useState(null);
    // const [currCity , searchCity] = useState();
    const [search , setSearch] = useState();

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f11ef21d13e45e5bc0d1029c10fdc4e1`
            const responce = await fetch(url)
            
            const resJson = await responce.json();
            setCity(resJson.main)
           
            
        }
        fetchApi(); 
        
    } , [search])
    const updateCity = (event)=>{
        setSearch(event.target.value)
    }
    return(
        <>
        <div className="app-container">
        <input type='text' placeholder="Enter your city name" 
                onChange={updateCity} value={search}
                style={{padding:'1rem'}}></input>

                {!city ? (
                     <>
                     <p style={{padding:'1rem'}}>Data Not Found... Enter Again</p>
                     <img src={not_found} alt="Oops Something missing..." className="temp_icon" style={{width:'100px'} , {height:'100px'}} />
                     </>
                )  : (
                    <>
                    <div className="location">
              <p>{search}</p>

            </div>
            <div className="temp">
            {
                city.temp >= 15 ? (
                    <>
                    <img src={temp_normal} alt="Oops Something missing..." className="temp_icon" style={{width:'100px'} , {height:'100px'}} />
                    <p className="mod_ff">Itna to sahan kar hi skte ho</p>
                    </>
                ) : (
                    <>
                    <img src={temp_low} alt="Oops Something missing..." className="temp_icon" style={{width:'100px'} , {height:'100px'}} />
                    <p className="mod_ff"> bhut jayada sardi hai re baba</p>
                    </>
                )
            }
              <p><span className="temp-value">{city.temp}</span>
              <span className="temp-unit">°<span className="temp-unit1">C</span></span></p>
              {/* <p><span>Min {city.temp_min}</span> | <span>Max {city.temp_max}</span></p> */}

            </div>
            {/* <div className="climate">
              <p>Sunny</p>

            </div> */}
                    </>
                )
                }
           
        </div>
        </>

    )
    
}


export default Box