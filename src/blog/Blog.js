import React, {Component} from 'react';
import { Content } from "../Components";
import Blogs from "./blogs";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogThumbnails: []
        }
    }

    getFirstParagraph(text) {
        let t = text.split("\r\n\r\n")[0];
        return t;
    }

    componentDidMount() {
        Promise.all(Blogs.entries.map(async (blog, index) => {
            return fetch(blog.markdown).then(response => {
                return response.text();
            }).then((text) => {
                return <BlogThumbnail key={index} title={blog.title} date={blog.date} text={this.getFirstParagraph(text)} route={blog.route}/>;
            });
        })).then((c) => {
            this.setState({
                blogThumbnails: c
            })
        })
    }

    render() {
        return (
            <Content className="blog">
                {this.state.blogThumbnails}
            </Content>
        );
    }
}

class BlogThumbnail extends Component {
    render() {
        return (
                <div className="blogThumbnail">
                    <h1>
                        <Link to={"/blog/" + this.props.route} >
                            {this.props.title}
                        </Link>
                    </h1>
                    <p className={"date"}>
                        Posted on {this.props.date}.
                    </p>
                    <p>
                        {this.props.text}..<br/><br/>
                        <Link to={"/blog/" + this.props.route} >
                            {" Read the full entry"}
                        </Link>
                    </p>
                </div>
        );
    }
}

export class BlogEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);

        fetch(this.props.json.markdown).then(response => {
            return response.text();
        }).then((text) => {
            this.setState({
                markdown: text
            });
        });
    }

    render() {
        return (
            <Content className={"blogEntry"}>
                <h1>{this.props.json.title}</h1>
                <p className={"date"}>
                    Posted on {this.props.json.date}.
                </p>
                <ReactMarkdown children={this.state.markdown} rehypePlugins={[rehypeRaw]} className={"blogText"} />
            </Content>
        );
    }
}