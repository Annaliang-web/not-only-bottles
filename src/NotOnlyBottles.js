//npm i react - router - dom
import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import {Route,Switch,Link} from 'react-router-dom';
import LocationDetail from './LocationDetail';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer';

const RadiatingLink = Radium(Link);
class NotOnlyBottles extends Component {
  constructor(props){
    super(props);
   
  }
  // updateMarkers = (markers) => {
  //   console.log(this.markers)
  //   this.markers = markers
  // }

  // updateActiveMarker = (activeMarker) => {
  //   // console.log(activeMarker)
  //   this.setState({
  //     // selectedPlace: activeMarker.props,    //---------- activeMarker undefined
  //     showingInfoWindow: true,
  //     activeMarker: activeMarker
  //   })
  // }           
  //---------------------------------------------------------
  render() {
    // console.log(this.props.markers)
    let filteredLocations = this.props.locations.filter((location)=>{
      // console.log(filteredLocations) //the locations array but filtered
      if(this.props.filter === 'all') return true
      // if(this.props.filter === location.materials) return true
      if(location.materials.indexOf(this.props.filter) >= 0) return true
      else return false  
    })
    let listJSX = filteredLocations.map((eachLocation, i)=>{ //map out all details on side list
        // console.log(eachLocation._id)
        console.log(eachLocation.image)
      return <table className="table" key={i}
              onClick={() => { this.props.updateActiveMarker(this.props.markers[i]) }}
              >
              <tbody className="noBorder">
                <tr className="image"><img src={eachLocation.image} /></tr>
                <tr className="locationName">  
                  <td>
                  <RadiatingLink to={'/locationdetail/' + eachLocation._id} style={{":hover":{textDecoration: "none"}}}>
                  {eachLocation.name}
                  </RadiatingLink>
                  </td>
                </tr>  
                <tr><td className="address">{eachLocation.address}</td></tr>  
                <tr className="bottomRow"><td><a href={eachLocation.website} target="_blank">Website</a></td></tr> 
              </tbody>
            </table>
    })
    return (
      <div className="NotOnlyBottles container">
        <div className="row row1 button-group">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <ul className="nav navBar nav-tabs">
              <li><Link to="/">App</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-sm-9 col-md-9 col-lg-9">
            <button onClick={() => { this.props.filterClick("all") }} className="btn btn-success" type="submit">Show All</button>
            <button onClick={() => { this.props.filterClick("foam") }} className="btn btn-success" type="submit">Foam Packaging</button>
            <button onClick={() => { this.props.filterClick("electronics") }} className="btn btn-success" type="submit">Electronics</button>
            <button onClick={() => { this.props.filterClick("brita") }} className="btn btn-success" type="submit">Brita Filters</button>
            <button onClick={() => { this.props.filterClick("paint") }} className="btn btn-success" type="submit">Paint</button>
            <button onClick={() => { this.props.filterClick("batteries") }} className="btn btn-success" type="submit">Batteries</button>
            <button onClick={() => { this.props.filterClick("hard") }} className="btn btn-success" type="submit">Hard Plastic</button>
            <button onClick={() => { this.props.filterClick("metal") }} className="btn btn-success" type="submit">Household Scrap Metal</button>
          </div>
        </div>
        <div className="row row2"> {/*list and map*/}
            <div className="col-sm-3 col-md-3 col-lg-3 scroll">{listJSX}</div>
          <div className="map">
            <MapContainer 
                          filteredLocations = {filteredLocations}
                          selectedPlace={this.props.selectedPlace}
                          showingInfoWindow={this.props.showingInfoWindow}
                          activeMarker={this.props.activeMarker}
                          onMapClicked={this.props.onMapClicked}
                          onMarkerClick={this.props.onMarkerClick}
                          updateMarkers = {this.props.updateMarkers}
                          addMarker = {this.props.addMarker}/>
          </div>                        
        </div>
      </div>
      
    );
  }
}

export default NotOnlyBottles;

