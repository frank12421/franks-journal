import "./EntriesSection.css";
import "./CardEntryList.css";

import { ReactComponent as FavLogo } from "../../../resources/star.svg";

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
            <button type="button" className="Card-EntryList--FavButton">
              <FavLogo />
            </button>
          </div>
          <p className="Card-EntryList-text">{entrie.notes}</p>
        </article>
      ))}
    </section>
  );
}
