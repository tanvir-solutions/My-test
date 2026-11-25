import { use, useState } from "react";
import Country from "./country";
import './countris.css';

const Countris = ({ countrisdata }) => {
    const countryData = use(countrisdata);
    const [visitedCountry, setVisitedCountry] = useState([]);
    
    const handelVistedcountry = (country) => {
        console.log(country.name.common)
        const newVisited = [...visitedCountry, country];
        setVisitedCountry(newVisited);
    };

    return (
        <div>
            <h1>Country : {countryData.length}</h1>
            <h2>Visited country : {visitedCountry.length}</h2>
            {
                visitedCountry.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }

            <div className="countris">
                {countryData.map(country => (
                    <Country
                        key={country.cca3} 
                        country={country}
                        handelVistedcountry={handelVistedcountry}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countris;
