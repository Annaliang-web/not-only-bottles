import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class LocationDetail extends React.Component {
    render() {
        
        // let location = this.props.locations.find((location) => {  //????????????????
        //     // return location._id = this.props.match.params._id
        // })
        let location;
        let locationName, locationAddress, locationContact, locationWebsite, locationMaterials, locationImage
        for(let i=0; i < this.props.locations.length; i++){
            if (this.props.locations[i]._id === this.props.match.params.locationId){
                console.log(this.props.locations[i].image)
                // console.log(this.props.locations[i])
                console.log(location) // undefined ????????
                // location = this.props.locations[i];
                locationImage = this.props.locations[i].image
                locationName = this.props.locations[i].name
                locationAddress = this.props.locations[i].address
                locationContact = this.props.locations[i].contact
                locationWebsite = this.props.locations[i].website
                locationMaterials = this.props.locations[i].materials
                break;
            }
        }
        
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
                </div >

                <div className="row row2"> {/*list and map*/}
                    <div className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-sm-6 col-md-6 col-lg-6 aboutContent">
                      {/* <h3>{location.name}</h3> */}
                        <image src={locationImage} />
                        <h3>{locationName}</h3>
                    <table className="detail">
                        <tr><td>Address:</td><td>{locationAddress}</td></tr>
                        <tr><td>Phone:</td><td>{locationContact}</td></tr>
                        <tr><td>Website:</td><td><a href={locationWebsite} target="_blank">{locationWebsite}</a></td></tr>
                        <tr><td>Accepted items:</td><td className="items">{locationMaterials}</td></tr>
                    </table>
                    </div>
                    <div className="col-sm-5 col-md-5 col-lg-5"></div>
                </div>
            </div>
        )
    }
}

export default LocationDetail;