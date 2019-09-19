import { Content, Container } from './Components'
import About from './about/About';
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProjectOnePiece, ProjectTwoPiece, ProjectGame } from './projects/Project';
import Projects from './projects'
import Footer from './footer/footer'

class MyNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Container>
                    <Link to="/" className="brand">
                        Jonathan Hertz
                    </Link>
                    <div>
                        <Link to="/">
                            Projects
                        </Link>
                        <Link to="/about/">
                            About
                        </Link>
                    </div>
                </Container>
            </nav>
        );
    }
}

class Frontpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectComponents: []
        }
    }

    componentDidMount() {

        var c = Projects.projects.map((project) =>
            <ProjectThumbnail key={project.directory} name={project.thumbnail.text} img={project.thumbnail.image} link={"/" + project.directory + "/"} />
        )

        this.setState({
            projectComponents: c
        });
    }

    render() {
        return (
            <Content>
                <h1>Projects</h1>
                <div className="projects">
                    {this.state.projectComponents}
                </div>
            </Content>
        );
    }
}

class ProjectThumbnail extends React.Component {
    render() {
        return (
            <div className="project">
                <Link to={this.props.link}>
                    <img src={this.props.img} alt="Thumbnail" />
                    <h2>{this.props.name}</h2>
                </Link>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: []
        }
    }
    
    getRouteFromJson(project) {
        return <Route key={project.directory} exact path={"/" + project.directory + "/"} render={(props) => {
            if (project.type === "twopiece") {
                return <ProjectTwoPiece json={project} />;
            }
            else if (project.type === "onepiece") {
                return <ProjectOnePiece json={project} />;
            }
            else if (project.type === "game") {
                return <ProjectGame json={project} />
            }
        }} />;
    }

    componentDidMount() {
        let routes = Projects.projects.map(this.getRouteFromJson);

        /*for (var i = 0; i < Projects.projects.length; i++) {
            var p = Projects.projects[i];
            var fileRoutes = p.files.map((file) =>
                <Route key={p.directory + "/" + file} exact path={"/" + p.directory + "/" + file} component={() => <PDF file={"./projects/" + p.directory + "/" + file} />} />
            );

            routes = routes.concat(fileRoutes);
        }

        console.log(routes);
        */
        this.setState({
            routes: routes
        });
    }

    render() {
        return (
            <Router>
                <MyNavbar />
                <Route path="/" exact component={Frontpage} />
                <Route path="/about/" component={About} />
                {this.state.routes}
                <Footer />
            </Router>
        );
    }
}

//function App() {

//    return (
//        <Router>
//            <MyNavbar />
//            <Route path="/" exact component={Frontpage} />
//            <Route path="/about/" component={About} />
//            <Route path="/smadrelandsimulator/" component={() => <Project />} />
//            <Footer />
//        </Router>
//    );
//}

export default App;
