import "./TabBar.css";

export default function TabBar() {
  return (
    <section className="TabBar-Section">
      <button className="TabBar-Button-AllEntries">All Entries</button>
      <span className="TabBar-Button-AllEntries-Number">3</span>
      <button className="TabBar-Button-Favorites">Favorites</button>
      <span className="TabBar-Button-Favorites-Number">1</span>
    </section>
  );
}
