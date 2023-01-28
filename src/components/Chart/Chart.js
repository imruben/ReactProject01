import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  let totalMaximum = 0;
  props.dataPoints.map((dataPoint) => (totalMaximum += dataPoint.value));
  // const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // const totalMaximum2 = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
