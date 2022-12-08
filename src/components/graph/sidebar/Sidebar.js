import React from "react";
import CalendarGrid from "./CalendarGrid";
import TrackingCard from "./TrackingCard";
import LatestReport from "./NewReport";
import Button from "./Button";
import "./Sidebar.css";
import { motion } from "framer-motion";
import { slideinMotion } from "./SideBarClick";
import { slideinAction } from "../../../store/actions/slideinAction";
import { connect } from "react-redux";
import {
  buttonAnimate,
  buttonSlideInRotateAnimate,
} from "../../../helper/functions";
import {
  buttonDivSlideOutMotion,
  buttonRotateMotion,
} from "../sidebar/SideBarClick";
import { pink } from "@mui/material/colors";

const Sidebar = ({ slideIn, slideinAction, sensorCollaspe }) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <motion.div
          className="sidebarWrapper"
          variants={slideinMotion}
          animate={slideIn ? "initial" : "hidden"}
          initial={"initial"}
        >
          <CalendarGrid />
          <TrackingCard />
          <LatestReport />
          <Button />
        </motion.div>
        <motion.div
          style={{
            bottom: !slideIn && !sensorCollaspe ? 500 : 150,
            right: !slideIn && !sensorCollaspe ? "" : -50,
            left: !slideIn && !sensorCollaspe ? 400 : "",
            position: "absolute",
            // bottom: 150,
            // right: -50,
            zIndex: "1000",
          }}
          variants={buttonDivSlideOutMotion}
          animate={buttonAnimate}
        >
          <motion.button
            className="button"
            onClick={() => {
              slideinAction();
            }}
            style={{ opacity: 1, display: "block" }}
          >
            <motion.div
              variants={buttonRotateMotion}
              animate={buttonSlideInRotateAnimate}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  slideIn: state.slidein.slideIn,
  sensorCollaspe: state.sensor.sensorCollaspe,
});

export default connect(mapStateToProps, {
  slideinAction,
})(Sidebar);
