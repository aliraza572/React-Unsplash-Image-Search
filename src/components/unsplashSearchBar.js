import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetImageActivePage } from "../store/actions";

function UnsplashSearchBar (props) {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleSearch = (event) => {
        dispatch(resetImageActivePage(1))
        event.preventDefault();
        props.parentCallback(text)
    }
    return(
        <div>
            {/* <form className="ui form" onSubmit={handleSearch}>
                <div className="ui icon input">
                    <div className="field">
                        <input type="text" required onChange={(event)=>handleChange(event)} placeholder="Search for photos..."/>
                    </div>
                    <button type="submit" className="positive ui button">Search Unsplash</button>
                </div>
            </form> */}
            <form className="ui form" onSubmit={handleSearch}>
                <div className="ui fluid category search">
                    <div className="ui icon input">
                    <input type="text" required onChange={(event)=>handleChange(event)} placeholder="Search for photos..."/>
                        <i className="search icon"></i>
                    </div>
                <button className="positive ui button" type="submit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default UnsplashSearchBar