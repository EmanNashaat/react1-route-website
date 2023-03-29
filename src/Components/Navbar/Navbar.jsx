
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from jquery ;

export default class Navbar extends Component {
  coloring(e){
    console.log("hi");
    // document.getElementById("activation").classList.remove("active");
    // $(e.target).addClass("active");
  }
  render() {
    return <>
    <nav className="navbar navbar-expand-lg w-100  position-fixed top-0 start-0 end-0">
        <div className="container-fluid  py-2 ">
          <a className="navbar-brand text-white fw-bold fs-3 ps-5 ms-5" href="#">START REACT</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 pe-5 fs-5 navUl">
              <li className="nav-item mx-2 py-3  " onMouseUp={this.coloring} >
                <Link className="nav-link text-white fw-bold" aria-current="page" to="portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item mx-2 py-3 " id="activation" onMouseUp={this.coloring} >
                <Link className="nav-link text-white fw-bold" to="about">ABOUT</Link>
              </li>
              <li className="nav-item mx-2 py-3 " id="activation" onMouseUp={this.coloring} >
                <Link className="nav-link text-white fw-bold" to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>

    
    </>
  }
}
