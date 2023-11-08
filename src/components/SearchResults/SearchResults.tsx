import { useEffect, useState } from "react";
import {Photo} from "../../interfaces/Interfaces";
import { Photo as PhotoClass} from "../../services/Photo";
import SearchItems from "./SearchItems";
import "./Search.scss";
import "../Sass/Item.scss";
import Loader from "../Loader/Loader";

const SearchResults = (props:{query:string}) => {
    const {query} = props;
    const [photos, setPhotos] = useState<Photo[]>();
    useEffect(()=>{ 
    (async ()=>{
        try {
          setPhotos(undefined)
            const photoController = new PhotoClass;
            const response = await photoController.SearchPhotos(query);
            setPhotos(response)
        } catch (error) {
            console.error(error);
            
        }
    })()
    },[query]);    
  if(!photos) return <Loader />
  if(photos.length === 0) return "No hay Resultados para esto"
  return (
    <div className="search_container">
      <h3>Looking for: {query}</h3>
      <div className="pics_gallery">
        {photos.map((photo, index) => (
        <SearchItems key={index} photo={photo} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
