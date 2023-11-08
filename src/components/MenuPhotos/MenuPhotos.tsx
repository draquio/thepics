import "./Menuphoto.scss";
interface MenuProps {
  menu: string;
  changeMenu: (value:string) => void;
}
const MenuPhotos = (props:MenuProps) => {
  const { menu, changeMenu } = props;
  const menulist = ["latest", "oldest", "popular"];
  const menuname = ["Nuevas", "Más antiguas", "Más Vistas"];
  return (
    <div className="menu_photo">
      {menulist.map((menulist, index) => (
        <div
          key={index}
          className={`menu_photo_item ${menu === menulist ? "active" : ""}`}
          onClick={() => changeMenu(menulist)}
        >
          {menuname[index]}
        </div>
      ))}
    </div>
  );
};

export default MenuPhotos;
