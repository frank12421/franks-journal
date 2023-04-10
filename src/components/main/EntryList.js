import "./EntryList.css";
import CardEntryList from "./CardEntryList.js";

export default function EntryList() {
  return (
    <section className="EntryList">
      <CardEntryList />
      <CardEntryList />
      <CardEntryList />
    </section>
  );
}
