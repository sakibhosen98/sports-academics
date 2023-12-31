import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
 const {createUser, updateUserProfile} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword){
      return setPasswordCheck("Passwort Not match ")
    }
    console.log('23', data)
    createUser(data.email, data.password)

    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.url)
      .then(() => {
        const saveUser = {name: data.name, email: data.email, photoURL: data.url}
        fetch('https://sports-academies-server-eta.vercel.app/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User created successfully',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          }
        })
      })
      .catch(error => console.log(error))
    })
  };

  return (
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-3xl pt-2 font-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                {...register("url", { required: true })}
                placeholder="photo url"
                className="input input-bordered"
              />
              {errors.url && (
                <span className="text-red-600">Photo url is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-600">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p role="alert" className="text-red-600">
                  Password must be less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p role="alert" className="text-red-600">
                  Password must have one Capital letter and one Special
                  character
                </p>
              )}
            </div>
            <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
              
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.confirmPassword?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Please input the confirm password
                </p>
              )}
              <p>{passwordCheck}</p>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn bg-orange-500" />
            </div>
          </form>
          <p><small>Already have an account Please <Link to="/login">Login</Link></small></p>
                        <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
