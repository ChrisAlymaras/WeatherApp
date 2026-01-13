import { createContext, useState, useEffect } from 'react';

export const FavouritesContext = createContext();

export function GetFavourites({ children }){
    const [favourites,setFavourites] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("favorites"));
        if (saved){setFavourites(saved)}
    },[]);

    useEffect(() => {
        localStorage.setItem("favorites",JSON.stringify(favourites));
    },[favourites]);


    //declare add and delete functions
    function addFavourite(city){
        if(!favourites.includes(city)){setFavourites([...favourites,city])}
    }

    function removeFavourite(city){
        if(favourites.includes(city)){setFavourites(favourites.filter(hold=>hold!==city))}
    }

    return (
        <FavouritesContext.Provider value={{favourites,addFavourite,removeFavourite}}>
            {children}
        </FavouritesContext.Provider>
    );

}