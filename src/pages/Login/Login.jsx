import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  console.log('Location in the login page', location);
  const handelLogin = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password')
    signInUser(email, password)
    .then( () => {
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => console.log(error))
    console.log(email, password)
  }
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="px-14 py-14 w-full md:w-3/4 lg:w-1/2 mx-auto ">
        <h1 className=" text-center text-3xl font-semibold mb-10">
          Login your account
        </h1>

        <hr />
        <form 
        onSubmit={handelLogin}
        className="card-body">
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
              <a
                href="#"
                className="label-text-alt link link-hover text-red-600"
              >
                Forgot password?
              </a>
            </label>
            <div className="text-center">
              <h1 href="#" className="label-text-alt link link-hover ">
                Do not Have An Account ?{" "}
                <span className=" text-blue-600">
                  <Link to={"/register"}>Register</Link>
                </span>
              </h1>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#403F3F]">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
