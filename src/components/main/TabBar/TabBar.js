// import "./Main.css";
import "./TabBar.css";

export default function TabBar() {
  return (
    <section className="MainForm--TabBar">
      <button className="MainForm--TabBar-allEntries">All Entries</button>
      <span
        className="MainForm--TabBar-allEntries-number {
"
      >
        3
      </span>
      <button className="MainForm--TabBar-favorites">Favorites</button>
      <span
        className="MainForm--TabBar-favorites-number
"
      >
        1
      </span>
    </section>
  );
}
