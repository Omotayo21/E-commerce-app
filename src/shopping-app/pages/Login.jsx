import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { authentication, googleProvider } from "../../config/firebase";
import { GoogleLogo } from "phosphor-react";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  //when you come back do login in with google
  const validateForm = () => {
    const errors = {};

    // Check if email contains '@gmail.com'
    if (!email.toLowerCase().includes("@gmail.com")) {
      errors.email = "Email must be a Gmail account";
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loginAction = async (e) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      try {
        await signInWithEmailAndPassword(authentication, email, password);
        const user = authentication.currentUser;
        //dispatch(userLoggedIn(user));
        const userUid = user.uid;

        const response = await fetch(
          `https://my-shopping-app-dfa7b-default-rtdb.firebaseio.com/users/${userUid}/cartItems.json`
        );
        const userData = await response.json();
        console.log(userData);
      } catch (error) {
        console.log(error);
        // Handle authentication error, e.g., display an error message
        setNotification({
          type: "error",
          message: "incorrect email or password",
        });
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(authentication, email);
      // display message that password has been sent
      setNotification({
        type: "success",
        message: "Password reset email sent to your email",
      });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      console.log(error);
      setNotification({
        type: "error",
        message: "Error sending password reset email",
      });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  onAuthStateChanged(authentication, (currentUser) => {
    if (currentUser) {
      navigate("/home");
      setPassword("");
    }
  });
  const signUpwithGoogle = async (e) => {
    try {
      e.preventDefault();
      await signInWithPopup(authentication, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const handletogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const inputType = passwordVisible ? "text" : "password";

  return (
    <>
      <section className="bg-white mt-12">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:max-w-md md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0 border-blue-700">
            <div className="p-6 space-y-4 sm:p-8 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-700 sm:text-2xl">
                Sign in to your account
              </h1>
              <form
                onSubmit={(e) => {
                  loginAction(e);
                }}
                className="space-y-4 sm:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-blue-700"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidationErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "",
                      }));
                    }}
                    placeholder="name@mail.com"
                    className={`bg-gray-50 border border-blue-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                      validationErrors.email && "border-red-500"
                    }`}
                    required=""
                  />
                  {validationErrors.email && (
                    <p className="text-center">
                      <small className="text-red-800">
                        {validationErrors.email}
                      </small>
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-blue-700"
                  >
                    Password
                  </label>
                  <input
                    type={inputType}
                    value={password}
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setValidationErrors((prevErrors) => ({
                        ...prevErrors,
                        password: "",
                      }));
                    }}
                    placeholder="at least 6 characters long"
                    className={`bg-gray-50 border border-blue-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                      validationErrors.password && "border-red-500"
                    }`}
                    required=""
                  />
                  {validationErrors.password && (
                    <p className="text-center">
                      <small className="text-red-800">
                        {validationErrors.password}
                      </small>
                    </p>
                  )}
                  <button
                    className="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center pr-5 cursor:pointer"
                    onClick={handletogglePassword}
                  >
                    {passwordVisible ? "hide" : "show"}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-700 hover:underline "
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={loginAction}
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <button
                  className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm pl-16 py-2.5 text-center flex flex-row"
                  onClick={signUpwithGoogle}
                >
                  Sign in with Google account <GoogleLogo size={20} />
                </button>
                <p className="text-sm font-light text-black-500">
                  Don't have an account yet?{" "}
                  <Link
                    to="/signup"
                    href="#"
                    className="font-medium text-blue-600 hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              {notification && (
                <div
                  className={`${
                    notification.type === "success"
                      ? "bg-green-500"
                      : "bg-red-600"
                  } pt-4 left-0 w-full p-4 text-white text-center`}
                >
                  {notification.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Login;
