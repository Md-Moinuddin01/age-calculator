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

        const updateLifeExperience = () => {
            const currentTime = new Date();
            const timeDifference = currentTime - birthDate;

            const totalSeconds = Math.floor(timeDifference / 1000);
            const totalMinutes = Math.floor(timeDifference / (1000 * 60));
            const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
            const totalDays = Math.floor(
                timeDifference / (1000 * 60 * 60 * 24)
            );

            document.getElementById('totalDays').textContent =
                totalDays.toLocaleString();

            document.getElementById('totalHours').textContent =
                totalHours.toLocaleString();

            document.getElementById('totalMinutes').textContent =
                totalMinutes.toLocaleString();

            document.getElementById('totalSeconds').textContent =
                totalSeconds.toLocaleString();
        };

        // Show the result immediately
        updateLifeExperience();

        // Update seconds continuously
        liveTimer = setInterval(updateLifeExperience, 1000);
    } else {
        resultDiv.textContent = 'Enter your birthdate Yaar 🙋🏻‍♂️';
    }
});


