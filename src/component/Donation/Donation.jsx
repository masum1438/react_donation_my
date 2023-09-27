import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import Donationdetails from "../../Donationdetails/Donationdetails";


const Donation = () => {
  const jobs = useLoaderData();
  const [appliedJobs,setAppliedjobs]=useState([]);
   const [dataLength,setDataLength]=useState(4);
  useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data =>setAppliedjobs(data));
    const storedJobIds=getStoredJobApplication();
    const jobsApplied = [];
   for(const id of storedJobIds){
    const job =jobs.find(job => job.id === id);
    if(job){
      jobsApplied.push(job);
    }
    setAppliedjobs(jobsApplied);
  }
    
  },[]);
  return (
  
    <div className="">
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 my-3 items-center'>
        {
          appliedJobs.slice(0,dataLength).map(job => <Donationdetails
            key={job.id}
            job={job}
          ></Donationdetails> )
         
        }
      </div>
    <div className={dataLength===appliedJobs.length && 'hidden'}>
      <button className="bg-blue-600 p-2 m-4" onClick={() => setDataLength(appliedJobs.length)} >Show All</button>
    </div>
    </div>
   
  );
};

export default Donation;