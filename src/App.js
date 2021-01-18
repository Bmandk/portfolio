import { Content, Container } from './Components';
import About from './about/About';
import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { ProjectOnePiece, ProjectTwoPiece, ProjectGame } from './projects/Project';
import Projects from './projects';
import Footer from './footer/footer';
import { Blog, BlogEntry } from './blog/Blog';
import Blogs from './blog/blogs';

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
                        <Link to="/blog/">
                            Blog
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
        document.title = "Jonathan Hertz Portfolio";
        
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
            projectRoutes: [],
            blogRoutes: [],
            test: 'help'
        }
    }
    
    getProjectRouteFromJson(project) {
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
        let projectRoutes = Projects.projects.map(this.getProjectRouteFromJson);

        this.setState({
            projectRoutes: projectRoutes
        });

        let blogRoutes = Blogs.entries.map((blog, index) => {
            return <Route key={index} exact path={"/blog/" + blog.route} render={(props) => {
                return <BlogEntry json={blog}/>;
            }} />;
        });

        this.setState({
            blogRoutes: blogRoutes
        });
    }

    render() {
        return (
            <Router>
                <MyNavbar />
                <Route path="/" exact component={Frontpage} />
                <Route path="/blog/" exact component={Blog} />
                <Route path="/about/" exact component={About} />
                {this.state.projectRoutes}
                {this.state.blogRoutes}
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
