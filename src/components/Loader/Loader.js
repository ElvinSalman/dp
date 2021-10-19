import React, { Component } from 'react'
import './Loader.css'
export default class Loader extends Component {
    render() {
        return (
            <div className="lr-1">
                {/* <div className="loadingio-spinner-double-ring-82201lwwf4l"><div className="ldio-03ryofceyk19">
<div></div>
<div></div>
<div><div></div></div>
<div><div></div></div>
</div></div> */}
            <img className="lr" src="https://cdn.dribbble.com/users/940782/screenshots/3533101/plane-loader-slower.gif" width="200px" alt="Logo"/>
            {/* <img className="lr" src="../../../public/plane-loader-slower__.gif" width="200px" alt="Logo"/>             */}
            </div>

/* <img style={{width:"100vw",height:"100vh"}} src="https://cdn.dribbble.com/users/891352/screenshots/2675550/flight-loader-dribbble.gif" alt="Loading..."/>  */

        )
    }
}
