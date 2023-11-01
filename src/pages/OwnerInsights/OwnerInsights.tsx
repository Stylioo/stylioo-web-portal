import Box from "@mui/material/Box";
import {
  ResponsiveChartContainer,
  BarPlot,
  LinePlot,
  ChartsXAxis,
  ChartsYAxis,
  axisClasses,
} from "@mui/x-charts";

const Insights = () => {
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
        <div>
          <h1
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
        <div style={{ display: "flex", flexDirection: "row" }}>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
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
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#007BFF",
              }}
            >
              Revenue Chart
            </div>
            <Box sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
              <ResponsiveChartContainer
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["2023-10-25", "2023-10-26", "2023-10-27", "2023-10-28"],
                    id: "quarters",
                    label: "Quarters",
                  },
                ]}
                yAxis={[{ id: "money" }, { id: "quantities" }]}
                series={[
                  {
                    type: "bar",
                    id: "profit",
                    yAxisKey: "quantities",
                    data: [305, 5642, 6135, 3374],
                  },
                  {
                    type: "bar",
                    id: "revenue",
                    yAxisKey: "quantities",
                    data: [3205, 2542, 3135, 8374],
                  },
                  {
                    type: "bar",
                    id: "expendutiure",
                    yAxisKey: "quantities",
                    data: [1645, 5542, 5146, 3735],
                  },
                ]}
                height={400}
                margin={{ left: 70, right: 70 }}
                sx={{
                  [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translate(-25px, 0)",
                  },
                  [`.${axisClasses.right} .${axisClasses.label}`]: {
                    transform: "translate(30px, 0)",
                  },
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
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#007BFF",
              }}
            >
              Appoinment Chart
            </div>
            <Box sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
              <ResponsiveChartContainer
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["2023-10-25", "2023-10-26", "2023-10-27", "2023-10-28"],
                    id: "quarters",
                    label: "Quarters",
                  },
                ]}
                yAxis={[{ id: "money" }, { id: "quantities" }]}
                series={[
                  {
                    type: "bar",
                    id: "profit",
                    yAxisKey: "quantities",
                    data: [3, 4, 6, 8],
                  },
                  {
                    type: "bar",
                    id: "revenue",
                    yAxisKey: "quantities",
                    data: [5, 4, 5, 4],
                  },
                  {
                    type: "bar",
                    id: "expendutiure",
                    yAxisKey: "quantities",
                    data: [5, 5, 7, 9],
                  },
                ]}
                height={400}
                margin={{ left: 70, right: 70 }}
                sx={{
                  [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translate(-25px, 0)",
                  },
                  [`.${axisClasses.right} .${axisClasses.label}`]: {
                    transform: "translate(30px, 0)",
                  },
                }}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis
                  axisId="quarters"
                  label="Appointments"
                  labelFontSize={18}
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
  )
}

export default Insights;
