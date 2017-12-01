import React, { Component } from 'react';
import './App.css';
import image from './green.jpg';
import { Route, Switch, Link } from 'react-router-dom';
import Contact from './Contact';

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row row1 button-group">
                    {/* <AutoComplete />   */}
                    <div className="col-sm-7 col-md-7 col-lg-7">
                        <ul className="nav navBar nav-tabs">
                            <li><Link to="/">App</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        {/* <form>
              <input ref="autocomlete" type="text" placeholder="Enter a location" />
              <input type="submit" value="Go" />
            </form> */}
                    </div>  
                </div >
                
                <div className="row row2"> {/*list and map*/}
                    <div className="col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-sm-7 col-md-7 col-lg-7 aboutContent about">
                        <h3>About us</h3>
                        <p>We’ve all known the main function of recycling depots is bottle recycling, 
                            but in our daily life we have used items way more than bottles can be recycled.</p>
                        <p>Not Only Bottles is an app that helps people to know where recycling depots accept not only bottles but also other used materials.</p>
                        <p>Not Only Bottles’ mission is to provide a convenient way to encourage users to do recycle so that in long term it benefits our environment.</p>
                        <img src={image} />
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
        )
    }
}

export default About;