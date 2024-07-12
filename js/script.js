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

let facts = [];

async function loadFacts() {
    try {
        const response = await fetch('facts.json');
        facts = await response.json();
    } catch (error) {
        console.error('Failed to load facts:', error);
    }
}

function getRandomFact(age) {
    const filteredFacts = facts.filter(fact => fact.age === age);
    if (filteredFacts.length === 0) return "No facts available for this age.";
    const randomIndex = Math.floor(Math.random() * filteredFacts.length);
    return filteredFacts[randomIndex].text;
}

function initializeCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const totalWeeks = 90 * 52;

    for (let i = 0; i < totalWeeks; i++) {
        const year = Math.floor(i / 52);
        const weekOfYear = i % 52 + 1;
        const lifeStage = lifeStages.find(stage => year >= stage.startYear && year < stage.endYear);

        const week = document.createElement('div');
        week.classList.add('week', lifeStage.className);
        week.title = `Week: ${weekOfYear}, Year: ${year}, Stage: ${lifeStage.stage}`;
        week.onclick = () => {
            const fact = getRandomFact(year);
            alert(`Week: ${weekOfYear}, Year: ${year}, Stage: ${lifeStage.stage}\n\nFact: ${fact}`);
        };
        calendar.appendChild(week);
    }
}

function calculateWeeks() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    localStorage.setItem('birthdate', birthdateInput.value);
    const today = new Date();
    const diffTime = Math.abs(today - birthdate);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

    const calendar = document.getElementById('calendar').children;

    for (let i = 0; i < diffWeeks; i++) {
        calendar[i].classList.add('filled');
    }
}

document.addEventListener("DOMContentLoaded", async function() {
    await loadFacts();

    const storedBirthdate = localStorage.getItem('birthdate');
    if (storedBirthdate) {
        document.getElementById('birthdate').value = storedBirthdate;
    }

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

    initializeCalendar();
    calculateWeeks();
});
