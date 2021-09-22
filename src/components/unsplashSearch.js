import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, fetchTotalPages } from "../store/actions";
import UnsplashSearchBar from "./unsplashSearchBar";
import { Card } from "semantic-ui-react";
import UnSplashPaginator from "./unsplashPagination";

const UnsplashSearch = () => {
    const searchImagesResult = useSelector(state => state.images)
    const activePage = useSelector(state => state.activePage)
    const [searchText, setSearchText] = useState(null)
    const getSearchTextCallback = (searchText) => {
        setSearchText(searchText)
    }


    const dispatch = useDispatch()

    useEffect(()=> {
        if(searchText){
            dispatch(fetchImages({searchText, activePage}))
            dispatch(fetchTotalPages())
        }
    },[searchText, activePage])

    
    

    
    // const searchImages = []
    const searchImages = searchImagesResult.length ? searchImagesResult.map(image =>{
        // console.log("image", image)
       return(
                <Card key={image.id} color="red" raised image={image.urls.small} />           
       ) 
    }) : []
    return (
        <div>
            <UnsplashSearchBar parentCallback= {getSearchTextCallback} />
            {searchText && 
                <div>
                    <div className="ui horizontal divider">
                        <span>Search results for 
                            <span className="ui large"> {searchText}</span>
                        </span>
                    </div>
                    <Card.Group style={{height: "fit-content !important"}} itemsPerRow={4} >
                        {searchImages}
                    </Card.Group>
                    <UnSplashPaginator/>
                </div>
            }
        </div>
    )
}

export default UnsplashSearch