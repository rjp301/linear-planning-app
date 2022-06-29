import React from "react";
import * as d3 from "d3";
import LineChart from "./LineChart";
import { useState } from "react";
import { useEffect } from "react";

export default function ElevationPlot(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv("http://localhost:8080/projects/elevation_profile_reduced.csv").then(
      (dataset) => {
        setData(dataset);
        console.log("dataset queried")
      }
    );
  }, []);

  const options = {
    x: (d) => d.chainage * 1,
    y: (d) => d.elevation * 1,
    xType: d3.scaleLinear,
    color: "red",
    yLabel: "↑ Elevation (m)",
    // width: bounds.width,
    height: 200,
  };

  return (
    <LineChart
      svgProps={{
        margin: { top: 80, bottom: 80, left: 80, right: 80 },
        width: 600,
        height: 400,
      }}
      axisProps={{
        xLabel: "X Axis",
        yLabel: "Y Axis",
      }}
      data={data}
      pointWidth={4}
    />
  );
}
