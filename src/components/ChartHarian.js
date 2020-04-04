import React, { useState, useEffect, PureComponent } from "react";
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
import Moment from "react-moment";
import moment from "moment";

export default function ChartHarian() {
  const [data, setData] = useState([]);

  async function getDataFromApi() {
    const response = await fetch(
      "https://indonesia-covid-19.mathdro.id/api/harian"
    );
    const json = await response.json();
    console.log("ini data kita:", json);
    setData(
      json.data.map(({ tanggal, ...rest }) => ({
        ...rest,
        name: moment(tanggal).format("MMM-DD")
      }))
    );
  }
  useEffect(() => {
    getDataFromApi();
  }, []);

  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;

      return (
        <text
          x={x}
          y={y}
          dy={-4}
          fill={stroke}
          fontSize={10}
          textAnchor="middle"
        >
          {value}
        </text>
      );
    }
  }

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  return (
    <div>
      <h3>Kasus Harian</h3>
      <div className="card box-shadow">
        <ResponsiveContainer width="100%" aspect={3 / 2}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval="preserveStartEnd"
              height={60}
              tick={<CustomizedAxisTick />}
            />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="center" />
            <Line
              type="monotone"
              dataKey="jumlahKasusKumulatif"
              fill="#400082"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <br />
      <div className="card box-shadow">
        <ResponsiveContainer width="100%" aspect={3 / 2}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval="preserveStartEnd"
              height={60}
              tick={<CustomizedAxisTick />}
            />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="center" />
            <Bar
              type="monotone"
              dataKey="jumlahKasusBaruperHari"
              fill="#00bdaa"
            />
          </BarChart>
        </ResponsiveContainer>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
