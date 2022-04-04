import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const Barchart = () => {
    const [charts, setCharts] = useChartData();
    return (
        <div className='charts'>
            <BarChart width={730} height={250} data={charts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
            <h2>Bar Chart</h2>
        </div>
    );
};

export default Barchart;