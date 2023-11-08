import { useParams } from "react-router-dom";
import SinglePhoto from "../components/SinglePhoto/SinglePhoto";
const Single = () => {
  const params = useParams();
  const { id } = params;
  const idphoto = id || "default";
  return <SinglePhoto id={idphoto} />;
};

export default Single;
