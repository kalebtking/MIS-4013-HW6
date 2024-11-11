$(document).ready(function() {
    // 1. Swiper.js for Featured Products Slider
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        on: {
            slideChange: updateChart // Calls updateChart when slide changes
        }
    });

    // 2. Chart.js for Sales Chart
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [50, 75, 150, 100, 200, 150], // Initial data for first product
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
            }
        }
    });

    // 3. Function to update chart data based on the current slide
    function updateChart() {
        let currentIndex = swiper.realIndex; // Gets the active slide index

        // Sample data for each featured product
        const productSalesData = [
            [50, 75, 150, 100, 200, 150], // Data for Product 1
            [60, 90, 120, 130, 160, 180], // Data for Product 2
            [70, 110, 100, 150, 120, 170] // Data for Product 3
        ];

        // Update the chart data to match the selected product
        salesChart.data.datasets[0].data = productSalesData[currentIndex];
        salesChart.update();
    }

    // Initialize the first chart data when the page loads
    updateChart();
});
