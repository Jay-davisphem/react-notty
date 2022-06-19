import { MdDeleteForever } from "react-icons/md";
function Note({ id, text, date, handleDeleteNote }){
  return (
    <article className="note">
      <span>{text}</span>
      <div className="note_down">
        <small>{date}</small>
        <MdDeleteForever
          className="delete"
          size="1.5em"
          onClick={handleDeleteNote}
        />
      </div>
    </article>
  );
};

export default Note;
