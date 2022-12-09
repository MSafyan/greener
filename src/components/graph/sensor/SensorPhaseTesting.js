import React, { useState } from "react";
import chartsensor from "../../../assets/images/bar-chart.png";
import "./Sensor.css";
import { ActivityData } from "../../../shippmentActivity";
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
import { motion, Variants } from "framer-motion";
import { phaseMotion } from "./SensorClick";
import { slideinMotion } from "../sidebar/SideBarClick";
import { sensorAction } from "../../../store/actions/sensorAction";
import { connect, useDispatch } from "react-redux";
import {
  sensorAnimate,
  buttonSlideDownRotateAnimate,
} from "../../../helper/functions";
import {
  sensorSlideDownMotion,
  buttonSlideDownRotateMotion,
} from "../sidebar/SideBarClick";
import { SELECTED_GRAPH } from "../../../store/types";

const Sensor = ({ slideIn, sensorCollaspe, sensorAction }) => {
  return (
    <motion.div
      className="sensorWrapper"
      style={{
        overflowY: !slideIn && !sensorCollaspe ? "scroll" : "hidden",
        height: !slideIn && !sensorCollaspe ? 990 : 300,
      }}
      variants={sensorSlideDownMotion}
      animate={sensorAnimate}
    >
      <div className="reportHeadingSensor">
        <div className="icon-wrapper-20">
          <img src={chartsensor} alt="" height="50%" />
        </div>
        <div>
          <p>Sensors</p>
        </div>
        <div>
          <button
            whileTap={{ scale: 0.97 }}
            className="button"
            onClick={() => {
              console.log("On CLick");
              sensorAction();
            }}
          >
            <motion.div
              variants={buttonSlideDownRotateMotion}
              animate={buttonSlideDownRotateAnimate}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </button>
        </div>
      </div>
      <div
        style={{
          flexDirection: !slideIn && !sensorCollaspe ? "column" : "row",
        }}
        className="sensors"
      >
        {ActivityData.sensors.map((_, i) => {
          return <SensorCard _={_} />;
        })}
      </div>
    </motion.div>
  );
};

const SensorCard = ({ _, selectedGraphAction }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="sensor"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="sensorCard"
        style={{
          backgroundColor: hover ? "#91C251" : "",
          borderStartEndRadius: hover ? 7 : "",
          borderStartStartRadius: hover ? 7 : "",
        }}
      >
        <p className="sensorHeading">{_.name}</p>
        <p className="sensorValue">11.06 C</p>
      </div>
      <div className="valueBar">
        <div>
          <p>Max :</p>
          <p>{_.max}</p>
        </div>
        <div>
          <p>Value Range : </p>
          <p>{Number(_.avg).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <Chart chartData={_.data} />
      </div>
      <div className="overlay">
        <button
          onClick={() => {
            dispatch({ type: SELECTED_GRAPH, payload: _ });
          }}
        >
          Open Graph
        </button>
      </div>
    </div>
  );
};

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
  legend: {
    display: false,
  },
  plugins: {
    legend: false,
  },
  scales: {
    y: {
      display: false, // Hide Y axis labels
    },
    x: {
      display: false, // Hide X axis labels
    },
  },
};

export function Chart({ chartData }) {
  const labels = chartData.dates.splice(0, 20);

  const data = {
    labels,
    datasets: [
      {
        data: chartData.values.splice(0, 20),
        borderColor: "#149ad7",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

const mapStateToProps = (state) => ({
  sensorCollaspe: state.sensor.sensorCollaspe,
  slideIn: state.slidein.slideIn,
});

export default connect(mapStateToProps, {
  sensorAction,
})(Sensor);
