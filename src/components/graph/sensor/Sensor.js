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
import { slideinMotion } from "../sidebar/Click";
import { sensorAction } from "../../../store/actions/sensorAction";
import { connect, useDispatch } from "react-redux";
import {
  sensorAnimate,
  buttonSlideDownRotateAnimate,
} from "../../../helper/functions";
import {
  sensorSlideDownMotion,
  buttonSlideDownRotateMotion,
} from "../sidebar/Click";
import { SELECTED_GRAPH } from "../../../store/types";
import arrow from "../../../assets/images/chevron-left.png";

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
      <div
        className={
          !slideIn && !sensorCollaspe
            ? "reportHeadingSensorChild"
            : "reportHeadingSensor"
        }
      >
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
              <img src={arrow} alt="" />
            </motion.div>
          </button>
        </div>
      </div>
      <div
        style={{
          flexDirection: !slideIn && !sensorCollaspe ? "column" : "row",
          gap: !slideIn && !sensorCollaspe ? "2vh" : "",
          width: !slideIn && !sensorCollaspe ? "20vw" : "70vw",
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
          className="overlybutton"
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
  return <Line options={options} data={data} />;
}

const mapStateToProps = (state) => ({
  sensorCollaspe: state.sensor.sensorCollaspe,
  slideIn: state.slidein.slideIn,
});

export default connect(mapStateToProps, {
  sensorAction,
})(Sensor);
