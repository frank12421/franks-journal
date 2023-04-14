import "./EntriesSection.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function EntryList({ entries }) {
  return (
    <section className="EntryList">
      {entries.map((entrie) => (
        <article key={entrie.id} className="Article-EntryList">
          <h4 className="Date-Article-EntryList">{entrie.date}</h4>
          <div className="TabBar-Articel-EntryList">
            <h3>{entrie.motto}</h3>
            <FavoriteButton />
          </div>
          <p className="Notes-Articel-EntryList">{entrie.notes}</p>
        </article>
      ))}
    </section>
  );
}
