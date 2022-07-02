import styled from "styled-components";

// Gerals
export const Container = styled.main`
  display: flex;
  position: absolute;
  top: 0;
  left: 18%;

  width: 82%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #222222 100%,
    #1f1f1f,
    #171717,
    #151515,
    #121212 100%
  );
  background-size: 100%;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Top Bar
export const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em;
`;
export const Navigation = styled.div`
  display: flex;
  padding: 0.2em;
  gap: 0.7em;
  margin-left: 1em;
`;
export const Profile = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1em;
  width: 8em;
  height: 2.6em;
  border-radius: 1em;
`;
export const Avatar = styled.div`
  width: 2.2em;
  height: 2.2em;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Name = styled.div``;
export const UserName = styled.h3`
  color: white;
  font-weight: 420;
  font-size: 1.1em;
`;
export const Button = styled.button<{ bg: string; wid: string; hei: string }>`
  background: ${(props) => props.bg};
  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.wid};
  height: ${(props) => props.hei};

  color: white;
  padding: 0.25em;
  margin-right: 0.2em;
`;
export const Icons = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
`;

// Profile Settings
export const Settings = styled.div<{ active: boolean }>`
  position: absolute;
  top: 3.5em;
  right: 0.5em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.4em;
  width: 10em;
  height: 7.5em;

  display: ${(props) => (props.active ? "flex" : "none")};
  background-color: #282828;
`;
export const List = styled.ul`
  padding: 0.2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
export const Item = styled.li`
  padding: 0.5em;
  font-size: 1em;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: ease 0.25s;

  &:hover {
    background-color: #242424;
  }
`;

// Playlist
export const Status = styled.div`
  padding: 1em;
  height: 65%;
`;
export const Title = styled.div`
  font-size: 1.6em;
  font-weight: bold;
  color: white;
  padding: 0.2em;
`;
export const Playlist = styled.div`
  padding: 0.5em;
  margin-top: 0.2em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1em;
`;
export const Album = styled.div`
  display: flex;
  align-items: center;
  width: 18em;
  background-color: #303030;
`;
export const Text = styled.p`
  padding: 0.5em;
  font-size: 1em;
  color: white;
  font-weight: 420;
`;
export const Wrapper = styled.div`
  display: inline-block;
  width: 6em;
  height: 6em;
`;
export const Artist = styled.div`
  width: 100%;
  height: 100%;
  padding :0.4em;
`;
export const Apresentation =styled.div`
  padding: 0.2em;
  display :flex;
  justify-content: space-around;
`;
export const Cards = styled.div`
  width:fit-content;
  height:fit-content;
  padding: 0.7em;

  display :flex;
  flex-direction: column;
  background-color: #181818;
  border-radius: 0.2em;
`;
export const Photo = styled.img`
  width: 8.8em;
  height: 8.4em;

  border-radius: 0.3em;
  margin-bottom: 0.1em;
`;
export const Span = styled.span`
  font-size: 0.7em;
  color: #b3b3b3;
  font-weight: 320;
`;
export const TextSec = styled(Text)`
padding: 0;
font-weight: 430;
`;