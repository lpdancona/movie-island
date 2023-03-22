import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/videoWatch/VideoWatch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewMovie from "./components/create-movie/NewMovie";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Navigate to="/Register"/>}/>
      <Route path="/register"  element={!user ? <Register/> : <Navigate to="/"/>}/>
      <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
      
        <Route path="/movie" element={user ? <Home type="movie"/> : <Navigate to="/Register"/>} />
        <Route path="/series" element={user ? <Home type="series"/> : <Navigate to="/Register"/>} />
        <Route path="/watch" element={user ? <Watch/> : <Navigate to="/Register"/>}/>
        <Route path="/movies" element={user ? <NewMovie/> : <Navigate to="/Register"/>} />
        
      </Routes>
    </Router>
  );
};

export default App;