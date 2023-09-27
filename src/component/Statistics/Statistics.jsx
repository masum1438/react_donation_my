
import { getData } from "../../utility/localstorage";
import { PieChart } from 'react-minimal-pie-chart';
const Statistics = () => {
  const myValue = getData(); // Capture the value returned by getData
  const val=parseInt(myValue);
  let xv=(val/12)*100;
 let yv =100-xv;
  return (
    <div className="grid items-center justify-center">
      
      <div className="lg:w-96 md:w-60 w-40">
      <PieChart
  data={[
    { title: 'One', value:val, color: '#E38627' },
    { title: 'Two', value: 12-val, color: '#C13C37' },
   
  ]}
/>;</div>
    <div className="grid grid-cols-2 gap-3">
      <div> <span className="bg-[#C13C37] w-8  px-14"></span>Total Donation: {yv}%</div>
      <div> <span className="bg-[#E38627] w-8 px-14"></span>Your Donation: {xv}%</div>
    </div>
    </div>
  );
};

export default Statistics;
