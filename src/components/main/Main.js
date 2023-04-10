import "./Main.css";

import EntryForm from "./EntryForm.js";
import TabBar from "./TabBar.js";
import EntryList from "./EntryList.js";

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
