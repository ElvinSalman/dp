import React from 'react'
import {Link} from 'react-router-dom';

import "./Error.css";

export default function Error() {
    return (
        <div className="err-div">
            <img src="https://cdn.trend.az/2020/03/17/azal_170320_3.jpg" className="err-img" alt="error-img" />
            <h1>Error-404 Not Found</h1>
            <h3> <Link to="/" onClick={()=>{window.scrollTo(0, 0);}} className="list-group-item list-group-item-action">Back Home</Link></h3>
        </div>
    )
}
