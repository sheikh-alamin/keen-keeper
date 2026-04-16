import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
    return (
    <div className="mx-auto text-center py-10 space-y-4">
        <h1 className="text-[150px] font-extrabold text-[#244D3F]">404</h1>
        <h2 className="text-[20px] font-bold text-[#244D3F]">Page Not Found</h2>
        <p>Looks like this friendship link is broken. The page <br /> you are looking for does not exist or has been removed</p>
        <Link href="/"><button className="btn bg-[#244D3F] text-white"><FaHome/> Back to home</button></Link>
    </div>
    );
};

export default NotFoundPage;