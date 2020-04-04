import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend
} from "recharts";
import styled from "styled-components";
import ChartHarian from "./ChartHarian";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 }
];

export default function Chart() {
  const [data, setData] = useState([]);

  async function getDataFromApi() {
    const response = await fetch(
      "https://indonesia-covid-19.mathdro.id/api/provinsi"
    );
    const json = await response.json();
    console.log("ini data kita:", json);
    setData(
      json.data.map(({ provinsi, ...rest }) => ({ ...rest, name: provinsi }))
    );
  }

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div style={{ marginTop: "4em" }}>
      <div className="container">
        {/* <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart
            data={data}
            width={500}
            height={300}
            style={{ marginBottom: 100 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-45} dx={0} dy={20} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              type="monotone"
              stackId="a"
              dataKey="kasusPosi"
              fill="#400082"
            />
            <Bar
              type="monotone"
              stackId="a"
              dataKey="kasusSemb"
              fill="#00bdaa"
            />
            <Bar
              type="monotone"
              stackId="a"
              dataKey="kasusMeni"
              fill="#fe346e"
            />
          </BarChart>
        </ResponsiveContainer> */}
        <ChartHarian></ChartHarian>
      </div>
    </div>
  );
}
