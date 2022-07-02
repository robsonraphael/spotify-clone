import styled from "styled-components";

// Gerals
export const Container = styled.aside`
  min-width: 15rem;
  width: 18%;
  height: 100vh;
  background-color: black;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

// Logo
export const Frontline = styled.div`
  padding: 0.2rem;
  margin-bottom: 1rem;
`;
export const Logo = styled.img`
  width: 8.5rem;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5em;

  font-size: 0.9em;
  font-weight: bold;
  color: white;
`;

// Navigation
export const Navigation = styled.nav`
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  padding: 0.5em;
  border-radius: 2px;

  &:hover {
    transition: ease 0.25s;
    background-color: #282828;
  }
`;
