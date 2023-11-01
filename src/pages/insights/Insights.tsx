import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  ResponsiveChartContainer,
  BarPlot,
  LinePlot,
  ChartsXAxis,
  ChartsYAxis,
  axisClasses,
} from "@mui/x-charts";
// import { Insights as InsightsIcon } from "@mui/icons-material";

const Insights = () => {
  // all_appoinments chart function
  const chartSetting_r = {
    yAxis: [
      {
        label: "# Rupees (x 1000)",
      },
    ],
    width: 900,
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };  
  const dataset_r = [
    {
      profit: 100,
      income: 186,
      expense: 86,
      month: "Jan",
    },
    {
      profit: 70,
      income: 86,
      expense: 16,
      month: "Feb",
    },
    {
      profit: 56,
      income: 86,
      expense: 30,
      month: "Mar",
    },
    {
      profit: 48,
      income: 68,
      expense: 20,
      month: "Apr",
    },
    {
      profit: 88,
      income: 93,
      expense: 5,
      month: "May",
    },
    {
      profit: 70,
      income: 96,
      expense: 26,
      month: "June",
    },
    {
      profit: 63,
      income: 104,
      expense: 41,
      month: "July",
    },
    {
      profit: 62,
      income: 91,
      expense: 29,
      month: "Aug",
    },
    {
      profit: 77,
      income: 96,
      expense: 19,
      month: "Sept",
    },
    {
      profit: 82,
      income: 112,
      expense: 30,
      month: "Oct",
    },
    {
      profit: 12,
      income: 25,
      expense: 13,
      month: "Nov",
    },
    
  ];
  // end of all_appoinments chart-----------

  // begin of appoinment chart---------
  const chartSetting_a = {
    yAxis: [
      {
        label: "# appoinment count",
      },
    ],
    width: 900,
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const dataset_a = [
    {
      successful_appoinments: 39,
      all_appoinments: 42,
      canceled_appoinments: 3,
      month: "Jan",
    },
    {
      successful_appoinments: 45,
      all_appoinments: 47,
      canceled_appoinments: 2,
      month: "Fev",
    },
    {
      successful_appoinments: 47,
      all_appoinments: 53,
      canceled_appoinments: 6,
      month: "Mar",
    },
    {
      successful_appoinments: 84,
      all_appoinments: 96,
      canceled_appoinments: 12,
      month: "Apr",
    },
    {
      successful_appoinments: 77,
      all_appoinments: 79,
      canceled_appoinments: 2,
      month: "May",
    },
    {
      successful_appoinments: 60,
      all_appoinments: 63,
      canceled_appoinments: 3,
      month: "June",
    },
    {
      successful_appoinments: 59,
      all_appoinments: 60,
      canceled_appoinments: 1,
      month: "July",
    },
    {
      successful_appoinments: 66,
      all_appoinments: 65,
      canceled_appoinments: 0,
      month: "Aug",
    },
    {
      successful_appoinments: 51,
      all_appoinments: 54,
      canceled_appoinments: 3,
      month: "Sept",
    },
    {
      successful_appoinments: 60,
      all_appoinments: 65,
      canceled_appoinments: 5,
      month: "Oct",
    },
    {
      successful_appoinments: 6,
      all_appoinments: 6,
      canceled_appoinments: 0,
      month: "Nov",
    },
  ];

  // end of appoinment chart------------

  // const valueFormatter = (value: number) => `${value}mm`;
  // valueFormatter for Rupees
  const valueFormatterRs = (valueRr: number) => `LKR ${valueRr}`;

  // valueFormatter for counts
  const valueFormatterMm = (valueMm: number) => `${valueMm}`;
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "25px",
      }}
    >
      <div
        style={{
          border: "2px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          boxShadow: "4px 4px 10px rgba(0, 0, 0.1, 0.3)",
          padding: "30px",
          margin: "15px",
          // display: "inline-block",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div id="employees-statictics-container">
          <h1 id="employees-statictics-header"
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#007BFF",
            }}
          >
            Employees Statistics for Today
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center"}}>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
              padding: "15px",
              margin: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "210px",
            }}
          >
            <h2 style={{ color: "#007BFF", textAlign: "center" }}>
              Available Employees Count
            </h2>
            <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>10</h1>
          </div>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
              padding: "15px",
              margin: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "210px",
            }}
          >
            <h2 style={{ color: "#007BFF", textAlign: "center" }}>
              Asigned Employees Count
            </h2>
            <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>5</h1>
          </div>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
              padding: "15px",
              margin: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "210px",
            }}
          >
            <h2 style={{ color: "#007BFF", textAlign: "center" }}>
              Absent Employees Count
            </h2>
            <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>4</h1>
          </div>
      }}
    >
      <div style={{display: "flex", flexDirection: "row"}}>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
            padding: "15px",
            margin: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "210px",
          }}
        >
          <h2 style={{ color: "#007BFF", textAlign: "center" }}>Available Employees Count</h2>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>10</h1>
        </div>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
            padding: "15px",
            margin: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "210px",
          }}
        >
          <h2 style={{ color: "#007BFF", textAlign: "center" }}>Absent Employees Count</h2>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>4</h1>
        </div>
      </div>
      <div
        style={{
          border: "2px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          boxShadow: "4px 4px 10px rgba(0, 0, 0.1, 0.3)",
          padding: "7px",
          margin: "15px",
          display: "inline-block",
        }}
      >
        <div id="all_appoinments-chart-container">
          <div
            id="all_appoinments-chart-topic"
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#007BFF",
            }}
          >

            <BarPlot />
            <LinePlot />
            <ChartsXAxis axisId="quarters" label="Dates" labelFontSize={18} />
            <ChartsYAxis axisId="quantities" label="# in Rupees" />

            {/* <ChartsYAxis axisId="money" position="right" label="revenue" /> */}
            <ChartsYAxis axisId="money" position="right" label="revenue" />
          </ResponsiveChartContainer>
        </Box>
            Revenue Chart
          </div>
          <div
            id="all_appoinments-chart-diagram"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Set the height to make it full-screen
            }}
          >
            <BarChart
              dataset={dataset_r} // Use the correct dataset name
              xAxis={[{ scaleType: "band", dataKey: "month" , label:"Month"}]}
              series={[
                {
                  dataKey: "profit",
                  label: "Profit",
                  valueFormatter: valueFormatterRs,
                },
                {
                  dataKey: "income",
                  label: "Income",
                  valueFormatter: valueFormatterRs,
                },
                {
                  dataKey: "expense",
                  label: "Expense",
                  valueFormatter: valueFormatterRs,
                },
              ]}
              {...chartSetting_r}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          border: "2px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          boxShadow: "4px 4px 10px rgba(0, 0, 0.1, 0.3)",
          padding: "7px",
          margin: "15px",
          display: "inline-block",
        }}
      >
        <div id="appoinment-chart-container">
          <div
            id="all_appoinments-chart-topic"
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#007BFF",
            }}
          >
            Appoinments Chart
          </div>
          <div
            id="all_appoinments-chart-diagram"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Set the height to make it full-screen
            }}
          >
            <BarChart
              dataset={dataset_a} // Use the correct dataset name
              xAxis={[{ scaleType: "band", dataKey: "month" , label:"Month"}]}
              series={[
                {
                  dataKey: "successful_appoinments",
                  label: "Successful Appointments",
                  valueFormatter: valueFormatterMm,
                },
                {
                  dataKey: "all_appoinments",
                  label: "All Appointments",
                  valueFormatter: valueFormatterMm,
                },
                {
                  dataKey: "canceled_appoinments",
                  label: "Canceled Appointments",
                  valueFormatter: valueFormatterMm,
                },
              ]}
              {...chartSetting_a} // Use the correct chart setting name to appoinments 
            />
            <ChartsYAxis axisId="quantities" label="# Appoinment count" />
            {/* <ChartsYAxis axisId="money" position="right" label="revenue" /> */}
            <ChartsYAxis axisId="money" position="right" label="revenue" />

          </ResponsiveChartContainer>
        </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
