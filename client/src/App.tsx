
// GlobalStyle
import { Global } from "./styles/global";

// Components
import { DownBar } from "./components/player";
import { Aside } from "./components/aside";

function App() {
  return (
    <>
      <Aside />
      <DownBar name="Seu Gosto" image="http://1.bp.blogspot.com/-cae5mWLe4Jg/VazohfjE8BI/AAAAAAAA21o/3c6VBxw07B8/s1600/daniblackdiluviocapa.png" author="Dani Black"/>
      <Global />
    </>
  );
}

export default App;
