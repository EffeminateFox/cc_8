//U52529625

// Prevent the default form submission action
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const registrationDetails = document.getElementById('registrationDetails');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

  // Validate the fields are filled out
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventDate = document.getElementById('eventDate').value;
        const mealPreferences = document.querySelectorAll('input[name="mealPreference"]:checked');

        if (!name || !email || !eventDate) {
            alert('Please fill out all fields.');
            return;
        }

        // Collect meal preferences
        const preferences = [];
        mealPreferences.forEach(pref => preferences.push(pref.value));

        // Display registration details
        registrationDetails.innerHTML = `
            <h2>Registration Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Event Date:</strong> ${eventDate}</p>
            <p><strong>Meal Preferences:</strong> ${preferences.join(', ') || 'None'}</p>
        `;
    });
});
