import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useChartData from '../../hooks/useChartData';
import './Charts.css'

const Charts = () => {
    // const { month, investment, sell, revenue } = chart;
    const [charts, setCharts] = useChartData();
    return (
        <div className='charts'>
            <LineChart width={700} height={250} data={charts}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
            <h2>Line Chart</h2>
        </div>


    );
};

export default Charts;