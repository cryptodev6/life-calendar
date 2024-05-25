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
