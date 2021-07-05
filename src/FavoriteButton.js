import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FavoriteButton (props) {
    const {
        serieTitle, favs, id
    }=props
    const [fav, setfav] = useState(favs);
      function onButtonClick() {
          fetch(`http://localhost:4000/rest/shows/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: serieTitle,
                user: { favorited: !fav } })
            })
            .then(response => response.json())
            .then(setfav(!fav))
        }

    let favoriteButton = (
    <button className="btn btn-default swap" onClick={() => onButtonClick()}><span className="glyphicon glyphicon-star-empty"></span></button>)
        if (fav === false) {
            favoriteButton = (
                <button className="btn btn-default swap bg-light" onClick={() => onButtonClick()}><span className="glyphicon glyphicon-star-empty"></span></button>)
        } else {
            favoriteButton = (
                <button className="btn btn-default swap bg-light" onClick={() => onButtonClick()}><span className="glyphicon glyphicon-star"></span></button>)
        }
        return favoriteButton

}
