import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
 
            <div className="contactpage">

      <p className="kop">KONTAKTA OSS</p>
          <p class="textnormal">Andelsbaren är aktiv på flera sociala medier. <p>
          Vill du komma i kontakt med oss eller kanske vill du ansöka om att bli spelläggare hos oss.</p>
         <p> Oavsett vad så
          är du varmt välkommen att höra av dig!</p></p>
          <br></br>
          <div className="socialmedia">
  <a
    className="nav-social-icons-container"
    href=""
    onclick="window.open('https://m.me/andelsbaren')"
  >
    <i className="fa-brands fa-facebook-messenger fa-2x" />
  </a>
  <a
    className="nav-social-icons-container"
    href=""
    onclick="window.open('https://facebook.com/andelsbaren')"
  >
    <i className="fa fa-facebook fa-2x" />
  </a>
  <a
    className="nav-social-icons-container"
    href=""
    onclick="window.open('https://twitter.com/andelsbaren')"
  >
    <i className="fa fa-twitter fa-2x" />
  </a>
  <a
    className="nav-social-icons-container"
    href=""
    onclick="window.open('https://youtube.com/andelsbaren')"
  >
    <i className="fa fa-youtube fa-2x" />
  </a>
  <a
    className="nav-social-icons-container"
    href="mailto:info@andelsbaren.com"
    target="_blank"
  >
    <i className="fa fa-envelope fa-2x" />
  </a>
  <a
    className="nav-social-icons-container"
    href=""
    onclick="window.open('https://www.instagram.com/andelsbaren')"
    target="_blank"
  >
    <i className="fa fa-instagram fa-3x" />
  </a>
  </div>
</div>
            )
        }
    }
    
export default Contact
    