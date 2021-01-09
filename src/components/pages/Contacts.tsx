import {
  faDiscord,
  faFacebook,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Menu from "../Styled/Menu";
import MenuItem from "../Styled/MenuItem";
import StyledPage from "../Styled/StyledPage";

const Home = <FontAwesomeIcon icon={faHome} />;
const Facebook = <FontAwesomeIcon icon={faFacebook} />;
const Discord = <FontAwesomeIcon icon={faDiscord} />;
const Vkontakte = <FontAwesomeIcon icon={faVk} />;
const Telegram = <FontAwesomeIcon icon={faTelegram} />;
const Contacts = () => {
  return (
    <StyledPage>
      <h1>Kontakty soobschjestv mjezhslavjanskogo jazyka.</h1>
      <Menu>
        <MenuItem>
          <a href="/">{Home}</a>
        </MenuItem>
        <MenuItem>
          <a href="https://www.facebook.com/groups/interslavic/">{Facebook}</a>
        </MenuItem>
        <MenuItem>
          <a href="https://discord.com/invite/gNneu2U">{Discord}</a>
        </MenuItem>
        <MenuItem>
          <a href="https://vk.com/club114071440">{Vkontakte}</a>
        </MenuItem>
        <MenuItem>
          <a href="/">{Telegram}</a>
        </MenuItem>
      </Menu>
    </StyledPage>
  );
};

export default Contacts;
