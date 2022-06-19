import { useState } from "react";
import { BiSave } from "react-icons/bi";
function AddNote({ handleAddNote }){
  const [noteText, setNoteText] = useState("");
  const chrLimit = 200;
  const handleChange = (e) => {
    if (e.target.value.length <= chrLimit) setNoteText(e.target.value);
  };
  const handleSaveClick = (e) => {
    if (noteText.trim()) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      // handle error pop up message, use Modal
      alert("Note can't be empty");
    }
  };
  return (
    <article className="note new">
      <textarea
        rows="8"
        cols="10"
        onChange={handleChange}
        value={noteText}
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note_down">
        <small>{chrLimit - noteText.length} Remaining</small>
        <BiSave className="save" size="1.5em" onClick={handleSaveClick} />
      </div>
    </article>
  );
};

export default AddNote;
