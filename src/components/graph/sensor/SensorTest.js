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

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const Sensor = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      className="sensorWrapper"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sideVariants}
    >
      <div className="reportHeadingSensor">
        <div className="icon-wrapper-20">
          <img src={chartsensor} alt="" height="50%" />
        </div>
        <div>
          <p>Sensors</p>
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="button"
          >
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>
      <motion.div className="sensors" variants={itemVariants}>
        {ActivityData.sensors.map((_, i) => {
          return <SensorCard _={_} />;
        })}
      </motion.div>
    </motion.div>
  );
};

const SensorCard = ({ _ }) => {
  return (
    <div className="sensor">
      <div className="sensorCard">
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
      <div style={{ backgroundColor: "#E6E6E6" }}>
        <Chart chartData={_.data} />
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

export default Sensor;
