import React from "react";
import CalendarGrid from "./CalendarGrid";
import TrackingCard from "./TrackingCard";
import LatestReport from "./LatestReport";
import Button from "./Button";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <CalendarGrid />
      <TrackingCard />
      <LatestReport />
      <Button />
    </div>
  );
};

export default Sidebar;
