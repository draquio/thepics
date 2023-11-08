import { Photo as PhotoInterface } from "../../interfaces/Interfaces";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
interface PhotoItemProps {
  photo: PhotoInterface;
}

const GetPhotoItem = (props: PhotoItemProps) => {
  const { photo } = props;
  return (
    <div className="pic_item">
      <Link to={`/photo/${photo.id}`}>
        <LazyLoadImage
          src={photo.urls.small}
          alt={photo.alt_description}
          effect="blur"
          className="img_item"
        />
      </Link>
    </div>
  );
};

export default GetPhotoItem;
