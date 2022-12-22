import React, { useState, useEffect } from "react";
import { chartSlideOutMotion } from "../sidebar/Click";
import { chartAnimate } from "../../../helper/functions";
import { ActivityData } from "../../../shippmentActivity";
import cross from "../../../assets/images/close.png";
import { useDispatch } from "react-redux";
import { SELECTED_GRAPH } from "../../../store/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import "../map/Map.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  plugins: {
    legend: false,
  },
  scales: {
    y: {
      display: true, // Hide Y axis labels
    },
    x: {
      display: true, // Hide X axis labels
    },
  },
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Chart({ data: original_data }) {
  console.log("this is working", original_data);
  const dispatch = useDispatch();
  const chartData = original_data.data;
  const displayData = original_data;
  const labels = chartData.dates.slice(0, 20);

  const data = {
    labels,
    datasets: [
      {
        data: chartData.values.slice(0, 20),
        borderColor: "#149ad7",
      },
    ],
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 500;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return (
      <motion.div
        variants={chartSlideOutMotion}
        animate={chartAnimate}
        className="mapWrapper"
      >
        <div className="d-flex">
          <div style={{ width: "95%" }}>
            <p className="displaynameheading">{displayData.name} Sensor</p>
          </div>
          <div>
            <img
              src={cross}
              alt=""
              onClick={() => {
                dispatch({ type: SELECTED_GRAPH });
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <p className="displayname">{displayData.name}</p>
          </div>
          <div className="p-2">
            <p className="displayterms">Min: {displayData.min} C</p>
          </div>
          <div className="p-2">
            {" "}
            <p className="displayterms">Max: {displayData.max} C </p>
          </div>
          <div className="p-2">
            {" "}
            <p className="displayterms">Average: {displayData.avg} C</p>
          </div>
        </div>
        <Line options={options} data={data} />;
      </motion.div>
    );
  } else {
    return (
      <div
        className="mapWrapper"
        style={{ width: "100vw", height: "50vh" }}
        id="chart"
      >
        <div className="d-flex">
          <div style={{ width: "95%" }}>
            <p className="displaynamemobile">{displayData.name} Sensor</p>
          </div>
          <div>
            <img
              src={cross}
              alt=""
              onClick={() => {
                dispatch({ type: SELECTED_GRAPH });
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {/* <div className="p-2">
            <p>{displayData.name}</p>
          </div> */}
          <div className="p-2">
            <p>Min: {displayData.min} C</p>
          </div>
          <div className="p-2">
            {" "}
            <p>Max: {displayData.max} C </p>
          </div>
          <div className="p-2">
            {" "}
            <p>Average: {displayData.avg} C</p>
          </div>
        </div>
        <Line options={options} data={data} />;
      </div>
    );
  }
}
