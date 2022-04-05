import Areachart from '../Areachart/Areachart';
import Barchart from '../Barchart/Barchart';
import Charts from '../Charts/Charts';
import Pichart from '../PiChart/Pichart';
import './Dashboard.css'


const Dashboard = () => {
    return (
        <div className='dashboard'>

            <Charts></Charts>
            <Barchart></Barchart>
            <Areachart></Areachart>
            <Pichart></Pichart>

        </div>
    );
};

export default Dashboard;