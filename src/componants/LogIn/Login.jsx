import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const { signInUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(from, { replace: true });
        toast("Login successful");
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        // update the last log in the database

        fetch(
          "https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/user",
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="bg-slate-600">
      <h1 className="text-center font-bold text-3xl text-white">
        Please Login{" "}
      </h1>
      <div className="hero  p-11 ">
        <div className="hero-content flex-col lg:flex-row bg-black ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-900 border-none text-white ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
