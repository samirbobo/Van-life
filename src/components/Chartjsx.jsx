import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { BarChart } from "@mui/x-charts/BarChart";

const otherSetting = {
  height: 300,
  yAxis: [{ label: "Price (K)" }],
  grid: { horizontal: true },
  sx: {
    [`& .${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

const dataset = [
  {
    price: 4.1,
    month: "January",
  },
  {
    price: 1.3,
    month: "February",
  },
  {
    price: 3,
    month: "March",
  },
  {
    price: 2.8,
    month: "April",
  },
  {
    price: 1.5,
    month: "May",
  },
  {
    price: 0.5,
    month: "June",
  },
];

const valueFormatter = (value) => `${value}k`;

export default function Chart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          label: "Month (T)",
          scaleType: "band",
          dataKey: "month",
          valueFormatter: (month, context) =>
            context.location === "tick"
              ? `${month.slice(0, 3)}`
              : `${month} 2002`,
          colorMap: {
            type: "ordinal",
            colors: [
              "#ffead0",
              "#ffead0",
              "#ffead0",
              "#ffead0",
              "#ff8c38",
              "#ff8c38",
            ],
          },
        },
      ]}
      series={[
        {
          dataKey: "price",
          label: "Monthly gain",
          valueFormatter,
          color: "#ff8c38",
        },
      ]}
      borderRadius={8}
      {...otherSetting}
    />
  );
}
