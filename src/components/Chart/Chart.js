import './Chart.css';
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
  const totalMaximum = Math.max(...dataPoints.map(d => d.value));

  return (
    <div className='chart'>
      {dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
}

export default Chart;
