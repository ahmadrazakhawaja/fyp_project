import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ExamSettings(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [alert, setalert] = useState(null);

  const alerting = () => {
    setalert(null);
  };

  const alert2 = () => {
    if (alert) {
      return (
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
          }}
          className="alert alert-primary"
          role="alert"
        >
          {alert}
          <svg
            style={{ position: "absolute", right: "2%" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            onClick={alerting}
            height="16"
            fill="currentColor"
            className="bi bi-x-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      );
    }
    return null;
  };

  const onSubmit = (data, event) => {
    console.log(data);
    navigate("/userpage/socket");
    fetch("http://127.0.0.1:5000/routes/createroom", {
      method: "POST",
      headers: new Headers({ "content-Type": "application/json" }),
      mode: "cors",
      body: JSON.stringify({
        facial_detection: data["facial-detection"],
        audio_detection: data["audio-detection"],
        browser_tracking: data["browser"],
        candidate_limit: data["candidate-limit"],
        time_limit: data["time-limit"],
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json.header.message);
        // if (json.header.message === "User Made") {
        //   // localStorage.setItem("user-info", JSON.stringify(json.data));
        //   // props.setLogIn(localStorage.getItem("user-info"));
        //   // navigate("/login");
        //   setsubmit(true);
        // } else {
        // setsubmit({
        //   submit: true,
        //   redirect: false,
        // });
        setalert(json.header.message);
        // }
      });
  };

  return (
    <div>
      <div className="mt-3">
        <h1 style={{ textAlign: "center" }}>Exam Settings</h1>
      </div>
      <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>
        <div className="container">
          <div className="row mt-5">
            <div className="form-check form-switch col-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                {...register("facial-detection")}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Facial Detection
              </label>
            </div>
            <div className="form-check form-switch col-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                {...register("audio-detection")}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Audio Detection
              </label>
            </div>
            <div className="form-check form-switch col-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                {...register("browser")}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Browser Tracking
              </label>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6 text-center">
              <div className="mx-auto" style={{ width: "50%" }}>
                <input
                  type="number"
                  className="form-control"
                  id="candidate-limit"
                  // value={value}
                  // onChange={(event) => onChange(props.element, event)}
                  aria-describedby="Room-id"
                  placeholder="Enter candidate limit"
                  {...register("candidate-limit", {
                    required: {
                      value: true,
                      message: "candidate limit is Required",
                    },
                  })}
                />
                {errors["candidate-limit"] && errors["candidate-limit"].message}
              </div>
            </div>
            <div className="col-6 text-center">
              <h5>Exam End Time: </h5>
              <div className="mx-auto" style={{ width: "50%" }}>
                <input
                  type="time"
                  className="form-control"
                  id="time-limit"
                  // value={value}
                  // onChange={(event) => onChange(props.element, event)}
                  aria-describedby="Room-id"
                  placeholder="Enter Room-id"
                  {...register("time-limit", {
                    required: {
                      value: true,
                      message: "time limit is Required",
                    },
                  })}
                />
                {errors["time-limit"] && errors["time-limit"].message}
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <input
                type="submit"
                className="btn btn-primary mt-3"
                style={{ width: "25%", marginBottom: "100px" }}
                value="Create Exam"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}