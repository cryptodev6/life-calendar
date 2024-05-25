const lifeStages = [
    { stage: "Bebé", startYear: 0, endYear: 1 },
    { stage: "Niño pequeño", startYear: 1, endYear: 3 },
    { stage: "Preescolar", startYear: 3, endYear: 6 },
    { stage: "Edad escolar", startYear: 6, endYear: 12 },
    { stage: "Adolescencia temprana", startYear: 12, endYear: 14 },
    { stage: "Adolescencia media", startYear: 14, endYear: 16 },
    { stage: "Adolescencia tardía", startYear: 16, endYear: 18 },
    { stage: "Adulto joven", startYear: 18, endYear: 25 },
    { stage: "Adultez temprana", startYear: 25, endYear: 40 },
    { stage: "Adultez media", startYear: 40, endYear: 65 },
    { stage: "Adultez tardía", startYear: 65, endYear: 90 }
];

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
        span.textContent = i;
        weeksLabelsContainer.appendChild(span);
    }

    const yearsLabelsContainer = document.querySelector('.years-labels');
    for (let i = 0; i < 90; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        yearsLabelsContainer.appendChild(span);
    }
});
