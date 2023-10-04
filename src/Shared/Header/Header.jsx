import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' text-center'>
            <div className=' flex justify-center'>
            <img src={logo} alt="" />
            </div>
            <p className=' text-lg font-normal text-[#706F6F] mt-4 mb-2'>Journalism Without Fear or Favour</p>
            <p className=' text-xl font-medium text-[#403F3F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;