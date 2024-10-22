import logo from '../../../assets/logo.png'
import moment from 'moment';

const Hadder = () => {
  return (
    <div className='text-center'>
      <img className='mx-auto my-4' src={logo} alt="" />
      <p className='mb-2'>Journalism Without Fear or Favour</p>
      <p className="text-2xl">{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Hadder;