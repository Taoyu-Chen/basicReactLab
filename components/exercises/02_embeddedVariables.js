import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const course = "Software System Parcise - Modules table";
  const modules = [
    {
      name: "Enterprise Systems Architecture",
      noLectures: 48,
      noPracticals: 12
    },
    {
      name: "Business Analytics",
      noLectures: 24,
      noPracticals: 36
    }
  ]
  return (
      <div>
        <h2>{course}</h2>
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
              <td>{modules[0].name}</td>
              <td>{modules[0].noLectures}</td>
              <td>{modules[0].noPracticals}</td>
            </tr>
            <tr>
              <td>{modules[1].name}</td>
              <td>{modules[1].noLectures}</td>
              <td>{modules[1].noPracticals}</td>
            </tr>
          </tbody >
        </table>
      </div>
  );
};

export default Demo;
