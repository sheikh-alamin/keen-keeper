import Link from "next/link";
import { FaChartBar, FaClock, FaHome } from "react-icons/fa";



const Navbar = () => {

    const links = <>
        <Link href="/" className="btn"><FaHome/> Home</Link>
        <a href="../timeline" className="btn"><FaClock/> Timeline</a>
        <a href="../stats" className="btn"><FaChartBar/> Stats</a>
    </>

    return (
        <div>
            <div className=" bg-base-100 shadow-sm">
                        <div className="navbar max-w-11/12 mx-auto">
                          <div className="navbar-start">
                            <Link href="/" className="btn btn-ghost text-xl font-bold text-[#244D3F] gap-0"><span className="text-[#1F2937]">Keen</span>Keeper</Link>
                          </div>
                          <div className="navbar-end gap-2">
                            {links} 
                          </div>
                        </div>
            </div>
        </div>
    );
};

export default Navbar;