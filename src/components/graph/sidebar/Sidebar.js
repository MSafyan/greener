import React from "react";
import CalendarGrid from "./CalendarGrid";
import TrackingCard from "./TrackingCard";
import LatestReport from "./LatestReport";
import Button from "./Button";
import "./Sidebar.css";
import { motion } from "framer-motion";
import { slideinMotion } from "./SideBarClick";
import { slideinAction } from "../../../store/actions/slideinAction";
import { connect } from "react-redux";

const Sidebar = ({ slideIn, slideinAction }) => {
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
        <div
          style={{
            position: "absolute",
            bottom: 150,
            right: -50,
            backgroundColor: "pink",
            zIndex: "1000",
          }}
        >
          <motion.button
            className="button"
            onClick={() => {
              slideinAction();
            }}
            style={{ opacity: 1, display: "block" }}
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
    </>
  );
};

const mapStateToProps = (state) => ({
  slideIn: state.slidein.slideIn,
});

export default connect(mapStateToProps, {
  slideinAction,
})(Sidebar);
