var ctx = document.getElementById("performance-chart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Time-to-Insight", "Data Reusability", "Data Management Costs", "Governance Compliance"],
    datasets: [
      {
        label: "Improvement Percentage",
        data: [40, 60, 30, 50],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(153, 102, 255, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(153, 102, 255, 1)"],
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
          text: "Improvement (%)",
        },
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Data Fabric Implementation Improvements",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.parsed.y + "%";
          },
        },
      },
    },
  },
});
