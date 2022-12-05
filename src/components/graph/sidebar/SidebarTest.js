import React, { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import TrackingCard from "./TrackingCard";
import LatestReport from "./LatestReport";
import Button from "./Button";
import "./Sidebar.css";
import { motion } from "framer-motion";
import { slideinAction } from "../../../store/actions/slideinAction";
import { connect } from "react-redux";
import { grid } from "@mui/system";

const slideinMotion = {
  initial: {
    width: "25vw",
    x: 0,
    dispay: "grid",
  },
  hidden: {
    // opacity: 0,
    width: "0vw",
    display: "none",
    transition: {
      duration: 0.1,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const SidebarTest = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        className="sidebarWrapper"
        variants={slideinMotion}
        animate={isOpen ? "initial" : "hidden"}
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
          zIndex: "1000"
        }}
      >
        <motion.button
          className="button"
          onClick={() => setIsOpen(!isOpen)}
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
  );
};

export default SidebarTest;
