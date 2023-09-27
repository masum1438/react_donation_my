import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Feature = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div>
            
            <div className="grid lg:grid-cols-4 lg:gap-3 lg:grid-cols-2 md:gap-2  my-3 items-center">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
        </div>
    );
};

export default Feature;