"use client";

import { BsThreeDotsVertical } from "react-icons/bs";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
    {
        name: 'all',
        count: 2400,
        fill: '#fff',
    },
    {
        name: 'girls',
        count: 1240,
        fill: '#ffc8b4',
    },
    {
        name: 'boys',
        count: 1160,
        fill: '#4a90e2',
    }
];

const CountChart = () => {
    return (
        <div className="box column paper outline">
            <div className="box full-width flex-0">
                <h2 className="disable-guitters">Students</h2>
                <button className="icon">
                    <BsThreeDotsVertical />
                </button>
            </div>
            <div className="full-width">
                <ResponsiveContainer height={200} width={200}>
                    <RadialBarChart
                        width={500}
                        height={300}
                        cx="50%"
                        cy="50%"
                        innerRadius="30%"
                        outerRadius="60%"
                        barSize={10}
                        data={data}
                    >
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className="box center-x">
                <div className="box small outline small-gap">
                    <span className="color paper outline" style={{ padding: "10px", backgroundColor: "var(--link-color)" }}></span>
                    <small>boys</small>
                </div>
                <div className="box small outline small-gap">
                    <span className="color paper outline" style={{ padding: "10px", backgroundColor: "var(--accent-color)" }}></span>
                    <small>girls</small>
                </div>
            </div>
        </div>
    );
}

export default CountChart

