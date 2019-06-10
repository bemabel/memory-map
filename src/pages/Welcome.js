import React, { Component } from 'react';
import EarthGif from '../components/EarthGif/EarthGif';
import Login from '../components/Login/Login';


class Welcome extends Component {
    render(){
        return(
            <>
            <EarthGif />
            <Login />
            </>
        )
    }
}

export default Welcome