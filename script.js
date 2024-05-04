// Script for populating events dynamically
document.addEventListener('DOMContentLoaded', function() {
    const eventsList = document.getElementById('events-list');

    // Example events data
    const events = [
        { name: 'Weekly Gathering', date: 'March 20, 2024', location: 'Community Hall' },
        { name: 'Charity Drive', date: 'April 5, 2024', location: 'Local Shelter' },
        { name: 'Interfaith Dialogue', date: 'April 15, 2024', location: 'Town Center' }
    ];

    events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${event.name}</strong> - ${event.date}, ${event.location}`;
        eventsList.appendChild(li);
    });
});

// Script for handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add code to handle form submission, like sending the data to a server
    alert('Your message has not been sent. Thank you!');
});
