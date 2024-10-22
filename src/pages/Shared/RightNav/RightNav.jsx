import { FaGoogle, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import qzon1 from '../../../assets/qZone1.png'
import qzon2 from '../../../assets/qZone2.png'
import qzon3 from '../../../assets/qZone3.png'
const RightNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login width</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl">Find Us On</h2>
        <a className="p-4 flex gap-3 text-lg items-center border rounded-t-lg" href="">
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex gap-3 text-lg items-center border-x" href="">
          <FaLinkedin></FaLinkedin>
          LinkedIn
        </a>
        <a className="p-4 flex gap-3 text-lg items-center border rounded-b-lg" href="">
          <FaGithub></FaGithub>
          Github
        </a>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qzon1} alt="" />
        <img src={qzon2} alt="" />
        <img src={qzon3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;