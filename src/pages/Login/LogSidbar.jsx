import { FaGoogle, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const LogSidbar = () => {
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
    </div>
  );
};

export default LogSidbar;