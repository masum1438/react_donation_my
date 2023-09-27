import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Donationdetails = ({job}) => {
    const {id}=job;
   
    const cardStyle = {
        backgroundColor: job.bgcolor,
        color:job.color,
      };
      
    const cdStyle = {
        backgroundColor: job.color,
       
      };
    return (
        <div style={cardStyle} className="grid grid-cols-2 card w-auto p-2 bg-base-100 shadow-xl gap-3 mx-3 ">
            <div>
                <figure><img className='' src={job.cover} alt="Shoes" /></figure>
            </div>
     <div className="card-body">
    <h2 className="card-title font-medium text-base">{job.title}</h2>
    <p className='font-normal text-sm'>{job.introduction}</p>
    <h4>{job.price}$</h4>
    <div className="card-actions items-baseline">
    <Link to={`/job/${id}`} >
        <button  style={cdStyle} className="btn btn-primary w-full  text-[#FFF] text-sm">Veiw Details</button>
       </Link>
   
    </div>
  </div>
</div>
    );
};
Donationdetails.propTypes={
    job: PropTypes.object.isRequired,
  }
export default Donationdetails;