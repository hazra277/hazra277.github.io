var ctx = document.getElementById("performance-chart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Processing Time", "Data Quality Score", "Daily Data Volume", "Development Time", "Infrastructure Cost"],
    datasets: [
      {
        label: "Before Apache Spark & Talend",
        data: [100, 100, 5, 100, 100],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "After Apache Spark & Talend",
        data: [30, 145, 50, 40, 65],
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
          text: "Relative Performance (Lower is better, except for Data Quality and Volume)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Data Pipeline Performance Improvements",
      },
    },
  },
});
