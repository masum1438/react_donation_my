import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetail = () => {
    
    const jobs = useLoaderData();
    const {id}=useParams();
     const idInt =parseInt(id);
    const job = jobs.find(job =>job.id == idInt)
    const {cover,price,introduction,description} = job;
    const cardStyle = {
        backgroundColor: job.color,
      
      };
      const handleApplied = () => {         
         saveJobApplication(idInt);
        toast("Submitted successfully");
    };
    
    return (
        <div className="">
           <div className="mx-auto">
            <img className="w-3/4 h-1/2" src={cover} alt="" />
            <div className="bg-green-400 p-4 absolute w-3/4 -my-14">
                 <button onClick={handleApplied} className="text-white p-2" style={cardStyle}>Donate:{price}$</button>
            </div>
           
           </div>
           <div className="my-14">
            <h2 className="lg:text-3xl text-base font-medium">{introduction} </h2>
            <h4 className="lg:text-xl text-sm normal">{description} </h4>
           </div>
           <ToastContainer />
        </div>
    );
};

export default JobDetail;