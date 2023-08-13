

const Login = () => {
    return (
        <form>
            <h1 className="font-bold text-3xl my-10 text-center">Sign In Your Account</h1>
 <div className="w-2/5 mx-auto my-3">
 <h1 className="text-lg font-semibold text-sky-500 ms-2 ">Email Address</h1>
 <input className="border py-2 px-4 w-full rounded-lg focus:border-sky-800  " type="email" placeholder="Enter Email Address" name="" id="" />
 
 </div>
 <div className="w-2/5 mx-auto">
 <h1 className="text-lg font-semibold  text-sky-500 ms-2">Password</h1>
 <input className="border py-2 px-4 w-full rounded-lg focus:border-sky-800  " type="email" placeholder="Enter Password" name="" id="" />
 
 </div>
 <div className="w-2/5 mx-auto">
    <input className="btn bg-pink-400 w-full py-2 mt-4 rounded-2xl " type="submit" value="Login" />
 </div>
            
          
        </form>
    );
};

export default Login;