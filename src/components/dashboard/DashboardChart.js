import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

const DashboardChart = props => {
  let { tagHashes } = props;
  tagHashes = tagHashes.slice(0, 10);
  let chartLabels = [];
  let chartData = [];
  for (let i = 0; i < tagHashes.length; i++) {
    chartLabels.push(tagHashes[i].name);
    chartData.push(tagHashes[i].count);
  }

  let data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Posts",
        data: chartData
      }
    ]
  };
  return <Bar data={data} />;
};

export default DashboardChart;
