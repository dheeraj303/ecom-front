import { Link } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import { Button } from '@material-tailwind/react';

import {signup} from '../services/authService'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    console.log("aaya");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Replace with your API endpoint
      const response = await signup(formData);

      console.log("Signup successful:", response.data);
      navigate('/dashboard');
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Failed to create account. Please try again.");
    }
  };


  return (
    <div className="flex min-h-screen px-4 md:px-5 lg:px-10 xl:px-24">
      {/* Left Column */}
      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0">
          <img
            src="./assets/images/signup/signupimage.jpg"
            alt="Office background"
            className="h-full w-full object-cover"
            width={700}
            height={800}
          />
        </div>
        <div className="absolute inset-0 bg-black/40">
          <div className="p-8">
            <img
              src="./logo.png"
              alt="Chavda International Logo"
              width={200}
              height={50}
              className="mb-8"
            />
            <div className="relative mt-96 p-6">
              {/* Background with blur effect */}
              <div className="absolute inset-0 bg-black/40 rounded-lg backdrop-blur-sm z-0"></div>

              {/* Foreground content */}
              <div className="relative z-10">
                <div className="inline-block rounded-lg bg-green-500 px-4 py-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">👍</span>
                    <span>25 years of Procurement and Logistics</span>
                  </div>
                </div>
                <p className="mt-4 text-lg text-white">
                  Chavda International (Pty) Ltd., founded in 1999, embarked on
                  its journey as a dedicated supplier of mining equipment and
                  services, primarily catering to the needs of the African
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex w-full flex-col px-4 lg:w-1/2 lg:px-8 bg-gray-50">
        <div className="ml-auto mt-4">
          <p className="text-sm text-gray-600">
            have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mx-auto mt-16 w-full max-w-md">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">
              Welcome to Chavda International
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Getting started is easy
            </p>
          </div>

          <div className="mt-8">
            <Button
              variant={'secondary'}
              className="flex w-full h-11 items-center justify-center"
            >
              <RiGoogleFill className="mr-2 opacity-60" size={16} />
              Login with Google
            </Button>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

             <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Full Name"
                  className="bg-white text-black"
                  value={formData.fullName}
                  onChange={handleInputChange}
                   name="fullName"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white text-black"
                  value={formData.email}
                  onChange={handleInputChange}
                 name="email"
                />
              </div>
              <div className="relative">
                <input
                   type={showPassword ? "text" : "password"}
                   placeholder="Password"
                   className="bg-white text-black"
                   name="password"
                   value={formData.password}
                   onChange={handleInputChange}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  
                </Button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="bg-white text-black"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                
                </Button>
              </div>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 h-11"
                type="submit"
              >
                Create Account
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-600">
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
