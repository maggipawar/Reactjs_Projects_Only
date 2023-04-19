// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/" className="link_style">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create" className="link_style">
                  Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/update" className="link_style">
                  Update
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search" className="link_style">
                  Search
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/list" className="link_style">
                  List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/details" className="link_style">
                  Details
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/create" element={<RestaurantCreate />} />

          <Route path="/update" element={<RestaurantUpdate />} />

          <Route path="/search" element={<RestaurantSearch />} />

          <Route path="/list" element={<RestaurantList />} />

          <Route path="/details" element={<RestaurantDetails />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
