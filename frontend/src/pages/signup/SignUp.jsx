const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-100 mb-6">
          Sign Up <span className="text-blue-500">ChatApp</span>

        </h1>

        <form>

          {/* empty input field for the full name */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full input input-borderd h-10"/>
          </div>
          
          {/* empty input for username*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full input input-borderd h-10"/>
          </div>

          {/* empty inputs for password input*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Passord</span>
            </label>
            <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-full input input-borderd h-10"/>
          </div>

          {/* empty inputs for password confirmation*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full input input-borderd h-10"/>
          </div>

        </form> 

      </div>
    </div>
  )
}

export default SignUp