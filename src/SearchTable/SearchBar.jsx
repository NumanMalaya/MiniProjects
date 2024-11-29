export default function SearchBar({
  handleCheckClick,
  handleInputChange,
  inputValue,
}) {
  return (
    <form>
      <input
        type="text"
        className="searchBar"
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Search . . ."
        value={inputValue}
      />
      <div className="checkbox">
        <input type="checkbox" onClick={handleCheckClick} />
        <label htmlFor="">Only show products in stock</label>
      </div>
    </form>
  );
}
