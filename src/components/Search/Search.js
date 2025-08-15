import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi"; // Feather Icons
import './search.css'
export default function Search({
  placeholder = "Search...",
  onSearch,
  delay = 300,
  defaultValue = "",
}) {
  const [value, setValue] = useState(defaultValue);
  const [debouncedValue, setDebouncedValue] = useState(defaultValue);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  // Trigger search after debounce
  useEffect(() => {
    onSearch(debouncedValue.trim());
  }, [debouncedValue, onSearch]);

  return (
    <div className="search-container">
      <FiSearch className="search-icon" />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
      />
      {value && (
        <button className="clear-btn" onClick={() => setValue("")}>
          <FiX />
        </button>
      )}
    </div>
  );
}
