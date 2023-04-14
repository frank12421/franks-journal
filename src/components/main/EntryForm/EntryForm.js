import "../Main.js";
import "./EntryForm.css";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
    event.target.elements.tag.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="Entry-Form">
      New Entry
      <label htmlFor="new-motto" className="Entry-Form--label">
        Motto
      </label>
      <input
        type="text"
        name="new-motto"
        id="new-motto"
        className="Entry-Form--input"
      ></input>
      <label htmlFor="new-notes" className="Entry-Form--label">
        Notes
      </label>
      <textarea
        name="new-notes"
        id="new-notes"
        className="Entry-Form--textarea"
      ></textarea>
      <button type="submit" className="Entry-Form--button">
        Create
      </button>
    </form>
  );
}
