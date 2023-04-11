import "./CardEntryList.css";
import { ReactComponent as FavLogo } from "../../resources/star.svg";
// import { ReactComponent as FavLogoFilled } from "../../resources/star-filled.svg";

export default function CardEntryList() {
  return (
    <article className="Card-EntryList">
      <h4 className="Card-EntryList--Date">APR 10, 2023</h4>
      <div className="Card-Entry--headandFavorite">
        <h3>"That#s life in the City"</h3>
        <button type="button" className="Card-EntryList--FavButton">
          <FavLogo />
        </button>
      </div>
      <p className="Card-EntryList-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </p>
    </article>
  );
}
