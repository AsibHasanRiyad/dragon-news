/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handelRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        // console.log(form);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(email, password, name, photo);

        //create user
        createUser(email, password)
        .then(result =>console.log(result.user))
        .catch(error => console.log(error.message))
    }
  return (
    <div>
        <NavBar></NavBar>
      <div className=" py-8 w-full md:w-3/4 lg:w-1/2 mx-auto ">
        <h1 className=" text-center text-3xl font-semibold mb-10">Register your account</h1>

        <hr />
        <form onSubmit={handelRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered rounded"
              required
              name="name"
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Insert Your Photo"
              className="input input-bordered rounded"
              required
              name="photo"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered rounded"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered rounded"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-red-600">
                Forgot password?
              </a>
            </label>
            <div className="text-center">
              <h1 href="#" className="label-text-alt link link-hover ">
              Already Have An Account ? <span className=" text-blue-600"><Link to={'/login'}>Login</Link></span>
              </h1>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#403F3F]">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
