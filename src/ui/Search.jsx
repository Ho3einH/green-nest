import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../features/bookings/useDebounce";
import Input from "./Input";
import { useEffect, useState } from "react";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [inputValue, setInputValue] = useState(search);

  const debouncedSearch = useDebounce(inputValue.toLowerCase(), 500);

  useEffect(() => {
    if (!debouncedSearch) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.delete("search");
        return params;
      });

      return;
    }

    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);
        params.set("search", debouncedSearch);
        return params;
      },
      { replace: true },
    );

    console.log("Request sent for :", debouncedSearch);
  }, [debouncedSearch, setSearchParams]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Input
      type="text"
      placeholder="جستجوی نام مهمان..."
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default Search;
