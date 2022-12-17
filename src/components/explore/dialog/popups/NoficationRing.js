import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Overlay from "react-bootstrap/Overlay";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import bell from "../../../../assets/images/bell.png";

function NotificationRing() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
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

  return (
    <div className="" style={{ position: "" }}>
      <div
        onClick={handleClick}
        ref={target}
        className={
          width > breakpoint ? "icon-wrapper-15" : "icon-wrapper-15-mobile"
        }
      >
        <img src={bell} alt="" width="12vw" height="12vh" />
      </div>
      {show && (
        <Overlay target={target.current} show={show} placement="bottom-end">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              className="notification_dialog_wrapper"
              {...props}
              style={{
                position: "absolute",
                backgroundColor: "white",
                padding: "2px 10px",
                color: "white",
                borderRadius: 3,
                ...props.style,
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ margin: "0.5vw" }}>
                  <p className="fs-13" style={{ color: "black" }}>
                    notification per email
                  </p>
                  <InputGroup>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="basic-url"
                    />
                  </InputGroup>
                </div>
                <div style={{ margin: "0.5vw" }}>
                  <p className="fs-13" style={{ color: "black" }}>
                    notification per whatsapp
                  </p>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <Button className="notification_dialog_btn">Valider</Button>{" "}
            </div>
          )}
        </Overlay>
      )}
    </div>
  );
}

export default NotificationRing;
