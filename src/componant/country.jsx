import React, { useState } from 'react';
import './country.css'



const Country = ({country,handelVistedcountry}) => {
    const [visited,setvisited]=useState(false)
    const handelVisted =()=>{
        setvisited(!visited)
        handelVistedcountry(country)
    }
    
    return (
        <div className={`country ${visited && "bg"}`}>
            <img style={{ maxWidth: '200px' }} src={country?.flags?.flags?.png}/>
            <p>NAME :{country.name.common}</p>
            <p>{}</p>
            <button onClick={handelVisted}>{visited? "visited":"not visited"}</button>
        </div>
    );
};

export default Country;