$(document).ready(function() {
    // 1. Swiper.js for Featured Products Slider
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
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
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [50, 75, 150, 100, 200, 150],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
            }
        }
    });

    // Moment.js Date Formatting for Footer
    $('#lastUpdated').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});
