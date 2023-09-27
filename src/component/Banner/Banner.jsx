
const Banner = () => {
    return (
        <div className=" lg:bg-[length:1200px_600px] md:bg-[length:900px_400px] 
        bg-[length:400px_300px] lg:h-96 md:h-60 h-44 bg-no-repeat bg-center 
        justify-center items-center text-center my-8 
        bg-[url('https://i.ibb.co/rQphZ89/banner1.jpg')]">
           <h2 className="lg:text-5xl md:text-xl text-sm">I Grow By Helping People In Need</h2> 
           <div className="my-6">
           <input className="p-2 border rounded-lg" type="text" placeholder="search here..." />
           <button className="p-2 rounded-lg bg-[#FF444A] text-white">search</button>
        </div>
        </div>
    );
};
export default Banner;