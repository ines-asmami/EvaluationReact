import React from 'react'

export default function Recherche ({ handleInput, rechercher }) {
	return (
		<section className="elementDeRecherche">
			<input 
				type="text" 
				placeholder="Rechercher un film" 
				className="barreDeRecherche" 
				onChange={handleInput}
				onKeyPress={rechercher}
			/>
		</section>
	)
}

