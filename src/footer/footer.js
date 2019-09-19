import React from 'react';
import Twitter from './twitter.svg';
import LinkedIn from './linkedin.png'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="contact">
                <div>
                    <h2>Contact</h2>
                </div>
                <div>
                    <p>
                        Phone: +45 40 16 89 85
                        <br />
                        E-mail: jonathan_hertz2@live.dk
                        <br />
                        <a className="logo" href="https://twitter.com/Bmandk"><img src={Twitter}
                            alt="Twitter Profile" /></a>
                        <a className="logo" href="https://www.linkedin.com/in/jonathan-hertz-5221a899/"><img
                            src={LinkedIn} alt="LinkedIn Profile" /></a>
                    </p>
                </div>
            </div>
        )
    }
}