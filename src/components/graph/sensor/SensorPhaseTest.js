import React from "react";
import { motion } from "framer-motion";
import { phaseAction } from "../../../store/actions/dashboardAction";
import { connect } from "react-redux";
import wave from "../../../assets/images/wave.png";
import {
  phaseMotion,
  itemsMotion,
  phaseRing1Motion,
  phaseItemMotion,
} from "../../../helper/framermotion/phaseClick";
import { phaseColorBar } from "../../../data/colors";
import { Animate } from "../../../helper/functions";

const Phase = ({ phaseAction, phaseOpen, phase, ringsForward }) => {
  return (
    <motion.div
      variants={phaseMotion}
      animate={Animate}
      className="phase_div status-card bg-card"
      onClick={() => {
        phaseAction();
      }}
    >
      {/* <motion.div
        variants={phaseRing1Motion}
        animate={phaseOpen || ringsForward ? "phaseOpened" : "initial"}
        className="phase_ring"
      >
        <img src={wave} alt="" width="100%" height="100%" />
      </motion.div> */}

      <div className="phase_inner_div">
        <div className="fs-20 lc">
          <span className="fs-30 px-1">20</span>
          Expéditions confirmées
        </div>
        <div className="progress phaseProgress">
          {phase?.map((_, i) => (
            <div
              key={i}
              className="progress-bar"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: `${_.value}px`,
                backgroundColor: `${phaseColorBar[i % 5]}`,
              }}
            ></div>
          ))}
        </div>
        <Items columnData={phase} phaseOpen={phaseOpen} />
        <i className="fas fa-chevron-down" variant="solid"></i>
      </div>
    </motion.div>
  );
};

const Items = ({ columnData = [] }) => {
  return (
    <motion.div
      variants={itemsMotion}
      animate={Animate}
      className="item_wrapper_phase px-1"
    >
      {columnData?.map((_, i) => {
        return (
          <motion.div
            variants={phaseItemMotion}
            whileHover="hover"
            initial="initial"
            key={i}
            className="fs-20 sc d-flex justify-content-between"
          >
            <div className="d-flex align-items-center">
              <span
                className="color-bar"
                style={{ backgroundColor: `${phaseColorBar[i % 5]}` }}
              />
              <span className="fs-20 px-1">{_.title.substring(0, 10)}</span>
            </div>
            <span className="fs-20 px-2">
              {_.value} ({_.percentage} %)
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  phaseOpen: state.dashboard.phaseOpen,
  ringsForward: state.dashboard.ringsForward,
  phase: state.dashboard.dashboardFilter?.filters?.phase.phase,
});

export default connect(mapStateToProps, {
  phaseAction,
})(Phase);
