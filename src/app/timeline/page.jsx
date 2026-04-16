"use client"
import { useEffect, useState } from "react"

const iconMap = {
    Call: "🤝",
    Text: "💬",
    Video: "📹",
}

const TimelinePage = () => {
    const [events, setEvents] = useState([])
    const [filter, setFilter] = useState("All")

    useEffect(() => {
        // পেজ লোড হলে localStorage থেকে events নাও
        const stored = JSON.parse(
            localStorage.getItem("timeline_events") || "[]"
        )
        setEvents(stored)
    }, [])

    // Filter করা events
    const filteredEvents = filter === "All"
        ? events
        : events.filter(event => event.type === filter)

    return (
        <div className="max-w-4xl mx-auto my-16 px-6">
            <h1 className="text-4xl font-bold mb-8">Timeline</h1>

            {/* Filter Dropdown */}
            <div className="mb-6">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-2 text-gray-500 bg-white w-56 focus:outline-none"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            {/* Events List */}
            {filteredEvents.length === 0 ? (
                <p className="text-gray-400 mt-10">
                    কোনো check-in নেই। বন্ধুর পেজে গিয়ে Call, Text বা Video তে ক্লিক করো!
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {filteredEvents.map(event => (
                        <div
                            key={event.id}
                            className="flex items-center gap-5 px-6 py-5 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="text-3xl w-10 flex items-center justify-center">
                                {iconMap[event.type]}
                            </div>
                            <div>
                                <p className="text-base">
                                    <span className="font-bold">{event.type}</span>
                                    <span className="text-gray-500"> with {event.friendName}</span>
                                </p>
                                <p className="text-sm text-gray-400">{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TimelinePage