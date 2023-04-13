import "./FavoriteButton.css";
import { useState } from "react";

import { ReactComponent as FavLogo } from "./star.svg";
import { ReactComponent as FavLogoFilled } from "./star-filled.svg";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handelFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="FavButton"
      onClick={() => {
        handelFavorite();
      }}
      aria-label="favorite"
    >
      {isFavorite ? <FavLogoFilled /> : <FavLogo />}
    </button>
  );
}
