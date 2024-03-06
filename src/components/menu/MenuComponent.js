import './MenuComponent.css'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Start from '../start/Start';

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
                            to="/"
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
                            to="/demo"
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
                            to="/demo"
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
                        path="/"
                        element={<Start />}
                    />
                    <Route
                        exact
                        path="/demo"
                        element={<Start />}
                    />
                    <Route
                        exact
                        path="/demo"
                        element={<Start />}
                    />
                </Routes>
            </BrowserRouter>
        </>
      </div>
  );
}

export default MenuComponent;
