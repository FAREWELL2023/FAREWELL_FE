import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FirstPage from "./pages/FirstPage";
import MyListPage from "./pages/Warm/MyListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { createGlobalStyle } from "styled-components";
import MyWritePage from "./pages/Warm/MyWritePage";
import MyViewPage from "./pages/Warm/MyViewPage";
import EndingOpenPage from "./pages/Ending/EndingOpenPage";
import AnswerRatePage from "./pages/Ending/AnswerRatePage";
import MyEndingPage from "./pages/Ending/MyEndingPage";
import CompleteQPage from "./pages/CompleteQPage";
import ThemePage from "./pages/ThemePage";
import ThxPage from "./pages/Ending/ThxPage";
import OthersQuestionPage from "./pages/OthersQuestionPage";
import OthersWritePage from "./pages/OthersWritePage";
import FeedPage from "./pages/FeedPage";
import HotList from "./pages/Hot/HotList";
import HotView from "./pages/Hot/HotView";
import HotWrite from "./pages/Hot/HotWrite";
import ColdList from "./pages/Cold/ColdList";
import ColdView from "./pages/Cold/ColdView";
import ColdWrite from "./pages/Cold/ColdWrite";
import RoList from "./pages/Romance/RoList";
import RoView from "./pages/Romance/RoView";
import RoWrite from "./pages/Romance/RoWrite";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/first" element={<FirstPage />} />

        <Route path="/mylist" element={<MyListPage />} />
        <Route path="/mywrite/:id" element={<MyWritePage />} />
        <Route path="/myview/:id" element={<MyViewPage />} />

        <Route path="/hotlist" element={<HotList />} />
        <Route path="/hoview/:id" element={<HotView />} />
        <Route path="/hotwrite/:id" element={<HotWrite />} />

        <Route path="/coldlist" element={<ColdList />} />
        <Route path="/coldview/:id" element={<ColdView />} />
        <Route path="/coldwrite/:id" element={<ColdWrite />} />

        <Route path="/rolist" element={<RoList />} />
        <Route path="/roview/:id" element={<RoView />} />
        <Route path="/rowrite/:id" element={<RoWrite />} />

        <Route path="/accounts/signup" element={<RegisterPage />} />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="/endingopen" element={<EndingOpenPage />} />
        <Route path="/endingrate" element={<AnswerRatePage />} />
        <Route path="/myending" element={<MyEndingPage />} />
        <Route path="/thanku" element={<ThxPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/complete" element={<CompleteQPage />} />
        <Route path="/list" element={<ThemePage />} />
        <Route path="/user/:username" element={<FeedPage />} />
        <Route path="/user/:username/edit" element={<FeedPage />} />
        <Route
          path="/publicfarewell/questions"
          element={<OthersQuestionPage />}
        />
        <Route path="/publicfarewell/write/:id" element={<OthersWritePage />} />
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
