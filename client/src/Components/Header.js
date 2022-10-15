import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = ({ user, setUser }) => {
  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);
  return (
    <Navbar className="py-4 "  style={{backgroundColor:'#3d3d3d'}}>
      <Container>
        <Navbar.Brand className="text-white">{user? user.fullname : ''} Hoşgeldiniz</Navbar.Brand>
        
       
        {user ? (
          <Button
            variant="outline-light"
            onClick={(e) => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            {" "}
            Çıkış yap{" "}
          </Button>
        ) : (
          <Button variant="outline-light">
            <Link className="text-white text-decoration-none" to="/signin">
              Giriş yap
            </Link>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;