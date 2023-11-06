import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;;
  }
`;