import { useState } from "react";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();

    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={clsx(
          "w-28 rounded-full px-3 py-1.5 sm:w-60 sm:focus:w-72",
          "focus:outline-none focus:ring focus:ring-yellow-500",
          "text-sm transition-all duration-200 placeholder:text-stone-400",
        )}
      />
    </form>
  );
}

export default SearchOrder;
