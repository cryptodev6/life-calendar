const lifeStages = [
    { stage: "Bebé", startYear: 0, endYear: 1, className: "baby" },
    { stage: "Niño pequeño", startYear: 1, endYear: 3, className: "toddler" },
    { stage: "Preescolar", startYear: 3, endYear: 6, className: "preschool" },
    { stage: "Edad escolar", startYear: 6, endYear: 12, className: "schoolage" },
    { stage: "Adolescencia", startYear: 12, endYear: 18, className: "teen" },
    { stage: "Adulto joven", startYear: 18, endYear: 25, className: "youngadult" },
    { stage: "Adultez temprana", startYear: 25, endYear: 40, className: "adult" },
    { stage: "Adultez media", startYear: 40, endYear: 65, className: "middleaged" },
    { stage: "Adultez tardía", startYear: 65, endYear: 90, className: "senior" }
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
        const year = Math.floor(i / 52);
        const weekOfYear = i % 52 + 1;
        const lifeStage = lifeStages.find(stage => year >= stage.startYear && year < stage.endYear);

        const week = document.createElement('div');
        week.classList.add('week', lifeStage.className);
        if (i < diffWeeks) {
            week.classList.add('filled');
        }
        week.title = `Week: ${weekOfYear}, Year: ${year}, Stage: ${lifeStage.stage}`;
        week.onclick = () => alert(`Week: ${weekOfYear}, Year: ${year}, Stage: ${lifeStage.stage}`);
        calendar.appendChild(week);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const weeksLabelsContainer = document.querySelector('.weeks-labels');
    for (let i = 1; i <= 52; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        if (i % 4 === 1 && i !== 1) {
            span.classList.add('month-separator');
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
