import React from 'react'
import FavoriteButton from './FavoriteButton';


export default function ShowList(props) {
    const {show} = props;
    const tags = show.genres.map(genre => <span key={genre}className="genre">{genre}</span>);

return (
    <div className="AppShow">
        <section className="panel-dark">
            <div className="container-fluid">
                <img src={show.images.banner}  alt="banniere" className="img-cirlce"></img>

                <h1 className='pb-5 fw-bold caption text-center'>
                    {show.title}
                 ({show.creation})
                 </h1>
            </div>
            
                <div className="image"><img src={show.images.poster}  className="img-rounded img-circle" alt="poster"></img></div>
                <div className="p-5"><p className='description'>{show.description}</p></div>
            <div className="p-3">
                {tags}
           </div>
           <FavoriteButton serieTitle ={show.title} favs ={show.user.favorited} id={show.id}/>
       </section>
    </div>
)
}