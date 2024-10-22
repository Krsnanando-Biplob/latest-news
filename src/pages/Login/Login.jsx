import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import RightNav from "../Shared/RightNav/RightNav";
import LogSidbar from "./LogSidbar";

const Login = () => {

  const { logIn } = useContext(AuthContex)
  const navigate = useNavigate()

  const handelLoginFrom = e => {
    e.preventDefault();
    console.log(e.currentTarget)
    const from = new FormData(e.currentTarget)
    console.log(from.get('email'))
    const email = from.get('email')
    const password = from.get('password')
    logIn(email, password)
      .then(result => {
        console.log(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-3xl text-center">Please Login</h2>
          <form onSubmit={handelLoginFrom} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">
            Don't have an acount <Link className="underline ml-3 font-bold text-blue-500" to="/signup">Sign up</Link>
          </p>
        </div>
        <div>
          <LogSidbar></LogSidbar>
        </div>
      </div>
    </div>
  );
};

export default Login;