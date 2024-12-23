import { useEffect, useState } from "react";
import { useBearStore } from "../storage/appStorage";

export function useSearcher(props) {
  const [value, setValue] = useState("");
  const setSearcherText = useBearStore(
    ({ setSearcherText }) => setSearcherText
  );
  
  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    setSearcherText(value);
  }
  return { handleOnChange, handleOnSubmit, value };
}
