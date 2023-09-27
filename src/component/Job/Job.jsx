import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({job}) => {
  
    const {id,cover,title,introduction} = job;
    const cardStyle = {
        backgroundColor: job.bgcolor,
        color:job.color,
      };
    const cdStyle = {
        backgroundColor: job.tcolor,
       
      };
    
    return (
      <Link to={`/job/${id}`}>
        <div className="card  h-72  shadow-xl mx-auto" style={cardStyle}>
        <figure><img className='w-3/4 h-3/4' src={cover} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="p-1" style={cdStyle}>
            <h2 className="card-title font-medium text-base">{title}</h2>
          </div>
          
          <p className='font-normal text-sm'>{introduction}</p>
          
        </div>
      </div></Link>
    );
};
Job.propTypes={
  job: PropTypes.object.isRequired,
}
export default Job;