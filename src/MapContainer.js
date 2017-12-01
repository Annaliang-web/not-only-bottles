import React from 'react'
import './index.css'
// import image from './eco32.png'
import image from './24.png'
import {Map,InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import Listing from 'google-maps-react'
const mapStyle = {
    width: '78%',
    height: '100%',
    position: 'relative',
    // marginTop:'7%'
}

export class MapContainer extends React.Component {    

    render(){
        let markerJSX = this.props.filteredLocations.map((eachLocationMarker,i)=>{
        //    console.log(eachLocationMarker.contact)
               return (
               <Marker onClick={this.props.onMarkerClick} /*function*/
                       name={eachLocationMarker.name}
                       position={{ lat: eachLocationMarker.latitude, lng: eachLocationMarker.longitude }}
                       phone={eachLocationMarker.contact} /*options that pass to InfoWindow*/
                       website={eachLocationMarker.website}   /*options that pass to InfoWindow*/
                       materials={eachLocationMarker.materials}  /*options that pass to InfoWindow*/
                       icon={{ url: image}}
                       key={i} 
                       ref={(self) => { this.props.addMarker(self)}}
                />
               )
       })
        //this.props.updateMarkers(markerJSX);

        //console.log(this.props.activeMarker)
        return (
        <div>
          <Map  google={this.props.google} 
                onClick={this.props.onMapClicked}
                onReady ={this.props.fetchPlaces}
                style={mapStyle}
                visible={true}
                zoom={12}
                initialCenter={{
                    lat: 49.2691426,
                    lng: -123.0461695
                }}
          >
            {markerJSX}
            
            <InfoWindow
                marker={this.props.activeMarker}
                visible={this.props.showingInfoWindow}
                >
                <div className="infoWindow">
                    <h4>{this.props.selectedPlace.name}</h4>
                    <ul>
                      <li>{this.props.selectedPlace.phone}</li>
                      <li><a href={this.props.selectedPlace.website} target="_blank">website</a></li>
                      <li className="itemsWindow">Accepted items: {this.props.selectedPlace.materials}</li>
                    </ul>    
                </div>
            </InfoWindow>
          </Map>
          
        </div>
        )}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDAbmuTV-1kPZcagdUWGICYcZMHQSE0L_Y',
    libraries:['places']
})(MapContainer)

    