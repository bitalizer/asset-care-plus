// import "./styles.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const data = [
  {
    name: "None",
    open: 20,
  },
  {
    name: "Medium",
    close: 80,
  },
];

export const BarChartComponent = () => {
  return (
    <BarChart
      width={650}
      height={590}
      data={data}
      margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="open" fill="#8884d8" />
      <Bar dataKey="close" fill="#82ca9d" />
    </BarChart>
  );
};
