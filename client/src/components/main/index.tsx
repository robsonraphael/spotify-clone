import React, { useState } from "react";

// Styled Components
import {
  Container,
  Wrap,
  TopBar,
  Navigation,
  Profile,
  Status,
  Artist,
  Title,
  Playlist,
  Album,
  Image,
  Text,
  UserName,
  Icons,
  Avatar,
  Name,
  Button,
  Settings,
  List,
  Item,
  Wrapper,
  Apresentation,
  Span,
  Cards,
  Photo,
  TextSec
} from "./styles";

// Icons
import {
  AiOutlineCaretDown,
  AiFillCaretUp,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

export const Main: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Wrap>
          <TopBar>
            <Navigation>
              <Button bg="#131313" wid="2.6em" hei="2.5em">
                <AiOutlineLeft size="1.1em" />
              </Button>
              <Button bg="#131313" wid="2.6em" hei="2.5em">
                <AiOutlineRight size="1.1em" />
              </Button>
            </Navigation>
            <Profile onClick={() => setIsOpen(!isOpen)}>
              <Avatar>
                <Image src="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png" />
              </Avatar>
              <Name>
                <UserName>Angel</UserName>
              </Name>
              <Button bg="none" wid="fit-content" hei="fit-content">
                <Icons active={!isOpen}>
                  <AiOutlineCaretDown size="1em" />
                </Icons>
                <Icons active={isOpen}>
                  <AiFillCaretUp size="1em" />
                </Icons>
              </Button>
            </Profile>
            <Settings active={isOpen}>
              <List>
                <Item>Account</Item>
                <Item>Profile</Item>
                <Item>Log out</Item>
              </List>
            </Settings>
          </TopBar>
          <Status>
            <Title>Good morning</Title>
            <Playlist>
              <Album>
                <Wrapper>
                  <Wrapper>
                    <Image src="https://images.samsung.com/is/image/samsung/assets/br/explore/entertainment/popular-spotify-playlists-for-home-activities/vd0030_explore_popular-spotify-playlists11_article-card-slide_mo_556x556.jpg?$556_556_PNG$" />
                  </Wrapper>
                </Wrapper>
                <Text>Brain Food</Text>
              </Album>
              <Album>
                <Wrapper>
                  <Image src="https://images.samsung.com/is/image/samsung/assets/br/explore/entertainment/popular-spotify-playlists-for-home-activities/vd0030_explore_popular-spotify-playlists09_article-card-slide_mo_556x556.jpg?$556_556_PNG$" />
                </Wrapper>
                <Text>Focus Songs</Text>
              </Album>
              <Album>
                <Wrapper>
                  <Image src="https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0" />
                </Wrapper>
                <Text>Sleep</Text>
              </Album>
              <Album>
                <Wrapper>
                  <Image src="https://external-preview.redd.it/hT34tmd-TVSfyZdgNC5d7wutN5wkK8sttq0NhBclPmo.jpg?auto=webp&s=923e391590ddf59118c11e63031a88049a7e6b69" />
                </Wrapper>
                <Text>Liked Songs</Text>
              </Album>
              <Album>
                <Wrapper>
                  <Image src="https://i.scdn.co/image/ab67616d0000b273f61215d6a34d4a5794db8bcf" />
                </Wrapper>
                <Text>Lo-fi Beats</Text>
              </Album>
            </Playlist>
          </Status>
          <Artist>
            <Title>Shows you might like</Title>
            <Apresentation>
              <Cards>
                <Photo src="https://i.scdn.co/image/ab6761610000e5ebbd5d3e1b363c3e26710661c3"/>
                <TextSec>Tory Lanez</TextSec>
                <Span>Love Me Now</Span>
              </Cards>
              <Cards>
                <Photo src="https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"/>
                <TextSec>Drake</TextSec>
                <Span>More Life</Span>
              </Cards>
              <Cards>
                <Photo src="https://i.scdn.co/image/ab6761610000e5eb519065f878e37f78e069c8ad"/>
                <TextSec>NLE Choppa</TextSec>
                <Span>Top Shotta</Span>
              </Cards>
              <Cards>
                <Photo src="https://i.scdn.co/image/ab67616d0000b2738bd6e34012a7ab6311050d0c"/>
                <TextSec>NBA YoungBoy</TextSec>
                <Span>YoungBoy Never Broke Ag..</Span>
              </Cards>
              <Cards>
                <Photo src="https://i.scdn.co/image/ab67616d0000b273b56e0c58820752dba67dc1fd"/>
                <TextSec>Lil Durk</TextSec>
                <Span>AHHH HA</Span>
              </Cards>
            </Apresentation>
          </Artist>
        </Wrap>
      </Container>
    </>
  );
};
