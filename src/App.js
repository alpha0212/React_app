import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path={"/"} element={<DayList />} />
          <Route path={"/day/:day"} element={<Day />} />
          <Route path={"*"} element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
