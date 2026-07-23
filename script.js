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

      
