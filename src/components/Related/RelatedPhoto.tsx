import { Photo } from "../../interfaces/Interfaces";
import RelatedItem from "./RelatedItem";
import "./Related.scss";
import "../Sass/Item.scss";
interface Props {
  related: Photo[];
}

const RelatedPhoto = (props: Props) => {
  const { related } = props;
  return (
    <div className="related_container">
      <h2>Imagenes Relacionadas</h2>
      <div className="pics_gallery">
        {related.map((related, index) => (
          <RelatedItem key={index} relateditem={related} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPhoto;
