const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-btn");
const resultLucky = document.querySelector("#result");

checkButton.addEventListener("click", function checkLuckyNumber() {
    const doob = dateOfBirth.value;
    const sum1 = dobSum(doob);
    if ((Number(luckyNumber.value)) && (doob)) {
        if (Number(luckyNumber.value) > 0) {
            if ((sum1 % luckyNumber.value) === 0)
                resultLucky.innerText = "Voila! Your birthday is Lucky 😮";
            else
                resultLucky.innerText = "Sorry! Your birthday is not a Lucky number 🤕";
        } else
            resultLucky.innerText = "Lucky number entered is Negative!";
    } else
        resultLucky.innerText = "Please enter both the fields 🥺"
});

function dobSum(number) {
    let sum2 = 0;
    const dob = number.replaceAll("-", "");
    for (let i = 0; i < dob.length; i++) {
        sum2 = sum2 + Number(dob.charAt(i));
    }
    return sum2;
}