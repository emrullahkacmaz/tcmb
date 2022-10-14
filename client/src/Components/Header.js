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
    <Navbar style={{backgroundColor:'rgba(109,115,115)'}}>
      <Container>
    
        
        {user ? (
          <div style={{flexDirection:'row'}}>
            <div>   hoşgeldiniz {user?.fullname}  </div>
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
          
          </div>
          
        
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
