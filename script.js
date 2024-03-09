document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-container img");
  const galleryExpanded = document.createElement("div");
  galleryExpanded.classList.add("gallery-expanded");

  galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
      const imgSrc = this.getAttribute("src");
      const expandedImg = document.createElement("img");
      expandedImg.setAttribute("src", imgSrc);
      expandedImg.classList.add("expanded-image");
      galleryExpanded.innerHTML = "";
      galleryExpanded.appendChild(expandedImg);
      document.body.appendChild(galleryExpanded);
      document.body.style.overflow = "hidden";
    });
  });

  galleryExpanded.addEventListener("click", function() {
    document.body.removeChild(galleryExpanded);
    document.body.style.overflow = "auto";
  });
});

// Fetch data for other links from an API or define it manually
// Retrieve the other links and add event listeners
const otherLinks = document.querySelectorAll('#other-links li');

otherLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Perform any desired action when a link is clicked
    console.log('Link clicked:', link.textContent);
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var joinButton = document.querySelector('.join-button a');
  
  joinButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Perform your desired action here when the button is clicked
    alert('Thank you for joining!');
  });
});
   

 // Perform your desired action here when the "Join Now" button is clicked
document.addEventListener('DOMContentLoaded', function() {
  var joinButton = document.querySelector('.additional-content .btn');
  
  joinButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Perform your desired action here when the "Join Now" button is clicked
    alert('Thank you for joining our alumni network!');
  });
});


function myFunction(reviewNumber) {
  var dots = document.getElementById("dots" + reviewNumber);
  var moreText = document.getElementById("more" + reviewNumber);
  var btnText = document.getElementById("myBtn" + reviewNumber);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  }
}




function validateForm() {
  var nameInput = document.getElementById('name');
  var rollInput = document.getElementById('roll');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var programInput = document.getElementById('program');
  var yearInputs = document.querySelectorAll('input[name="year"]');
  var resumeInput = document.getElementById('resume');
  var interestsInput = document.getElementById('interests');

  // Form validation logic here...

  // Validate name: Only allow alphabetic characters and spaces
  var name = nameInput.value.trim();
  var nameRegex = /^[A-Za-z\s]+$/;
  if (!name.match(nameRegex)) {
    showError(nameInput, 'Please enter a valid name.');
    return false;
  }

  // Validate roll number: Only allow numbers
  var roll = rollInput.value.trim();
  var rollRegex = /^\d+$/;
  if (!roll.match(rollRegex)) {
    showError(rollInput, 'Please enter a valid roll number.');
    return false;
  }

  // Validate email address using a regular expression
  var email = emailInput.value.trim();
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!email.match(emailRegex)) {
    showError(emailInput, 'Please enter a valid email address.');
    return false;
  }

  // Validate phone number: Only allow numbers and enforce a specific format
  var phone = phoneInput.value.trim();
  var phoneRegex = /^\d{10}$/;
  if (!phone.match(phoneRegex)) {
    showError(phoneInput, 'Please enter a valid 10-digit phone number.');
    return false;
  }

  // Validate program selection: Make sure a program is selected
  var program = programInput.value.trim();
  if (program === '') {
    showError(programInput, 'Please select a program.');
    return false;
  }

  // Validate year of study: Make sure a year is selected
  var yearSelected = false;
  yearInputs.forEach(function (yearInput) {
    if (yearInput.checked) {
      yearSelected = true;
    }
  });
  if (!yearSelected) {
    showError(document.querySelector('.year-subsections'), 'Please select a year of study.');
    return false;
  }

  // Validate resume file: Check if a file is selected
  var resume = resumeInput.value.trim();
  if (resume === '') {
    showError(resumeInput, 'Please upload your resume.');
    return false;
  }

  // Validate interests: Make sure it is not empty
  var interests = interestsInput.value.trim();
  if (interests === '') {
    showError(interestsInput, 'Please enter your interests.');
    return false;
  }

  return true;
}

function showError(element, message) {
  var errorSpan = document.createElement('span');
  errorSpan.className = 'error-message';
  errorSpan.textContent = message;
  element.classList.add('error');
  element.parentNode.insertBefore(errorSpan, element.nextSibling);
}

// Remove error messages on input change
var formInputs = document.querySelectorAll('#registration-form input, #registration-form select, #registration-form textarea');
formInputs.forEach(function (input) {
  input.addEventListener('input', function () {
    if (this.classList.contains('error')) {
      this.classList.remove('error');
      var errorMessage = this.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
      }
    }
  });
});
alert("Thank you for registering!");













