import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import {SiReact} from 'react-icons/si';
import {Loader} from "components/Loader";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="react-icon">
            <SiReact style={{color: "rgb(0, 0, 255)", size: 30 }}/>
          </span>{" "}
          React App
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/recipes">Recipes</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};