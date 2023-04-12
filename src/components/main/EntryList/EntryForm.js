import "../Main.js";

export default function EntryForm() {
  return (
    <form className="Main-Form">
      New Entry
      <label htmlFor="new-motto" className="Main-Form--label">
        Motto
      </label>
      <input
        type="text"
        name="new-motto"
        id="new-motto"
        className="Main-Form--input"
      ></input>
      <label htmlFor="new-notes" className="Main-Form--label">
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
