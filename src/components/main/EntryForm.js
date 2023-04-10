import "./Main.css";

export default function EntryForm() {
  return (
    <form className="Main-Form">
      New Entry
      <label for="new-motto" className="Main-Form--label">
        Motto
      </label>
      <input
        type="text"
        name="new-motto"
        id="new-motto"
        className="Main-Form--input"
      ></input>
      <label for="new-notes" className="Main-Form--label">
        Notes
      </label>
      <textarea
        name="new-notes"
        id="new-notes"
        className="Main-Form--textarea"
      ></textarea>
      <button type="submit" className="Main-Form--button">
        Create
      </button>
    </form>
  );
}
