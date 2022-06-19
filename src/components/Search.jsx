import { MdSearch } from "react-icons/md";

function Search({ setSearchText }){
  return (
    <section className="search">
      <MdSearch className="search_icon" size="2.5em" />
      <input
        type="search"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="type to search..."
      />
    </section>
  );
};

export default Search;
