import EntryForm from "./EntryForm.js";
import TabBar from "./TabBar.js";
import EntryList from "./EntryList.js";

export default function Main() {
  return (
    <section>
      <h2>Main</h2>
      <EntryForm />
      <TabBar />
      <EntryList />
    </section>
  );
}
