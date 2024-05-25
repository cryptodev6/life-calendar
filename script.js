function calculateWeeks() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const diffTime = Math.abs(today - birthdate);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const totalWeeks = 90 * 52;

    for (let i = 0; i < totalWeeks; i++) {
        const week = document.createElement('div');
        week.classList.add('week');
        if (i < diffWeeks) {
            week.classList.add('filled');
        }
        calendar.appendChild(week);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const weeksLabelsContainer = document.querySelector('.weeks-labels');
    for (let i = 1; i <= 52; i++) {
        const span = document.createElement('span');
        if (i === 1 || i % 5 === 0) {
            span.textContent = i;
        }
        weeksLabelsContainer.appendChild(span);
    }

    const yearsLabelsContainer = document.querySelector('.years-labels');
    for (let i = 0; i < 90; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        yearsLabelsContainer.appendChild(span);
    }
});
