const form = document.getElementById('multiStepForm');
const fieldsets = form.querySelectorAll('fieldset');
const progressBar = document.querySelectorAll('#progressbar li');
let currentStep = 0;

function showStep(step) {
    fieldsets.forEach((fieldset, index) => {
        fieldset.classList.toggle('active', index === step);
        progressBar[index].classList.toggle('active', index <= step);
    });
}

form.addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) {
        currentStep = Math.min(currentStep + 1, fieldsets.length - 1);
    } else if (e.target.classList.contains('previous')) {
        currentStep = Math.max(currentStep - 1, 0);
    }
    showStep(currentStep);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form Submitted!');
});

// Initialize the form
showStep(currentStep);
