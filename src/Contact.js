import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';


class Contact extends React.Component {
    render() {
        return (
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
                    
                </div>
                <div className="row row2"> {/*list and map*/}
                    <div className="col-sm-4 col-md-4 col-lg-4 left"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 aboutContent contactStyle">
                        <h3> Not Only Bottles</h3>  
                        <ul>
                            <li>Email: <a href="#">info@notonlybottles.ca</a></li>
                            <li>Phone: 604-123-4567</li>
                            <li>Other references:</li>
                            <li><a href="https://recyclebc.ca" target="_blank">Recycle BC</a></li>
                            <li><a href="http://www.regionalrecycling.ca/" target="_blank">Regional Recycling</a></li>
                            <li><a href="https://www.return-it.ca/" target="_blank">Return-it.ca</a></li>
                            <li><a href="https://www.burnaby.ca/City-Services/Garbage---Recycling/Eco-Centre.html" target="_blank">Burnaby Eco-Centre</a></li>

                            
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 right"></div>
                </div>
            </div>
        )
    }
}

export default Contact;