import Barchart from '../Barchart/Barchart';
import Charts from '../Charts/Charts';
import './Dashboard.css'


const Dashboard = () => {
    return (
        <div className='dashboard'>

            <Charts></Charts>
            <Barchart></Barchart>

        </div>
    );
};

export default Dashboard;