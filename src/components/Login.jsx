import pic from "../assets/insta.webp"
import  logo from "../assets/logo.png"
import Facebook from '../assets/facebook.png'
function login() {
    return(
        <>
        <div className="wrapper h-screen flex flex">
            <div className="left flex-1 bg-black h-full w-[60%] p-[40px]   ">
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
            <div className="right flex-1 bg-[#212121] h-full border-l-4 border-[#666666] p-[20px] flex flex-col items-center justify-center h-screen w-full">
                <p className="text-white mr-[20px] font-bold text-[20px] inline-block text-[30px]">Log into Instagram</p>
                <div className="form flex flex-col justify-center items-center  ">
                    <input type="text" placeholder="Mobile number,username or email" className=" h-[60px] w-[560px] rounded-[15px] m-5 p-[px] text-white text-center border border-gray-300" />
                    <input type="password" placeholder="Enter your password" className=" h-[60px] w-[560px] rounded-[15px] m-5 p-[px] text-white text-center border border-gray-300" />
                    <button className="h-[45px] w-[560px] bg-blue-700 m-5    rounded-[50px] text-white font-bold">Login</button>
                    <button className="text-white font-bold h-[45px] w-[560px] rounded-[50px] hover:bg-[#5c5c5c]">Forgetten Password</button>
                    <button className="flex items-center justify-center gap-3 text-white h-[45px] w-[560px] border-[#707070] border-2 rounded-[50px] hover:bg-[#5c5c5c] mt-[40px] transition-all">
                        <img src={Facebook} alt="logo" className="h-[40px] w-[40px] object-contain" />
                        <span className="text-center">Log in Facebook</span>
                    </button>
                    <button className="text-blue-500 font-medium border-2 mt-8    h-[45px] w-[560px] rounded-[50px] hover:bg-[#5c5c5c]">Create new accont </button>

                    


                </div>
               
            </div>
        </div>
        </>

    )
}


export default login