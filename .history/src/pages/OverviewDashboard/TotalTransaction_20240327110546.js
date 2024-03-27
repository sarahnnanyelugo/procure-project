import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

class TotalTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Correct", "Incorrect", "Unattempted"],
        color: ["#CECBCB", "#5044B2", "#3067D8"],

        fill: {
          type: "solid",
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value >= 45) {
                return "#CECBCB";
              } else if (value <= 45 && value > 17) {
                return "#4A13B2";
              } else if (value <= 17) {
                return "#2F67D8";
              }
            },
          ],
        },
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 500,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
      },
      events: {
        beforeMount: this.testEndAnimation("Mounting"),
        mounted: this.testEndAnimation("Mounted"),
      },
      redrawOnParentResize: false,
      series: [32, 17, 50],
    };
  }
  testEndAnimation(e) {
    console.log(e, new Date().getTime());
  }
  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default TotalTransaction;
