// Initialize AOS (Animate On Scroll)
AOS.init({
    once: true,
    offset: 50,
    duration: 800
});

// Gas Station ROI Chart
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('roiChart').getContext('2d');

    const roiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
            datasets: [{
                label: 'Projected ROI (%)',
                data: [5, 12, 18, 24, 32],
                backgroundColor: '#14b8a6', // Teal
                borderRadius: 4,
                order: 2
            },
            {
                label: 'Net Cash Flow ($k)',
                data: [20, 45, 80, 110, 150],
                type: 'line',
                borderColor: '#94a3b8', // Light Slate Grey
                backgroundColor: '#94a3b8',
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#94a3b8',
                pointRadius: 4,
                tension: 0.3,
                yAxisID: 'y1',
                order: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleFont: { family: 'Inter', size: 13 },
                    bodyFont: { family: 'Inter', size: 13 },
                    padding: 10,
                    cornerRadius: 4,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { family: 'Inter' }
                    }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'ROI %' },
                    grid: {
                        borderDash: [5, 5],
                        color: '#f1f5f9'
                    },
                    ticks: {
                        font: { family: 'Inter' }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { display: true, text: 'Cash Flow ($k)' },
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        font: { family: 'Inter' }
                    }
                }
            }
        }
    });
});
