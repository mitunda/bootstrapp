// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form data
  const formData = new FormData(event.target);

  // Construct an object from form data
  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  // Send form data to the backend (replace the URL with your backend endpoint)
  fetch('https://example.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => {
    if (response.ok) {
      // Handle successful form submission
      console.log('Form submitted successfully');
      // Redirect to the dashboard page after signup
      window.location.href = 'dashboard.html';
    } else {
      // Handle failed form submission
      console.error('Error submitting form');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Add event listener to the form for form submission
document.querySelector('form').addEventListener('submit', handleFormSubmission);
