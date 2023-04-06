import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValue = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart"
      {props.dataPoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label
  }
          value={datapoints.value}
          maxValue={totalMaximum}
          label={datapoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
