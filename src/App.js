import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FirstPage from "./pages/FirstPage";
import MyListPage from './pages/MyListPage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { createGlobalStyle } from "styled-components";
import MyWritePage from './pages/MyWritePage';
import MyViewPage from "./pages/MyViewPage";
import EndingOpenPage from "./pages/Ending/EndingOpenPage";
import AnswerRatePage from "./pages/Ending/AnswerRatePage";
import MyEndingPage from "./pages/Ending/MyEndingPage";

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/first' element={<FirstPage />}/>
      <Route path='/mylist' element={<MyListPage/>}/>
      <Route path='/mywrite/:id' element={<MyWritePage/>}/>
      <Route path='/myview/:id' element={<MyViewPage/>}/>
      <Route path="/accounts/register" element={<RegisterPage />} />
      <Route path="/accounts/auth" element={<LoginPage />} />
      <Route path="/endingopen" element={<EndingOpenPage/>} />
      <Route path="/endingrate" element={<AnswerRatePage/>}/>
      <Route path="/myending" element={<MyEndingPage/>}/>
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
