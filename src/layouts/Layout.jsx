import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/Header/Header.component";
import { FooterComponent } from "../components/Footer/Footer.component";
import * as Styled from "./Layout.styles";

export const Layout = () => {
  return (
    <Styled.App>
      <Styled.Main>
        <HeaderComponent />
        <Styled.Content>
          <Outlet />
        </Styled.Content>
        <FooterComponent />
      </Styled.Main>
    </Styled.App>
  );
};
