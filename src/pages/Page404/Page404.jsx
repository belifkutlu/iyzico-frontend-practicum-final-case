import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Img404 from "../../assests/images/404.png";

import { Wrapper, Image404, HomeButton, NotAvailable } from "./Page404.styled";

function Page404() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Image404 src={Img404} />
      <HomeButton onClick={() => navigate("/")}>RETURN TO BASE</HomeButton>
      <NotAvailable>The page you were looking does not exist</NotAvailable>
    </Wrapper>
  );
}

export default Page404;
