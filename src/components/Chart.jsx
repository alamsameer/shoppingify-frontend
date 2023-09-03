import React, { useEffect, useState } from 'react';
import { getCategoryWithinTimeIntervalAsync } from '../store/statistic.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import DateSelector from './DateSelector.jsx';

export function Chart() {
  const { categoryWithinTimeInterval } = useSelector((state) => state.statistic);
  const [chartData, setChartData] = useState([]);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const startDate = '2023-8-26';
    const endDate = '2023-8-30';
    dispatch(getCategoryWithinTimeIntervalAsync({ startDate, endDate }));
  }, []);

  useEffect(() => {
    console.log("categoryWithinTimeInterval",categoryWithinTimeInterval);
    setChartData(categoryWithinTimeInterval);
  }, [categoryWithinTimeInterval]);

  useEffect(() => {
    if (startDate && endDate) {
      fetchCategoryData(startDate, endDate);
    }
  }, [startDate, endDate]);


  const fetchCategoryData = (start, end) => {
    console.log("start, end",start, end);
    const startDateString = start.toISOString().split('T')[0];
    const endDateString = end.toISOString().split('T')[0];
    dispatch(getCategoryWithinTimeIntervalAsync({ startDate: startDateString, endDate: endDateString }));
  };
  const chartWidth = window.innerWidth >= 700 ? 1000 : 400; // Adjust breakpoint and width as needed

  return (
    <div >
      <div className='flex'>
      <DateSelector
      date={startDate}
      setDate={setStartDate}
      placeholder={"choose start Date"}
      />
      <DateSelector
      date={endDate}
      setDate={setEndDate}
      placeholder={"choose End Date"}
      />
      </div>
    <LineChart
      width={chartWidth}
      height={300} // Fixed height
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id"tick={false}  angle={-45} textAnchor="end" interval={1} />
      <YAxis tick={{ fontSize: 16 }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="totalQuantity"
        name="Caregories"
        stroke="rgb(255, 99, 132)"
        fill="rgba(255, 99, 132, 0.5)"
      />
    </LineChart>
    </div>
  );
}
