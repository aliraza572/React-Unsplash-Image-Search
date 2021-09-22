import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Icon } from "semantic-ui-react";
import { changeImageActivePage } from "../store/actions";

const UnSplashPaginator = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    return(
        <div style={{ paddingLeft: "32%", paddingTop:"5%", paddingBottom:"5%" }}>
            <Pagination 
                defaultActivePage={state.activePage}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                // pointing
                // secondary
                totalPages={state.totalPages}
                onPageChange={
                    (e, pageInfo) => {
                        console.log("pageInfo.activePage", pageInfo.activePage)
                        dispatch(changeImageActivePage(pageInfo.activePage))
                    }
                }
            />
        </div>
    )
}

export default UnSplashPaginator