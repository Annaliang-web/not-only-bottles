//npm i react - router - dom
import React, { Component } from 'react';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import NotOnlyBottles from './NotOnlyBottles';
import About from './About';
import Contact from './Contact';
import LocationDetail from './LocationDetail';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import MapContainer from './MapContainer';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      locations:[], //pass all locations to side list and map
      selectedPlace:{},
      showingInfoWindow: false,
      activeMarker: {},
      filter:'all',
    }
    this.markers = []; //varriable assigns in the object
  }
  componentWillMount(){   
    this.loadLocations();
  }

  updateMarkers = (markers) => {
    console.log(this.markers)
    this.markers = markers
  }

  loadLocations = ()=>{
    axios.get("http://localhost:8081/notonlybottles") //get all locations from sevrer
         .then((response)=>{
            let locationsSet = [];
            for(let location in response.data){
               locationsSet.push(response.data[location])
            }
          //  console.log(response.data) 
          //  console.log(locationsSet);
            this.setState({locations:locationsSet})
         })
  }
  //----------------- Google map functions  -----------------
  onMarkerClick = (props,marker,e) =>{
    console.log("Marker Click")
    console.log(props, marker, e)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })    
  }
  onMapClicked = (props) =>{ //click on other area after clicking the marker
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    } 
  }

  filterClick = (newFilter) =>{ 
    this.setState({filter:newFilter})
    // console.log(this.state.filter)
  }

  addMarker = (marker) => { //click on list and display infowindow
    this.markers.push(marker)
  }
  updateActiveMarker = (activeMarker) => { //click on list and display infowindow
    console.log(activeMarker)
    this.setState({
      showingInfoWindow: true,
      activeMarker: activeMarker.marker,
      selectedPlace: activeMarker.props
    })
  }
  //---------------------------------------------------------
  render() {
    
    return (
      <div className="App container">
          <Switch>
            {/* <Route path="/notonlybottles" component={NotOnlyBottles} /> */}
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
            <Route exact path="/" render={() => {
              return (
                <div className="row row2"> {/*list and map*/}
                  <NotOnlyBottles 
                  locations={this.state.locations}
                  selectedPlace={this.state.selectedPlace}
                  showingInfoWindow={this.state.showingInfoWindow}
                  activeMarker={this.state.activeMarker}
                  filter={this.state.filter}
                  markers={this.markers}
                  loadLocations={this.loadLocations}//function
                  updateMarkers={this.updateMarkers}//function
                  onMarkerClick={this.onMarkerClick}//function
                  onMapClicked={this.onMapClicked}//function
                  filterClick={this.filterClick}//function
                  updateActiveMarker={this.updateActiveMarker}//function
                  addMarker={this.addMarker} //function
                  />
                </div>
            )
            }} />
            <Route path="/locationdetail/:locationId"
                render={(props) => {
                  return <LocationDetail locations={this.state.locations} {...props} />
                }} />
          </Switch>    
      </div>
      
    );
  }
}

export default App;

