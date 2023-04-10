export default function EntryForm() {
  return (
    <form>
      Form
      <label for="new-motto">Motto</label>
      <input type="text" name="new-motto" id="new-motto"></input>
      <label for="new-notes">Notes</label>
      <textarea name="new-notes" id="new-notes"></textarea>
      <button type="submit">Create</button>
    </form>
  );
}
