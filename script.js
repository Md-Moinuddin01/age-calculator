const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

let liveTimer;

calculateBtn.addEventListener('click', () => {
    const birthdate = birthdateInput.value;

    // Stop the previous timer
    clearInterval(liveTimer);

    if (birthdate) {
        // Adding time prevents date/timezone calculation issues
        const birthDate = new Date(`${birthdate}T00:00:00`);
        const today = new Date();

        // Prevent future birthdates
        if (birthDate > today) {
            resultDiv.textContent = 'Birthdate cannot be in the future Yaar 🙋🏻‍♂️';
            return;
        }

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
          // Create the result section
        resultDiv.innerHTML = `
            <h2>You are ${age} years old.</h2>

            <div class="life-experience">
                <h3>Your Life Experience 🎉</h3>

                <p>
                    <strong id="totalDays">0</strong>
                    days lived
                </p>

                <p>
                    <strong id="totalHours">0</strong>
                    hours lived
                </p>

                <p>
                    <strong id="totalMinutes">0</strong>
                    minutes lived
                </p>

                <p>
                    <strong id="totalSeconds">0</strong>
                    seconds lived
                </p>
            </div>
        `;

        
