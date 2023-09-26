import { BsPersonCircle } from "react-icons/bs";
import HomeLayouts from "../Layouts/HomeLayouts";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createAccount } from "../Redux/Slice/AuthSlice";
import { isEmail } from "../Helper/RegexMatcher";

function SignUp(){
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const [previewImage, setPreviewImage]= useState('')

    const [signupData, setSignUpData]= useState({
        fullName: '',
        email: '',
        password: '',
        avatar:''

    })

    function handleUserInput(e){
        const {name, value} = e.target;
        setSignUpData({
            ...signupData,
            [name]:value
        })
    }
    
    function getImage(event){
        event.preventDefault();
        // getting the image
        const uploadImage= event.target.files[0];

        if(uploadImage){
            setSignUpData({
                ...signupData,
                avatar: uploadImage
            })
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage)
            fileReader.addEventListener('load', function(){
                setPreviewImage(this.result);
            })
        }
    }

  async function createNewAccount(event){
        event.preventDefault();
        if(!signupData.email || !signupData.password || !signupData.avatar || !signupData.fullName){
            toast.error('Please fill all the details')
            return;
        }

        // checking full length
        if(signupData.fullName.length < 5){
            toast.error('Name should be atleast of 5 character')
            return;
        }
        // checking valid emial
        if(!isEmail(signupData.email))
        {
            toast.error('Invalid Email credentials')
            return;
        }
        // checking valid password
        if(!isEmail(signupData.password)){
            toast.error('password should be 6-16 character long with atleast a special number and special character.');
            return;
        }
        const formData= new FormData();
        formData.append('fullName', signupData.fullName)
        formData.append('email', signupData.email)
        formData.append('password', signupData.password)
        formData.append('avatar', signupData.avatar)

        // dispatch  create account action
        const response= await dispatch(createAccount(formData));
        if(response?.payload?.success){
            navigate('/')
        }
        
        setSignUpData({
            fullName: '',
            email: '',
            password: '',
            avatar:''
        })
        setPreviewImage("")
    }
    return(
    <HomeLayouts>
        <div className="flex items-center justify-center h-[90vh]">
           <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
            <h1 className="text-center text-2xl font-bold">Registration Page</h1>

            <label htmlFor="image_uploads" className="cursor-pointer"> 
            {previewImage ?( 
                <img className="w-24 h-24 rounded-full m-auto" src={previewImage} /> ):
                (<BsPersonCircle className="w-24 h-24 rounded-full m-auto " />)}
            </label>

            <input 
                onChange={getImage}
                className="hidden"
                type="file"
                name="image_uploads"
                id="image_uploads"
                accept=".jpg, .jpeg, .png, .svg"
            />
            <div className="flex flex-col gap-1">
                <label htmlFor="fullName" className="font-semibold">Name</label>
                <input 
                    type="fullName"
                    required
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your fullName.."
                    className="bg-transparent px-2 py-1 border"
                    onChange={handleUserInput}
                    value={signupData.fullName}
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input 
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Enter your email.."
                    className="bg-transparent px-2 py-1 border"
                    onChange={handleUserInput}
                    value={signupData.email}
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
                    value={signupData.password}
                />
            </div>
            <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                Create account
            </button>
            <p className="text-center">Already have an account ? <Link to="/login" className="text-accent">Login</Link></p>
           </form> 
        </div>
    </HomeLayouts>
    )
}
export default SignUp;