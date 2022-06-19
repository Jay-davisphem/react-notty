import Note from "./Note";
import AddNote from "./AddNote";
function NotesList({ notes, handleAddNote, handleDeleteNote }){
  return (
    <section className="notes_list">
      {notes.map(({ id, text, date }) => (
        <Note
          key={id}
          id={id}
          text={text}
          date={date}
          handleDeleteNote={() => handleDeleteNote(id)}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </section>
  );
};

export default NotesList;
