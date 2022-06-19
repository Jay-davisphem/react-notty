import { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
console.log(nanoid());
function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("correct-user-notes"))
  );
  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('user-mode')) || false);

  useEffect(() => {
    const userNotes = JSON.parse(localStorage.getItem("correct-user-notes"));
    try{
    if (userNotes) setNotes(userNotes);
    }catch(e){
      console.error(e)
    }
  }, []);
  useEffect(() => {
    try{
    localStorage.setItem("correct-user-notes", JSON.stringify(notes));
  }catch(e){console.error(e)
  }}, [notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (ID) => {
    const newNotes = notes.filter(({ id }) => id !== ID);
    setNotes(newNotes);
  };
  return (
    <>
      <main className={`${isDarkMode ? "dark_mode" : "light_mode"} container`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Search setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
