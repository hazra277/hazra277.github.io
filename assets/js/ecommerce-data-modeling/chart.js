// assets/js/ecommerce-data-modeling/chart.js

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("performance-chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Data Redundancy", "Query Performance", "Customer Segmentation Accuracy", "Data Model Scalability"],
      datasets: [
        {
          label: "Before",
          data: [100, 100, 100, 100],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "After",
          data: [60, 160, 125, 130],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
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
            text: "Performance (relative to baseline)",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "E-commerce Data Model Performance Improvements",
        },
        legend: {
          position: "top",
        },
      },
    },
  });
});
