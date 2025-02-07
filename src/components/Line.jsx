import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Title, Tooltip} from 'chart.js'
import { lineChartData } from './Fake_data';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

export const LineGraph = () =>{
    const options = {}

    return <>
    <div style={{height:"200px",width:"400px"}}>
    <Line  data={lineChartData} ></Line> 
    </div>
    </>
}