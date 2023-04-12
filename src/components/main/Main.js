import "./Main.css";

import EntryForm from "./EntryList/EntryForm.js";
import TabBar from "./TabBar/TabBar.js";
import EntryList from "./EntryList/EntryList.js";

export default function Main() {
  return (
    <section className="App-Main">
      {/* <h2 className="Main-Titel">New Entry</h2> */}
      <EntryForm />
      <TabBar />
      <EntryList />
    </section>
  );
}
