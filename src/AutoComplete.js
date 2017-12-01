import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'


class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state={ 
            address: 'Vancouver, BC' 
        }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            // .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            onBlur: ()=>{
                console.log('blur!')
            },
            type: 'search',
            placeholder: 'Search Places...',
            autoFocus: true
        }

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete inputProps={inputProps} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AutoComplete;