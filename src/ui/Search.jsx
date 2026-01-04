import Input from "./Input";
import { useSearchParams } from "react-router-dom";

function Search({ searchField, placholder }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(e) {
    e.preventDefault();
    const value = e.target.value.toLowerCase();

    if (!value) searchParams.delete(searchField);
    else searchParams.set(searchField, value);

    setSearchParams(searchParams);
  }

  return (
    <Input
      onChange={handleSearch}
      placeholder={placholder}
      value={searchParams.get("search") || ""}
    />
  );
}

export default Search;
