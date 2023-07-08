import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // TODO: type error properly
  const error: any = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
