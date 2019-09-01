import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

class NavbarLink extends React.Component {
    render() {
        const style = {
            link: {
                color: 'white'
            }
        };
        return (
            <Nav.Item>
                <LinkContainer to={this.props.link}>
                    <Nav.Link style={style}>{this.props.text}</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        )
    }
}

class MyNavbar extends React.Component {
    render() {
        const style = {
            navbar: {
                backgroundColor: 'darkred'
            },
        };

        return (
            /*<Navbar style={style.navbar}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Jonathan Hertz</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <NavbarLink link="/" text="Home"/>
                            <NavbarLink link="/about/" text="About"/>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>*/
            <nav className="navbar">
                <div className="left">
                </div>
                <div className="right">
                </div>
            </nav>
        );
    }
}

class Frontpage extends React.Component {
  render() {
    return (
        <Content>
            <h1>Frontpage</h1>
            <Project/>
        </Content>
    );
  }
}

class Content extends React.Component {
    render() {
        return (
            <Container className="content">
                {this.props.children}
            </Container>
        )
    }
}

class About extends React.Component {
  render() {
    return (
        <Content>
            <h1>About</h1>
        </Content>
    );
  }
}

class Project extends React.Component {
  render() {
    return (
        <h1>Test</h1>
    );
  }
}

function App() {
  return (
      <Router>
        <MyNavbar/>
        {/*<div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

        </div>*/}
        <Route path="/" exact component={Frontpage} />
        <Route path="/about/" component={About} />
      </Router>
  );
}

export default App;
