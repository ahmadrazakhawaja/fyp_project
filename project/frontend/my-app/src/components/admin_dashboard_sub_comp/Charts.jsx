import React from "react";
import ".//Charts.css";

export default function Charts(params) {
return (
    <div className="row justify-content-center">
        <div className="col-4">
            <div className="white-box analytics-info">
                <h3 className="box-title">Candidates</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        {/* <div id="sparklinedash"><canvas width="67" height="30"
                                style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas>
                        </div> */}
                        <div id= "sparklinedash"><img src = "/Charts.png" width="67" height="30" 
                        style={{display: "inline-block", width : 67, height :35, verticalAlign : "top"}}></img> </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-success">20</span></li>
                </ul>
            </div>
        </div>
        <div className="col-sm">
            <div className="white-box analytics-info">
                <h3 className="box-title">Live Cheating Count</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        {/* <div id="sparklinedash2"><canvas width="67" height="30"
                             style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas>
                        </div> */}
                        <div id= "sparklinedash2"><img src = "/Graph.png" width="67" height="30"
                        style={{display: "inline-block", width : 35, height :35, verticalAlign : "top"}}></img> </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-purple">0</span></li>
                </ul>
            </div>
        </div>
        <div className="col-sm">
            <div className="white-box analytics-info">
                <h3 className="box-title">Class Cheating Rating</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                    <div id= "sparklinedash3"><img src = "/Gauge.png" width="67" height="30" 
                        style={{display: "inline-block", width : 35, height :35, verticalAlign : "top"}}></img> </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-info">High</span></li>
                </ul>
            </div>
        </div>
        <div className="col-sm">
            <div className="white-box analytics-info">
                <h3 className="box-title">Last Cheating Candidate</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li className="mx-auto"><span className="counter text-purple">Ahmad Raza</span></li>
                </ul>
            </div>
        </div>
    </div>);
}


