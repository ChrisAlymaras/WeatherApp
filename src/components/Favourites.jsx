import { useContext } from 'react';
import {FavouritesContext} from '../context/FavouritesContext';
import './Favourites.css';

export default function Favourites({ onSelect }){
    const {favourites, removeFavourite} = useContext(FavouritesContext);
    if (favourites.length === 0){return <p>No favourties yet</p>}
    return (
            <div className="favourites-container">
            <h3>Favourites</h3>
                <ul>
                    {favourites.map((city,index) =>(
                        <li key={index}>
                            <span onClick={()=>onSelect(city)}>{city}</span>
                            <button onClick={()=>removeFavourite(city)}>Remove</button>
                        </li>))}
                </ul>
            </div>
    );
}