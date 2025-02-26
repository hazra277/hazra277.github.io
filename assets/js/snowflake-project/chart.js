var ctx = document.getElementById("performance-chart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Query Time", "Data Latency", "Data Processing", "Cost", "User Adoption"],
    datasets: [
      {
        label: "Before Snowflake",
        data: [100, 1440, 2, 100, 100],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "After Snowflake",
        data: [60, 15, 20, 70, 150],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Relative Performance (Lower is better, except for User Adoption)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Snowflake Data Warehouse Performance Improvements",
      },
    },
  },
});
