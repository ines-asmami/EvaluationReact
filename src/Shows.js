import React from 'react'
import ShowList from './ShowList'

export default function Shows (props) {
    const elements = props.shows.map(show => <ShowList key={show.id} show={show} />)

    return (
        <div>
        <section className='shows'>
        {elements}
        </section>
        </div>
    )
}