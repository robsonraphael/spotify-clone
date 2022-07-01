import styled from "styled-components";
import { motion } from "framer-motion";

// Icon Types
interface TypesIcon {
  active: boolean;
  color: string;
  hover: boolean;
}

// Gerals
export const Container = styled.footer<{ active: boolean }>`
  opacity: ${(props) => (props.active ? "0" : "1")};
  z-index: ${(props) => (props.active ? "-99" : "1")};
  background-color: #181818;

  width: 100%;
  height: 5.6em;

  position: absolute;
  bottom: 0;
  padding: 0.5em;
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Music Info
export const Music = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  padding: 0.5em;
  width: fit-content;
  height: 5rem;
`;

// Music Image
export const Album = styled.div`
  padding: 0.2em;
  width: 4.1em;
  height: 4em;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

// Music Author
export const Singer = styled.div`
  padding: 0.5em;
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
`;
export const Name = styled.a`
  font-size: 0.8em;
  font-weight: 410;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;
export const Author = styled.a`
  font-size: 0.7em;
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    text-decoration: underline;
  }
`;

// Like Button
export const Like = styled.button`
  border: none;
  background: none;
  padding: 0.2em;
  margin-left: 0.5em;
  display: flex;
  align-items: center;
`;
export const Icon = styled.div<TypesIcon>`
  display: ${(props) => (props.active ? "flex" : "none")};
  color: ${(props) => props.color || "white" || "rgba(255, 255, 255, 0.5)"};

  &:hover {
    color: ${(props) => (props.hover ? "white" : "none")};
  }
`;

//  Player
export const Player = styled.div`
  padding: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin-left: 1.2em;
`;

// Controls
export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 35%;
`;
export const Button = styled.button`
  border: none;
  background: none;
  padding: 2px;
  color: white;
`;

// Time Bar
export const Timer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0.2em;
`;
export const Actualy = styled.span`
  font-size: 0.75em;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0.4em;
  margin-bottom: 0.1em;
`;
export const Total = styled(Actualy)``;
export const Bar = styled.input.attrs({
  type: "range",
  min: "0",
  max: "100",
})`
  -webkit-appearance: none;
  width: 100%;
  height: 0.3rem;
  border-radius: 0.2rem;
  background-color: rgba(255, 255, 255, 0.2);

  // Ball range
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0.9em;
    width: 0.9em;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
  }

  &:hover {
    &::-webkit-slider-thumb {
      opacity: 1;
    }
  }
`;

// Settings
export const Settings = styled.div`
  display: flex;
  align-items: center;

  gap: 0.4em;
  padding: 0.5em;

  width: 14rem;
  margin-right: 0.5em;
`;
export const Mixer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1em;
  padding: 0.2em;
  width: 70%;
`;
export const Mix = styled(Bar)`
  &::-webkit-slider-thumb {
    height: 0.7em;
    width: 0.7em;
  }
`;
export const Mute = styled(Button)``;
