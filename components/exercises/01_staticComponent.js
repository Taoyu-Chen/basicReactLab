import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>Software System Parcise - Modules table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Enterprise Systems Architecture</td>
            <td>48</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Business Analytics</td>
            <td>24</td>
            <td>36</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};


export default Demo;
