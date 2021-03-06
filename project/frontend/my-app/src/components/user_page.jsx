import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExamSettings from "./exam_settings";
import Alert from "./alert";
import "../user_page.css";
import { useForm } from "react-hook-form";

export default function UserPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [alert, setalert] = useState(null);
  const [userHistory, sethistory] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("user-info")) {
  //     navigate("/login");
  //   }
  // }, []);
  const data = JSON.parse(localStorage.getItem("user-info"));

  const examset = () => {
    navigate("/userpage/exam-settings");
  };

  useEffect(() => {
    const data2 = JSON.parse(localStorage.getItem("user-info"));
    const myHeaders = new Headers();
    myHeaders.append("content-Type", "application/json");
    myHeaders.append("authorization", `Bearer ${data2.token}`);
    console.log(data);
    fetch(process.env.REACT_APP_API_URL + "/roomRoutes/gethistory", {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json.header.message);
        if (json.header.code === 1) {
          if (json.data.RoomData) {
            console.log(json.data.RoomData);
            sethistory(json.data.RoomData);
          }
          // localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          // const room = JSON.parse(localStorage.getItem("room-info"));
          // navigate(`/userpage/Checking/:id`);
        } else {
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
          if ("Data not Available" !== json.header.message) {
            setalert(json.header.message);
          }
        }
        // }
      });
  }, []);

  const onSubmit = (data, event) => {
    const data2 = JSON.parse(localStorage.getItem("user-info"));
    const myHeaders = new Headers();
    myHeaders.append("content-Type", "application/json");
    myHeaders.append("authorization", `Bearer ${data2.token}`);
    console.log(data);
    fetch(process.env.REACT_APP_API_URL + "/roomRoutes/checkRoom", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      body: JSON.stringify({
        id: data["room-id"],
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json.header.message);
        if (json.header.code === 1) {
          localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          // localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          // const room = JSON.parse(localStorage.getItem("room-info"));
          // navigate(`/userpage/Checking/:id`);
          if (json.data.newRoom._id) {
            if (json.data.newRoom.admin === true) {
              navigate(`/userpage/exam-room/${json.data.newRoom._id}`);
            } else {
              navigate(
                `/userpage/exam-room/${json.data.newRoom._id}/candidate`
              );
              // navigate(`/userpage/exam-room/${json.data.newRoom._id}/candidate`);
            }
          } else {
            setalert("room not available");
          }
        } else if (json.header.code === 2) {
          localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          navigate(`/userpage/Checking/${json.data.newRoom._id}`);
        } else {
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
        }
        // }
      });
  };

  const JoinRoom = (id) => {
    const data2 = JSON.parse(localStorage.getItem("user-info"));
    const myHeaders = new Headers();
    myHeaders.append("content-Type", "application/json");
    myHeaders.append("authorization", `Bearer ${data2.token}`);
    console.log(data);
    fetch(process.env.REACT_APP_API_URL + "/roomRoutes/checkRoom", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json.header.message);
        if (json.header.code === 1) {
          localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          // localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          // const room = JSON.parse(localStorage.getItem("room-info"));

          if (json.data.newRoom._id) {
            if (json.data.newRoom.admin === true) {
              navigate(`/userpage/exam-room/${json.data.newRoom._id}`);
            } else {
              // navigate(`/userpage/Checking/${json.data.newRoom._id}`);
              navigate(
                `/userpage/exam-room/${json.data.newRoom._id}/candidate`
              );
            }
          } else {
            setalert("room not available");
          }
        } else if (json.header.code === 2) {
          localStorage.setItem("room-info", JSON.stringify(json.data.newRoom));
          navigate(`/userpage/Checking/${json.data.newRoom._id}`);
        } else {
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
        }
        // }
      });
  };

  return (
    <div className="container">
      {alert && <Alert alert={alert} setalert={setalert} />}
      <div className="row">
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          Welcome {data.first_name}
        </h1>
      </div>

      {/* <div className="user-grid" style={{ width: "100%",display : "grid",justifyContent : "center", alignContent :"center" }}> */}
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-6">
          <img
            src="user_page-01.svg"
            style={{ maxHeight: "400px" }}
            alt="Robot Image"
          />
        </div>
        <div className="col-6">
          <div
            id="create"
            className="text-center"
            style={{ marginTop: "10px" }}
          >
            <button
              onClick={examset}
              className="btn btn-primary"
              style={{ marginBottom: "5%" }}
            >
              Create Exam
            </button>
          </div>
          <h4 className="text-center mic-info" style={{ marginBottom: "5%" }}>
            OR
          </h4>
          <div id="join" className="text-center" style={{ marginTop: "10px" }}>
            <form
              onSubmit={handleSubmit((data, event) => onSubmit(data, event))}
              // style={{ width: "20%", marginLeft: "40%" }}
            >
              <div>
                <input
                  style={{ width: "50%", margin: "auto" }}
                  type="text"
                  className="form-control formy"
                  id="Room-id"
                  // value={value}
                  // onChange={(event) => onChange(props.element, event)}
                  aria-describedby="Room-id"
                  placeholder="Enter Room-id"
                  {...register("room-id", {
                    required: {
                      value: true,
                      message: "Room ID is required",
                    },
                    minLength: {
                      value: 24,
                      message: "Length should be of 24 digits",
                    },
                    maxLength: {
                      value: 24,
                      message: "Length should be of 24 digits",
                    },
                  })}
                />
                {errors["room-id"] && errors["room-id"].message}
              </div>

              <button className="btn btn-primary mt-3" type="submit">
                Join Exam
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2>
              <b>User History</b>
            </h2>
            <div className="table-responsive">
              <table className="table" style={{ marginBottom: "100px" }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">Time Started</th>
                    <th scope="col">Ended</th>
                  </tr>
                </thead>
                <tbody>
                  {userHistory.map((element) => (
                    <tr
                      key={element.id}
                      id="hov"
                      onClick={
                        !element.ended ? () => JoinRoom(element.roomid) : null
                      }
                    >
                      <th scope="row">{element.id}</th>
                      <td>{element.roomid}</td>
                      <td>
                        {element.timeStarted
                          .replace(/T/, " ")
                          .replace(/\..+/, "")}
                      </td>
                      <td>{element.ended.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
