import './MenuComponent.css'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Start from '../start/Start';
import Home from '../home/Home';
import Login from "../login/Login"
import Regi from "../regi/Regi";
import AddCandidate from "../addCandidate/AddCandidate"
function MenuComponent() {
  return (
    <div className='navbar-nav-div'>
       <>
            <BrowserRouter>
                <div
                    style={{
                        display: "flex",
                        background: "black",
                        padding: "5px 0 5px 5px",
                        fontSize: "16px",
                    }}
                >
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/home"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                                textDecoration: "none",
                                fontWeight: isActive ? "bold" : "",
                            })}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/registration"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                                textDecoration: "none",
                                fontWeight: isActive ? "bold" : "",
                            })}
                        >
                            Registration
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/login"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                                textDecoration: "none",
                                fontWeight: isActive ? "bold" : "",
                            })}
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route
                        exact
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/registration"
                        element={< Regi/>}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/addCandidate"
                        element={<AddCandidate />}
                    />
                </Routes>
            </BrowserRouter>
        </>
      </div>
  );
}

export default MenuComponent;
