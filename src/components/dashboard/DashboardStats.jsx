import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ReactApexChart from "react-apexcharts";
// import { DataGrid } from "@mui/x-data-grid";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const columns = [
  { field: "id", headerName: "Order ID", flex: 1, minWidth: 100 },
  {
    field: "firstName",
    headerName: "First name",
    minWidth: 130,
    flex: 1,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    minWidth: 130,
    flex: 1,
    editable: true,
  },
  {
    field: "payment",
    headerName: "Payment",
    flex: 1,
    minWidth: 130,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    minWidth: 150,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", payment: "Success" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", payment: "Pending" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", payment: "Success" },
  { id: 4, lastName: "Stark", firstName: "Arya", payment: "Success" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", payment: "Pending" },
  { id: 6, lastName: "Melisandre", firstName: "Joe", payment: "Pending" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", payment: "Success" },
  { id: 8, lastName: "Frances", firstName: "Rossini", payment: "Pending" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", payment: "Success" },
];

function DashboardStats() {
  const theme = useTheme();
  const smallBoxtyle = {
    flexBasis: "48%",
    // maxWidth: "50%",
    flexGrow: 1,
    p: 2,
    mb: 1,
    bgcolor: theme.palette.customCard.main,
    boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
    borderRadius: "6px",
  };
  const HalfBoxtyle = {
    flexBasis: "23%",
    maxWidth: "100%",
    flexGrow: 1,
    px: 2,
    pt: 2,
    pb: 0.5,
    mb: 1,
    bgcolor: theme.palette.customCard.main,
    boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
    borderRadius: "6px",
  };
  const st = {
    options: {
      chart: {
        id: "basic-bar",
      },
      stroke: {
        show: true,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [20, 40, 45, 90, 49, 60, 110, 91],
      },
    ],
  };
  const radialSt = {
    series: [70],
    options: {
      chart: {
        height: 140,
        type: "radialBar",
      },

      stroke: {
        show: false,
      },

      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
        },
      },
      labels: ["75%"],
    },
  };
  const multiRadialBar = {
    series: [55, 67],
    options: {
      chart: {
        type: "radialBar",
      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "10px",
            },
            value: {
              show: false,
              fontSize: "10px",
            },
            total: {
              show: true,
              label: "All",
              fontSize: "14px",
              color: "#66b2ff",
              formatter: function () {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 200;
              },
            },
          },
        },
      },
      labels: ["Women", "Men"],
    },
  };

  const colSt = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Sales",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        width: "80%",
      },
      grid: {
        show: false,
      },
      legend: {
        labels: {
          colors: theme.palette.text.primary,
          useSeriesColors: false,
          fontSize: "14px",
        },
        markers: {
          width: 14,
          height: 14,
          strokeWidth: 0,
          radius: 9,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 10,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: useMediaQuery("(min-width:480px)") ? "18px" : "10px",
          endingShape: "rounded",
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        crosshairs: {
          show: false, // <--- HERE
        },
        labels: {
          show: true,
          style: {
            colors: theme.palette.text.primary,
            fontSize: "12px",
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
          style: {
            color: theme.palette.text.primary,
            fontSize: "14px",
            fontWeight: "normal",
            cssClass: "apexcharts-xaxis-label",
          },
        },
        labels: {
          show: true,
          style: {
            colors: theme.palette.text.primary,
            fontSize: "12px",
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: false,
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: useMediaQuery("(min-width:600px)") ? "98%" : "95%",
        m: "auto",
      }}
    >
      {/* first section */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          gap: 3,
          my: 3,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flexBasis: "48%",
            flexGrow: 1,
            px: 2,
            py: 3,
            mb: 2,
            boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
            borderRadius: "6px",
            bgcolor: theme.palette.customCard.main,
            position: "relative",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              letterSpacing: ".1em",
            }}
          >
            Good Morning, Admin!
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.customCardSubtitle.main, mb: 3 }}
          >
            Here’s what happening with your store today!
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            15,350.25
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.customCardSubtitle.main }}
          >
            Today’s Visit
          </Typography>
          <Typography variant="h6" sx={{ mt: 1.5 }}>
            $10,490,33
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.customCardSubtitle.main }}
          >
            Today’s total sales
          </Typography>
          <img
            src="welcome.svg"
            alt="welcome dashboard admin"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "20px",
              maxWidth: "40%",
            }}
          ></img>
        </Box>
        <Box
          sx={{
            flexBasis: "48%",
            flexGrow: 1,

            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box sx={smallBoxtyle}>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Orders
            </Typography>
            <Typography variant="h6" sx={{ mt: 1.5 }}>
              32,340
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.customCardSubtitle.main }}
              >
                9350
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  " *": { color: "#04a36d" },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(-90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"70%"}>
                  1350%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={smallBoxtyle}>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Sold items
            </Typography>
            <Typography variant="h6" sx={{ mt: 1.5 }}>
              2,360
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.customCardSubtitle.main }}
              >
                1350
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  " *": { color: "#04a36d" },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(-90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"70%"}>
                  13,50%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={smallBoxtyle}>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Gross sales
            </Typography>
            <Typography variant="h6" sx={{ mt: 1.5 }}>
              $15,350.25
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.customCardSubtitle.main }}
              >
                11,350
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  " *": { color: theme.palette.error.main },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"70%"}>
                  -54%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={smallBoxtyle}>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Total Shipping
            </Typography>
            <Typography variant="h6" sx={{ mt: 1.5 }}>
              $6,350.25
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.customCardSubtitle.main }}
              >
                4,670
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  " *": { color: theme.palette.error.main },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"70%"}>
                  -23%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* second section */}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          my: 5,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            ...HalfBoxtyle,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Weekly Sales
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ mt: 1.5 }}>
                $10,240.00
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mb: 1.5,
                  alignItems: "center",
                  " *": { color: "#04a36d" },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(-90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"80%"}>
                  25.2%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mb: 1.5,
              " .apexcharts-toolbar": { display: "none" },
              " text": { display: "none" },
            }}
          >
            <ReactApexChart
              options={st.options}
              series={st.series}
              type="bar"
              width={useMediaQuery("(min-width:640px)") ? "150" : "100"}
              height={"130"}
            />
          </Box>
        </Box>

        <Box
          sx={{
            ...HalfBoxtyle,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Product Share
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ mt: 1.5 }}>
                39.56%
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mb: 1.5,
                  alignItems: "center",
                  " *": { color: "#04a36d" },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(-90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"80%"}>
                  10.25%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mb: 1.5,
              " text.apexcharts-datalabel-value": {
                display: "none",
              },
            }}
          >
            <ReactApexChart
              options={radialSt.options}
              series={radialSt.series}
              type="radialBar"
              width={useMediaQuery("(min-width:640px)") ? "150" : "80"}
              height={"130"}
            />
          </Box>
        </Box>

        <Box
          sx={{
            ...HalfBoxtyle,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Total Orders
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ mt: 1.5 }}>
                $12,260.00
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mb: 1.5,
                  alignItems: "center",
                  " *": { color: "#04a36d" },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(-90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"80%"}>
                  2.65%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mb: 2,
              " .apexcharts-toolbar": { display: "none" },
              " text": { display: "none" },
            }}
          >
            <ReactApexChart
              options={st.options}
              series={st.series}
              type="area"
              width={useMediaQuery("(min-width:640px)") ? "150" : "100"}
              height={"130"}
            />
          </Box>
        </Box>

        <Box
          sx={{
            ...HalfBoxtyle,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.customCardSubtitle.main }}
            >
              Market Share
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ mt: 1.5 }}>
                $14,260.00
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mb: 1.5,
                  alignItems: "center",
                  " *": { color: "#04a36d" },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: "110%", transform: "rotate(-90deg)" }}
                />
                <Typography variant="subtitle2" fontSize={"80%"}>
                  2.65%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mb: 1.5,
              " .apexcharts-toolbar": { display: "none" },
            }}
          >
            <ReactApexChart
              options={multiRadialBar.options}
              series={multiRadialBar.series}
              type="radialBar"
              width={useMediaQuery("(min-width:640px)") ? "150" : "100"}
              height={"130"}
            />
          </Box>
        </Box>
      </Box>

      {/* third section */}
      <Box
        sx={{
          width: "100%",
          my: 5,
          " .apexcharts-menu.apexcharts-menu-open": {
            bgcolor: theme.palette.favColor.main,
          },
          " .apexcharts-menu-item:hover": {
            color: "#494949",
          },
          " .apexcharts-tooltip": {
            bgcolor: "#121212",
            color: "#fff",
          },
        }}
      >
        <Typography variant="h6" sx={{ my: 2.5 }}>
          Analytics
        </Typography>
        <ReactApexChart
          options={colSt.options}
          series={colSt.series}
          type="bar"
          style={{ flexGrow: 1 }}
          height={350}
        />
      </Box>

      {/* fourth section*/}
      <Box
        sx={{
          width: "100%",
          my: 5,
        }}
      >
        <Typography variant="h6" sx={{ my: 2.5 }}>
          Recent Purchases
        </Typography>
        <DataGrid
          sx={{
            " .MuiDataGrid-cell[data-field='payment'] .MuiDataGrid-cellContent":
              {
                bgcolor: theme.palette.favColor.main,
                p: " 4px 8px",
                borderRadius: "20px",
              },
            " .MuiDataGrid-cellContent[title='Pending']": {
              color: theme.palette.error.main,
            },
            " .MuiDataGrid-cellContent[title='Success']": {
              color: "rgb(0, 227, 150)",
            },
            " .MuiDataGrid-cellContent[title='Success']:after": {
              content: `'✓'`,
              ml: "5px",
            },
            " .MuiDataGrid-cellContent[title='Pending']:after": {
              content: `'↺'`,
              ml: "5px",
              fontWeight: "bold",
            },

            /*
            "& .MuiDataGrid-columnHeaderCheckbox": {
              display: "none",
            },
            "& .MuiDataGrid-cellCheckbox": {
              display: "none",
            },*/
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default DashboardStats;
