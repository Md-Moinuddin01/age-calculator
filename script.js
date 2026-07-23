const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const birthdate = birthdateInput.value;
    if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        resultDiv.textContent = `You are ${age} years old.`;
    } else {
        resultDiv.textContent = 'Enter your birthdate Yaar 🙋🏻‍♂️';
    }
});
