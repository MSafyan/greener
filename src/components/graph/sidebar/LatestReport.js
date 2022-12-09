import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LatestReports from "../../../assets/images/clipboard-approve.png";
import "./Grid.css";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import location from "../../../assets/images/locationBlue.png";
import NotificationRing from "../../explore/dialog/popups/NoficationRing";
import audioPause from "../../../assets/images/audioPause.png";
import audioDots from "../../../assets/images/audioDots.png";
import trajet from "../../../assets/images/trajet.png";
import activity from "../../../assets/images/activity.png";
import incidents from "../../../assets/images/incidents.png";
import document from "../../../assets/images/document.png";
import msg from "../../../assets/images/msg.png";
import offer from "../../../assets/images/offer.png";
import dots from "../../../assets/images/dots_explore.png";
import report from "../../../assets/images/report.png";
import { motion } from "framer-motion";
import { cardMotion } from "../../../helper/framermotion/dialog/inserer";
import moment from "moment";

const OfferCard = ({ _, i }) => {
  return (
    <div key={i} className="card_body">
      <div>
        <p className="fs-16 lc">
          {_.message}
          <span className="dc font_500">{" " + _.price} $</span>
        </p>
        <div className="d-flex align-items-end">
          <StarRatings
            rating={_.rating}
            starRatedColor="#F59B21"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="1px"
            name="rating"
          />
          <p className="fs-16 lc pt-1">{"   " + _.ratesCount}</p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ _, i }) => {
  var upperText = _.message;
  var bottomText = _.creator;
  var showBottomText = true;
  var sideLabel = "";
  if (_.componentType === "trajet") {
    showBottomText = false;
    sideLabel = <NotificationRing />;
  }
  if (_.componentType === "document") {
    upperText = "Document";
    bottomText = _.message;
    sideLabel = <p className="fs-16 tc">Telecharger</p>;
  }
  if (_.componentType === "incidents") {
    sideLabel = <p className="fs-16 tc">incidents</p>;
  }

  if (_.componentType === "offer") {
    return <OfferCard _={_} i={i} />;
  }

  return (
    <div key={i} className="card_body">
      <div>
        {_.componentType === "msg_audio" ? (
          <>
            <div>
              <img src={audioPause} alt="" />
              <img src={audioDots} alt="" />
            </div>
          </>
        ) : (
          <p className="fs-16 font_500">{upperText}</p>
        )}

        {showBottomText && <p className="fs-16 lc">{bottomText}</p>}
      </div>
      {sideLabel}
    </div>
  );
};

const imgNameArr = {
  // trajet: clock,
  trajet: trajet,
  activity: activity,
  incidents: incidents,
  document: document,
  msg_text: msg,
  msg_audio: msg,
  offer: offer,
};

export const CardWrapper = ({ _, i, selectedComponentType, counter }) => {
  return (
    <div
      key={i}
      // variants={cardMotion}
      // initial="initial"
      className="body_chargement_explore chargement_rewrite"
    >
      <p
        className={`text-right ${false ? "fs-16" : "fs-13 lc"}`}
        style={{ gridArea: "date_card", paddingRight: 4 }}
      >
        {moment(_.dateTime).format("D/MM/YYYY HH:mm")}
      </p>
      <div className={`card_icons_explore transform3vh`}>
        <div className="icon-wrapper-20" style={{ gridArea: "icons_icon" }}>
          <img src={imgNameArr[_.componentType]} alt="" width="100%" />
        </div>

        <div className="dotted_border">
          <img src={dots} alt="" />
        </div>
      </div>
      <div className="body_card_explore" style={{ width: "12vw" }}>
        <Card _={_} i={i} />
      </div>
    </div>
  );
};

const LatestReport = ({ orderEvents, selectedComponentType, counter }) => {
  return (
    <>
      <div>
        <Container className="latest-report-container">
          <Row>
            <Col md={2} sm={2} xs={2}>
              <img src={LatestReports} alt="" height="60%" />
            </Col>
            <Col md={8} sm={8} xs={8}>
              <p>Latest Report</p>
            </Col>
          </Row>
        </Container>
        <div className="reportCardWrapper">
          {orderEvents?.slice(0, 3).map((_, i) => (
            <CardWrapper _={_} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  orderEvents: state.explore.orderEvents,
  counter: state.explore.counter,
  selectedComponentType: state.explore.selectedComponentType,
});

export default connect(mapStateToProps)(LatestReport);
