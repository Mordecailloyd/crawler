import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import react from 'react';
render(){
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
}

<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
    label={<CustomBarLabel />}/>
</BarChart>
