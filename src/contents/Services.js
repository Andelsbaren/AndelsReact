import React, { Component } from 'react'

class Services extends Component {

    render() {
        return (
            <div className="servicespage">


      <p className="kop">Köp andelar</p>
      <br/>
      <p>
        Andelsbaren är aktiv på de två dominerande spelplattformarna ATG
        Tillsammans samt Svenska Spels Spela Tillsammans.
        <br />
        <br /> Klicka på någon av länkarna nedan för att komma dirket till
        Andelsbarens portaler.
      </p>


    <div className="container">
      <a
        href="https://spela.svenskaspel.se/spela-tillsammans/ombudslag/23563-andelsbaren---spelhornan"
        target="_blank" >
        <img
          className="svenska-button"
          src="/assets/img/img/hämtning__1_-removebg-preview.png"/>
      </a>
      <a href="https://www.atg.se/spelhornansurahammar" target="_blank">
        <img
          className="atg-button"
          src="/assets/img/img/hämtning-removebg-preview.png"
        />
      </a>
    </div>

</div>
            )
        }
    }
    
    export default Services
    