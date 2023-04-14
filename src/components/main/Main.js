import "./Main.css";
import { initialEntries } from "./EntryList/InitalEntrys.js";
import EntryForm from "./EntryForm/EntryForm.js";
import TabBar from "./TabBar/TabBar.js";
import EntryList from "./EntryList/EntriesSection.js";
import { useState } from "react";

export default function Main() {
  const [entries, setEntries] = useState(initialEntries);

  function handelAddEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  return (
    <section className="App-Main">
      <EntryForm onAddEntry={handelAddEntry} />
      <TabBar />
      <EntryList entries={entries} />
    </section>
  );
}
