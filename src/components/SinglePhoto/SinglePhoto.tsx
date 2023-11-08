import { useState, useEffect } from "react";
import { Photo as PhotoClass } from "../../services/Photo";
import { SinglePhoto, Photo } from "../../interfaces/Interfaces";
import "./SinglePhoto.scss";
import RelatedPhoto from "../Related/RelatedPhoto";
import { AiFillEye, AiFillLike } from 'react-icons/ai';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../Loader/Loader";
interface Props {
  id: string;
}



const SinglePhoto = (props: Props) => {
  const { id } = props;
  const [isLoading, setisLoading] = useState(false)
  const [photo, setPhoto] = useState<SinglePhoto>();
  const [related, setRelated] = useState<Photo[]>([]);
  useEffect(() => {
    (async () => {
      try { 
        setisLoading(true);
        const photoController = new PhotoClass();
        const response = await photoController.GetPhoto(id);
        const responserelated = await photoController.GetRelated(id, "related");
        setRelated(responserelated);
        setPhoto(response);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } catch (error) {
        console.error(error);
      } finally {
        setisLoading(false)
      }
    })();
  }, [id]);
  
  if (isLoading) return <Loader />;
  if (!photo) return "";
  return (
    <>
    <div className="single_photo">
      <div className="single_photo_image">
        <LazyLoadImage src={photo.urls.small} alt={photo.alt_description} effect="blur" />
      </div>
      <div className="single_photo_content">
        <div className="username_profile">
          <img src={photo.user.profile_image.large} alt={photo.user.username} />
          <h3>{photo.user.username}</h3>
        </div>
        <div className="description"><b>Description: </b>"{photo.alt_description}"</div>
        <div><b>Publish:</b> {new Date(photo.created_at).toDateString()}</div>
        <div className="image_activity">
          <span><AiFillEye className="icon_details" /> {photo.views.toLocaleString()}</span>
          <span><AiFillLike className="icon_details" /> {photo.likes.toLocaleString()}</span>
          <span><FaCloudDownloadAlt className="icon_details" /> {photo.downloads.toLocaleString()}</span>
        </div>
       
      </div>
    </div>
    { related ? <RelatedPhoto related={related} /> : ""}
    </>
  );
};

export default SinglePhoto;
