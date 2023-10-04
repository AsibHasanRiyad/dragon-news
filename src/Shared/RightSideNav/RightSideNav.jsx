import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
        {/* login with */}
      <div className=''>
        <h1 className=' text-xl font-semibold'>Login With</h1>
        <button className="btn w-full outline outline-blue-600 text-blue-600 mt-4 font-medium text-base normal-case bg-white">
        <FaFacebook></FaFacebook>
          Login With Facebook
        </button>
        <button className="btn w-full outline outline-red-600 text-red-600 mt-4 font-medium text-base normal-case bg-white">
        <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn w-full outline outline-black text-black mt-4 font-medium text-base normal-case bg-white">
        <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      {/* find us on */}
      <div>
        <h1 className=' text-xl font-semibold mt-8 mb-4'>Find Us On</h1>
        <a className=' flex items-center text-lg gap-2 p-3 border text-[#706F6F]  font-normal rounded-t-md' href="">
            <span className=' text-blue-600'><FaFacebook></FaFacebook> </span>
            Facebook</a>
        <a className=' flex items-center text-lg gap-2 p-3 border-x text-[#706F6F] font-normal ' href="">
            <span className=' text-blue-600'><FaTwitter></FaTwitter> </span>
            Twitter</a>
        <a className=' flex items-center text-lg gap-2 p-3 border text-[#706F6F] font-normal rounded-b-md' href="">
            <span className='p-1 bg-gradient-to-t from-[#515BD4] via-[#8134AF] to-[#DD2A7B] text-white rounded-full'><FaInstagram></FaInstagram> </span>
            Instagram</a>
      </div>
      {/* QZone */}
      <div className=' bg-[#F3F3F3] p-1 mt-5'>
        <h1 className=' ml-3 text-xl font-semibold'>Q-Zone</h1>
        <div className=' flex flex-col'>
        <img src={qZone1} alt="" />
        <img className='my-5' src={qZone2} alt="" />
        <img className=' mb-5' src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
