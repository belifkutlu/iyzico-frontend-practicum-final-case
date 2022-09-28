import React from "react";
import { Link } from "react-router-dom";

import { HomeButton } from "./Page404.styled";

function Page404() {
  return (
    <div>
      <h1>404Page</h1>
      <Link to="/">
        {" "}
        <HomeButton> Return to Base</HomeButton>
      </Link>
    </div>
  );
}

export default Page404;
