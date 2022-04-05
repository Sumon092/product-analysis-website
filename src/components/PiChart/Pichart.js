import React from 'react';
import { Pie, PieChart } from 'recharts';
import useChartData from '../../hooks/useChartData';

const Pichart = () => {
    const [charts] = useChartData();
    return (
        <div className='charts'>
            <PieChart width={630} height={250}>
                <Pie data={charts} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" />
                <Pie data={charts} dataKey="value" nameKey="month" cx="50%" cy="50%" innerRadius={100} outerRadius={100} fill="#82ca9d" label />
            </PieChart>
            <h2>Pie Chart</h2>
        </div>
    );
};

export default Pichart;