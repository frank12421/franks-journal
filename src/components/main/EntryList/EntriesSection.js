import "./EntriesSection.css";
import "./CardEntryList.css";
import "../FavoriteButton/FavoriteButton.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function EntryList({ entries }) {
  // console.log("Entries: ", entries);
  return (
    <section className="EntryList">
      {entries.map((entrie) => (
        // console.log(entrie),
        <article key={entrie.id} className="Card-EntryList">
          <h4 className="Card-EntryList--Date">{entrie.date}</h4>
          <div className="Card-Entry--headandFavorite">
            <h3>{entrie.motto}</h3>
            <FavoriteButton />
          </div>
          <p className="Card-EntryList-text">{entrie.notes}</p>
        </article>
      ))}
    </section>
  );
}
