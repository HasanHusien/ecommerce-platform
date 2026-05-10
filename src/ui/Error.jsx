import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="m-auto w-1/2 bg-red-300 text-center">
      <h1>Something went wrong 😢</h1>
      <p>
        {error.data || error.message}
      </p>
      <LinkButton>
        &larr; Go back
      </LinkButton>
    </div>
  );
}

export default NotFound;
