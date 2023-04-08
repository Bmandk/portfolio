import React from 'react';
import { Content } from '../Components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//import Unity, { UnityContent } from 'react-unity-webgl'

class ProjectContainer extends React.Component {
    render() {
        return (
            <Content>
                <div className={"projectcontainer"}>
                    <h1>{this.props.name}</h1>
                    <div className={"projecttext " + this.props.className}>
                        {this.props.children}
                    </div>
                </div>
            </Content>
        )
    }
}

class ProjectMedia extends React.Component {
    state = {
        type: ""
    }

    componentDidMount() {
        let re = /(?:\.([^.]+))?$/;
        this.setState({
            type: re.exec(this.props.media)[1]
        });
    }

    render() {
        if (this.state.type === "png" || this.state.type === "jpg" || this.state.type === "gif") {
            return (
                <div className={"gameimg"} >
                    <img src={this.props.media} alt="Gameplay" />
                </div >
            )
        }
        else if (this.state.type === "mp4") {
            return (
                <div className="vid">
                    <video controls>
                        <source src={this.props.media} type="video/mp4" />
                    </video>
                </div>
            )
        }
        else
            return null;
    }
}

class ProjectBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            markdown: ''
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);

        fetch(this.props.json.page.markdown).then(response => {
            return response.text();
        }).then((text) => {
            this.setState({
                markdown: text
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }
}

export class ProjectTwoPiece extends ProjectBase {
    render() {
        const media1 = this.props.json.page.media1;
        const media2 = this.props.json.page.media2;

        return (
            <ProjectContainer name={this.props.json.page.name}>
                <div>
                    <ProjectMedia media={media1} />
                    {this.state.windowWidth >= 768 && (
                        <ProjectMedia media={media2} />
                    )}
                </div>
                <ReactMarkdown children={this.state.markdown} rehypePlugins={[rehypeRaw]} className={"text"} style={{flexGrow: 1}} />
                {this.state.windowWidth < 768 && (
                    <ProjectMedia media={media2} />
                )}
            </ProjectContainer>
        );
    }
}

export class ProjectOnePiece extends ProjectBase {
    render() {
        const media = this.props.json.page.media;

        return (
            <ProjectContainer name={this.props.json.page.name}>
                {this.state.windowWidth >= 768 && (
                    <ProjectMedia media={media} />
                )}
                <ReactMarkdown children={this.state.markdown} rehypePlugins={[rehypeRaw]} className={"text"} />
                {this.state.windowWidth < 768 && (
                    <ProjectMedia media={media} />
                )}
            </ProjectContainer>
        );
    }
}

export class ProjectSingleColumn extends ProjectBase {
    render() {
        return (
            <ProjectContainer name={this.props.json.page.name}>
                <ReactMarkdown children={this.state.markdown} rehypePlugins={[rehypeRaw]} className={"text"} />
            </ProjectContainer>
        );
    }
}

/*export class ProjectGame extends ProjectBase {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            props.json.page.gamejson,
            props.json.page.gamejs
        );
    }

    render() {
        return (
            <ProjectContainer name={this.props.json.page.name}>
                <Unity unityContent={this.unityContent} className={"game"} width="100%" height="541px" />
                <ReactMarkdown children={this.state.markdown} rehypePlugins={[rehypeRaw]} className={"text"} />
            </ProjectContainer>
        );
    }
}*/