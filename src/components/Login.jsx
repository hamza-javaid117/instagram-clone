import pic from "../assets/insta.webp"
import  logo from "../assets/logo.png"
import Facebook from '../assets/facebook.png'
function login() {
    return(
        <>
        <div className="wrapper h-screen flex flex">
            <div className="left flex-1 bg-black h-full lg:w-[60%] w-[30%] p-[40px] sm:block hidden ">
                <img src={logo} alt="logo" className="h-[150px] w-[150px] object-contain" />
                <div className="text">
                    <span className="text-white  font-medium text-[35px] m-20">See everyday moments from your</span>
                <br />
                <p className=" text-center text-[35px]  bg-linear-to-r from-[#FF5100] via-[#C757C0] to-[#D93240] bg-clip-text text-transparent ">Close Friends</p>
                </div>
                <div className="img flex justify-center">
                    <img src={pic} alt="img"  className="h-[400px] w-[400px] object-contain "/>
                </div>

            </div>  
            <div className="right flex-1 bg-[#212121] h-full border-l-4 border-[#666666] p-[20px] flex flex-col items-center justify-center h-screen w-full ">
                <p className="text-white mr-[20px] font-bold text-[20px] inline-block text-[30px]">Log into Instagram</p>
                <div className="form flex flex-col justify-center items-center  ">
                    <input type="text" aria-label="Email or username" placeholder="Mobile number,username or email" className=" h-[42px] w-[85vw] sm:h-[45px] sm:w-[560px] rounded-[15px] m-5 p-[px] text-white text-center border border-gray-300" />
                    <input type="password" aria-label="Password" placeholder="Enter your password" className=" h-[42px] w-[85vw] rounded-[15px] m-5 p-[px] text-white text-center border border-gray-300 sm:h-[45px] sm:w-[560px]" />
                      <Link to="/forget">
                           <button className="h-[42px] w-[85vw] bg-blue-700 m-5    rounded-[50px] text-white font-bold sm:h-[45px] sm:w-[560px]">Login</button>
                       </Link>
                    <button className="text-white font-bold h-[42px] w-[85vw] rounded-[50px] hover:bg-[#5c5c5c] sm:h-[38px] sm:w-[430px] ">Forgetten Password</button>
                    <button className="flex items-center justify-center gap-3 text-white h-[40px] w-[85vw] border-[#707070] border-2 rounded-[50px] hover:bg-[#5c5c5c] mt-[40px] transition-all sm:h-[45px] sm:w-[560px]">
                        <img src={Facebook} alt="logo" className="h-[40px] w-[40px] object-contain" />
                        <span className="text-center">Log in Facebook</span>
                    </button>
                    <button className="text-blue-500 font-medium border-2 mt-8 h-[38px] w-[85vw] rounded-[50px] hover:bg-[#5c5c5c] sm:h-[45px] sm:w-[560px] ">Create new accont </button>
                </div>
            </div>
        </div>
        <footer className="bg-black border-t-4 border-[#666666] h-[150px] "> 
                <div className="links text-[#8f9090] flex flex-wrap gap-x-4 gap-y-2   text-[13px] mt-10 px-4 justify-center ">
                 <a className="hover:underline" href="#">Meta</a>
                 <a className="hover:underline" href="#">About</a>
                 <a className="hover:underline" href="#">Blog</a>
                 <a className="hover:underline" href="#">Jobs</a>
                 <a className="hover:underline" href="#">Help</a>
                 <a className="hover:underline" href="#">API</a>
                 <a className="hover:underline" href="#">Privacy</a>
                 <a className="hover:underline" href="#">Terms</a>
                 <a className="hover:underline" href="#">Locations</a>
                 <a className="hover:underline" href="#">Popular</a>
                 <a className="hover:underline" href="#">Instagram Lite</a>
                 <a className="hover:underline" href="#">Meta AI</a>
                 <a className="hover:underline" href="#">Threads</a>
                 <a className="hover:underline" href="#">Contact uploading and non-users</a>
                 <a className="hover:underline" href="#">Meta Verified</a>
                </div>
                <div className=" text-[#8f9090] flex justify-center m-4 ">
                    <span className="mr-7 hover:underline">English (UK)</span>
                    <span className="hover:underline ">© 2026 Instagram from Meta</span>
                </div>
               </footer>
        </>

    )
}


export default login