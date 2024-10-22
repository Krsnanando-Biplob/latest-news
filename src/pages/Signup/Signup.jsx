import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";

const Signup = () => {

  const navigate = useNavigate()

  const {createUser} = useContext(AuthContex)
  const handelSigUpfrom = e => {
    e.preventDefault();
    const from = new FormData(e.currentTarget)
    const name = from.get('name')
    const photo = from.get('photo')
    const email = from.get('email')
    const password = from.get('password')
    console.log(name, email, password)
    createUser(email, password)
    .then(result =>{
      console.log(result.user)
      navigate('/')
    })
    .catch(error =>{
      console.log(error)
    })
    
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h2 className="text-3xl text-center">Please Sign up</h2>
        <form onSubmit={handelSigUpfrom} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="photo url" className="input input-bordered" />
          </div>
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
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
        <p className="text-center">
          Already have an acount <Link className="underline ml-3 font-bold text-blue-500" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;