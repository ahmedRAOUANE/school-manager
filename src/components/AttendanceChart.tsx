"use client";

import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// 2400
const data = [
    {
        name: "sun",
        presence: 2320,
        absence: 80,
    },
    {
        name: "mon",
        presence: 2360,
        absence: 40,
    },
    {
        name: "tus",
        presence: 2300,
        absence: 100,
    },
    {
        name: "wed",
        presence: 2380,
        absence: 20,
    },
    {
        name: "thu",
        presence: 2290,
        absence: 110,
    }
];

const AttendanceChart = () => {
    return (
        <div className="box column paper outline">
            <div className="box full-width flex-0">
                <h2 className="disable-guitters">Attendance</h2>
                <button className="icon">
                    <BsThreeDotsVertical />
                </button>
            </div>
            <div className="full-width full-height">
                <ResponsiveContainer height={252}>
                    <BarChart
                        data={data}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis tickLine={false} axisLine={false} dataKey="name" />
                        <YAxis axisLine={false} tickLine={false}/>
                        <Tooltip />
                        <Legend align='left' verticalAlign='top' wrapperStyle={{ padding: "20px 10px" }} />
                        <Bar
                            dataKey="presence"
                            fill="#4a90e2"
                            legendType='circle'
                        />
                        <Bar
                            dataKey="absence"
                            fill="#ffc8b4"
                            legendType='circle'
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendanceChart