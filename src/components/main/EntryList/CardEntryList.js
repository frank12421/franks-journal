import "./CardEntryList.css";

export default function CardEntryList({ date, motto, notes }) {
  return (
    <article className="Card-EntryList">
      <h4 className="Card-EntryList--Date">{date}</h4>
      <div className="Card-Entry--headandFavorite">
        <h3>{motto}</h3>
        <button type="button" className="Card-EntryList--FavButton">
          <FavLogo />
        </button>
      </div>
      <p className="Card-EntryList-text">{notes}</p>
    </article>
  );
}
