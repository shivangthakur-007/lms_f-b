import HomeLayouts from "../Layouts/HomeLayouts";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Slice/AuthSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

function  Login() {
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    });
    function handleUserInput(e){
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }

  async function onLogin(event){
        event.preventDefault();
        if(!loginData.email || !loginData.password ){
            toast.error('Please fill all the details')
            return;
        }
        const response= await dispatch(login(loginData))
            if(response?.payload?.success){
                navigate('/');
            }
            setLoginData({
                email: '',
                password: "",

            });

    }

    return(
    <HomeLayouts>
        <div className="flex items-center justify-center h-[90vh]">
           <form noValidate onSubmit={onLogin} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
            <h1 className="text-center text-2xl font-bold">Login Page</h1>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input 
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Enter your email.."
                    autoComplete="on"
                    className="bg-transparent px-2 py-1 border"
                    onChange={handleUserInput}
                    value={loginData.email}
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-semibold">Password</label>
                <input 
                    type="password"
                    required
                    name="password"
                    id="password"
                    placeholder="Enter your password.."
                    className="bg-transparent px-2 py-1 border"
                    onChange={handleUserInput}
                    value={loginData.password}
                    autoComplete="on"
                />
            </div>
            <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                Login
            </button>
            <p className="text-center">Create an account ? <Link to="/signup" className="text-accent">Signup</Link></p>
           </form> 
        </div>
    </HomeLayouts>
    )
    }
export default Login;