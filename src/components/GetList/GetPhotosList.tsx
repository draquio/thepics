import { Photo as PhotoClass } from "../../services/Photo";
import { Photo as PhotoInterface } from "../../interfaces/Interfaces";
import "../Sass/Item.scss"
import { useState, useEffect } from "react";
import GetPhotoItem from "./GetPhotoItem";
import Pagination from "../Pagination/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import MenuPhotos from "../MenuPhotos/MenuPhotos";

const GetPhotoList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(parseInt(searchParams.get("page") || "1", 10));
  const [photos, setPhotos] = useState<PhotoInterface[]>([]);
  const [menu, setMenu] = useState("latest")
  const changePage = (value:number) => {
    if (page >= 1) {
      const actualpage = page + value;
      setPage(actualpage);
      navigate(`?page=${actualpage}`); 
    }
  }
  const changeMenu = (value:string) => {
    setMenu(value)
    setPage(1)
    navigate(`?page=1`); 
  }
  useEffect(() => {
    (async () => {
      try {
        const photoController = new PhotoClass();
        const response = await photoController.GetList(menu, 30, page);
        setPhotos(response);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page, menu]);
  
  if (photos.length === 0) return "";
  return (
    <>
    <MenuPhotos menu={menu} changeMenu={changeMenu}/>
      <div className="pics_gallery">
        {photos.map((photo) => (
          <GetPhotoItem photo={photo} key={photo.id} />
        ))}
      </div>
      <Pagination page={page} changePage={changePage} />
    </>
  );
};

export default GetPhotoList;
