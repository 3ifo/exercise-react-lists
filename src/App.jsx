import "./App.css";
import "./components/Navbar.css";
import Navbar from "./components/Navbar";

const miaLista = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About",
    url: "/about",
  },
];

function App() {
  return (
    <>
      <Navbar websiteName="Stories" ulList={miaLista} />
    </>
  );
}

export default App;
