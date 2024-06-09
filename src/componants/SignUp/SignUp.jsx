import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(authContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        toast.success("User created successfully!");
        const createAt = result.user.metadata.creationTime;
        const user = { email, createAt };

        // send data to the server
        fetch(
          "https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/user",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            toast.success("User Added successfully To Database");
          });
      })
      .then((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-slate-600">
      <h1 className="text-white font-extrabold text-3xl text-center py-5">
        Please Sign Up Here
      </h1>
      <div className="hero  p-11 ">
        <div className="hero-content flex-col lg:flex-row bg-black ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSignUp} className="card-body">
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
                  SignUp
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

export default SignUp;
