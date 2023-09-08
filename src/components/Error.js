import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <>
      <div>Opps!! something went wrong</div>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </>
  );
};

export default Error;
