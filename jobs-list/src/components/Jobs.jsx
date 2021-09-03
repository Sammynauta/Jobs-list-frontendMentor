import React from "react";
import SingleJob from './Singlejob';
const Jobs = ({data, setKeywords }) => {
    console.log(data)
    return (
        <div className="jobs">
            {data.map( (d) => {
                return <SingleJob data={d} setKeywords={setKeywords} />;
            }) }
        </div>
    )
}

export default Jobs;