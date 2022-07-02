import React from "react";

// Styled Components
import {
  Container,
  Wrap,
  Item,
  List,
  Link,
  Navigation,
  Logo,
  Frontline,
  Backline,
} from "./styles";

// Icons
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineHeart,
  AiOutlineFolder
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { RiInstallLine } from "react-icons/ri";

// Logo
import PNG from "../../assets/Spotify_Logo_Desk.png";

export const Aside: React.FC = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Frontline>
            <Logo src={PNG} />
          </Frontline>

          <Navigation>
            <List>
              <Item>
                <Link href="/">
                  <AiOutlineHome size="1.6em" />
                  Home
                </Link>
              </Item>
              <Item>
                <Link href="/search">
                  <AiOutlineSearch size="1.6em" />
                  Search
                </Link>
              </Item>
              <Item>
                <Link href="/library">
                  <BiLibrary size="1.6em" />
                  Your Library
                </Link>
              </Item>
            </List>

            <List>
              <Item>
                <Link href="/playlist">
                  <AiOutlinePlus size="1.6em" />
                  Create Playlist
                </Link>
              </Item>
              <Item>
                <Link href="/liked">
                  <AiOutlineHeart size="1.6em" />
                  Liked Songs
                </Link>
              </Item>
              <Item>
                <Link href="/downloads">
                  <AiOutlineFolder size="1.6em" />
                  Your Episodes
                </Link>
              </Item>
            </List>
            <List>
              <Item>
                <Link href="#">Fav</Link>
              </Item>
              <Item>
                <Link href="#">Daily Mix 1</Link>
              </Item>
              <Item>
                <Link href="#">Discover Weekly</Link>
              </Item>
              <Item>
                <Link href="#">Top Global</Link>
              </Item>
              <Item>
                <Link href="#">Dance/EletronixMix</Link>
              </Item>
              <Item>
                <Link href="#">EDM/Popular</Link>
              </Item>
            </List>
          </Navigation>
        </Wrap>
      </Container>
    </>
  );
};
