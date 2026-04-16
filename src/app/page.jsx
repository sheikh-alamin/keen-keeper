import { FaPlus } from "react-icons/fa";
import FriendsPage from "./friends/page";


const page = () => {
    return (
        <div>
            <div className="text-center space-y-4 my-10">
                <h1 className=" text-[48px] font-bold">Friends to keep close in your life</h1>
                <p className="font-light">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="btn bg-[#244D3F] text-white"> <FaPlus></FaPlus> Add a friend</button>
            </div>
            <div className="grid grid-cols-4 max-w-9/12 mx-auto gap-8 mb-10">
                <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                    <h3 className="font-bold text-8 text-[#244D3f]">50</h3>
                    <p>Total Friends</p>
                </div>
                <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                    <h3 className="font-bold text-8 text-[#244D3f]">3</h3>
                    <p>On Track</p>
                </div>
                <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                    <h3 className="font-bold text-8 text-[#244D3f]">6</h3>
                    <p>Need Attention</p>
                </div>
                <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                    <h3 className="font-bold text-8 text-[#244D3f]">12</h3>
                    <p>Interaction This Month</p>
                </div>
            </div>
            <div className="border-t max-w-8/12 mx-auto border-[#E9E9E9] flex justify-between my-10"></div>
            <div><h1 className="max-w-8/12 mx-auto mb-10 font-bold text-6">Your Friends</h1></div>
            <FriendsPage/>
        </div>
        
    );
};

export default page;