import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="flex justify-center h-screen items-center ">
      <h2 className="text-5xl font-extrabold text-red-600">Career is coming soon and <Link className="text-blue-600 underline" to='/'>go back</Link></h2>
    </div>
  );
};

export default Career;