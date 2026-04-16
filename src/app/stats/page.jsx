"use client"
import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const COLORS = {
    Text: "#7C3AED",  
    Call: "#244D3F",   
    Video: "#22C55E",  
}

const StatsPage = () => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const events = JSON.parse(
            localStorage.getItem("timeline_events") || "[]"
        )

       
        const counts = events.reduce((acc, event) => {
            acc[event.type] = (acc[event.type] || 0) + 1
            return acc
        }, {})

        
        const data = Object.entries(counts).map(([name, value]) => ({
            name,
            value
        }))

        setChartData(data)
    }, [])

    return (
        <div className="max-w-4xl mx-auto my-16 px-6">
            <h1 className="text-4xl font-bold mb-8">Friendship Analytics</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <p className="text-gray-500 mb-6">By Interaction Type</p>

                {chartData.length === 0 ? (
                    <p className="text-gray-400 text-center py-20">
                        No Data Available!
                    </p>
                ) : (
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}  
                                outerRadius={130}  
                                paddingAngle={4}  
                                dataKey="value"
                            >
                                {chartData.map((entry) => (
                                    <Cell
                                        key={entry.name}
                                        fill={COLORS[entry.name] || "#888"}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value, name) => [value, name]}
                            />
                            <Legend
                                iconType="circle"
                                iconSize={10}
                                formatter={(value) => (
                                    <span style={{ color: "#6B7280", fontSize: "14px" }}>
                                        {value}
                                    </span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    )
}

export default StatsPage