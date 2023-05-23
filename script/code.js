function calculateBmi(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / ((height * height) / 10000))

    document.getElementById('display').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'You are UNDERWEIGHT'
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are NORMAL WEIGHT'
    }else  if (bmi = 25 && bmi < 29.9) {
        document.getElementById('message').innerHTML = 'You are OVER WEIGHT'
    }else {
        document.getElementById('message').innerHTML = 'You are OBESE'
    }
}

function reload() {
    window.location.reload()
}