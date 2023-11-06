import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FirstPage from "./pages/FirstPage";
import MyList from './pages/MyList';
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/first' element={<FirstPage />}/>
      <Route path='/mylist' element={<MyList/>}/>
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