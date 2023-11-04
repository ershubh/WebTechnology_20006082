import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { EditProfile } from "./screens/EditProfile";
import { Apply } from "./screens/Apply";


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/editprofile" element={<EditProfile/>}/>
            <Route exact path="/apply" element={<Apply/>}/>
        </Routes>    
    </Router>
  );
}

export default App;
