import React from 'react'
import ShowList from './ShowList';
import { useEffect, useState } from 'react'
import './Recherche.css'


export default function Recherche ({ handleInput, rechercher }) {
	
	const [showsData, SetShowsData] = useState([]);
    useEffect(() => {
    fetch('http://localhost:4000/rest/shows')
      .then(response => response.json())
      .then(show => SetShowsData(show))
    }, [])
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchTerm = (e) =>{
        setSearchTerm()
        let value = e.target.value;
        setSearchTerm(value);
    }
	
	return (
		<section className="elementDeRecherche">
			<input 
				type="text" 
				placeholder="Rechercher un film" 
				className="barreDeRecherche" 
				onChange={handleSearchTerm}
			/>
			<div className="search_results">
            {showsData.filter((val)=>{
                return val.title.toLowerCase().includes(searchTerm);
            })
            .map((val)=>{
                return(
                    <div className="search_result search" key={val.id} ><ShowList show={val}/></div>
                )
            })}

        </div>
			
		</section>
	)
}

