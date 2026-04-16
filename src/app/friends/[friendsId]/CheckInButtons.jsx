"use client"
import { FaPhoneAlt, FaVideo } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { useRouter } from "next/navigation"

const CheckInButtons = ({ friendName }) => {
    const router = useRouter()

    const handleCheckIn = (type) => {
        // localStorage থেকে আগের events গুলো নাও
        const events = JSON.parse(
            localStorage.getItem("timeline_events") || "[]"
        )

        // নতুন event বানাও
        const newEvent = {
            id: Date.now(),
            type,           // "Call" or "Text" or "Video"
            friendName,     // বন্ধুর নাম
            date: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
        }

        // নতুন event সবার আগে রাখো, তারপর পুরানোগুলো
        localStorage.setItem(
            "timeline_events",
            JSON.stringify([newEvent, ...events])
        )

        // Timeline পেজে চলে যাও
        router.push("/timeline")
    }

    return (
        <div className="p-5 shadow-md mt-5 rounded-lg">
            <h3 className="font-semibold">Quick Check-In</h3>
            <div className="grid grid-cols-3 my-4 gap-4">
                <button
                    onClick={() => handleCheckIn("Call")}
                    className="text-center cursor-pointer text-lg flex flex-col items-center justify-center space-y-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200"
                >
                    <FaPhoneAlt />
                    <h1>Call</h1>
                </button>
                <button
                    onClick={() => handleCheckIn("Text")}
                    className="text-center cursor-pointer text-lg flex flex-col items-center justify-center space-y-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200"
                >
                    <FaMessage />
                    <h1>Text</h1>
                </button>
                <button
                    onClick={() => handleCheckIn("Video")}
                    className="text-center cursor-pointer text-lg flex flex-col items-center justify-center space-y-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200"
                >
                    <FaVideo />
                    <h1>Video</h1>
                </button>
            </div>
        </div>
    )
}

export default CheckInButtons