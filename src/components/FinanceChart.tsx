"use client";

import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: "oct",
        income: 4000,
        expense: 2400,
    },
    {
        name: "nov",
        income: 3000,
        expense: 1398,
    },
    {
        name: "dec",
        income: 2000,
        expense: 9800,
    },
    {
        name: "jan",
        income: 2780,
        expense: 3908,
    },
    {
        name: "fub",
        income: 1890,
        expense: 4800,
    },
    {
        name: "mar",
        income: 2390,
        expense: 3800,
    },
    {
        name: "apri",
        income: 3490,
        expense: 4300,
    },
];

const FinanceChart = () => {
    return (
        <div className="box column paper outline full-width">
            <div className="box full-width flex-0">
                <h2 className="disable-guitters">Attendance</h2>
                <button className="icon">
                    <BsThreeDotsVertical />
                </button>
            </div>
            <div className="full-width full-height">
                <ResponsiveContainer height={300}>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis tickLine={false} axisLine={false} dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Legend align='center' verticalAlign='top' wrapperStyle={{ padding: "20px 10px" }} />
                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#4a90e2"
                            strokeWidth={2}
                        />
                        <Line type="monotone" dataKey="income" stroke="#ffc8b4" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart