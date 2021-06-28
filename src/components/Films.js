import React from 'react'
import App from '../App'

export default function ShowList(props) {
    const elements = props.shows.map(show => <App key={show.id} show={show} />)

    return (
        <div>{elements}</div>
    )
}