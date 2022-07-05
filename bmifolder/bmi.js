function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100)
        document.bmiForm.bmi.value = finalBmi.toFixed(3)

        if (finalBmi < 18.5) {
            document.bmiForm.meaning.value = "That you are too thin."
            document.getElementById("centerbox1").style.color = '#99C262';
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            document.bmiForm.meaning.value = "That you are healthy."
            document.getElementById("centerbox1").style.color = '#F8D347';
        }
        if (finalBmi > 25) {
            document.bmiForm.meaning.value = "That you have overweight."
            document.getElementById("centerbox1").style.color = '#FF6C60';
        }
    } else {
        alert("Please Fill in everything correctly")
    }


}