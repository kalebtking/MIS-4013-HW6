$(document).ready(function() {
    // Swiper.js Setup (as before)
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        on: {
            slideChange: updateChart // Update chart on slide change
        }
    });

    // 2. jQuery Animation for Buttons
    $('button').on('mouseenter', function() {
        $(this).animate({ opacity: 0.7 }, 200);
    }).on('mouseleave', function() {
        $(this).animate({ opacity: 1 }, 200);
    });

    // 3. Moment.js Countdown Timer
    var saleEnd = moment().add(5, 'days').endOf('day');
    setInterval(function() {
        var now = moment();
        var duration = moment.duration(saleEnd.diff(now));
        $('#countdown').text(
            duration.days() + 'd ' + duration.hours() + 'h ' +
            duration.minutes() + 'm ' + duration.seconds() + 's'
        );
    }, 1000);

    // 4. Chart.js for Sales Chart
  // Set up Chart.js with an initial configuration
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [50, 75, 150, 100, 200, 150], // Initial data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });

     // Function to update chart data based on the current slide
    function updateChart() {
        let currentIndex = swiper.realIndex; // Gets the current active slide index

        // Sample data for each featured product
        const productSalesData = [
            [50, 75, 150, 100, 200, 150], // Data for Product 1
            [60, 90, 120, 130, 160, 180], // Data for Product 2
            [70, 110, 100, 150, 120, 170] // Data for Product 3
        ];

        // Ensure currentIndex is within bounds of productSalesData
        if (currentIndex < productSalesData.length) {
            // Update the chart dataset with the correct data
            salesChart.data.datasets[0].data = productSalesData[currentIndex];
            salesChart.update();
        }
    }

    // Initialize the first chart data when the page loads
    updateChart();
});

    // Moment.js Date Formatting for Footer
    $('#lastUpdated').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});
