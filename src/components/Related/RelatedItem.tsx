import { Link } from "react-router-dom";
import { Photo } from "../../interfaces/Interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RelatedItem = (props: { relateditem: Photo }) => {
  const { relateditem } = props;
  return (
    <div className="pic_item">
      <Link to={`/photo/${relateditem.id}`}>
        <LazyLoadImage
          src={relateditem.urls.small}
          alt={relateditem.alt_description}
          effect="blur"
          className="img_item"
        />
      </Link>
    </div>
  );
};

export default RelatedItem;
