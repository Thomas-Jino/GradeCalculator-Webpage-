//JS to Update grade result according to entered Mark

document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('input_name').value.trim();
    const markInput = document.getElementById('input-mark').value.trim();
    const mark = parseInt(markInput);

    let result;

    // Input validation
    if (name === '' || isNaN(mark)) {
        window.alert("Please enter a valid name and numeric mark.");
        return;
    }

    // Grade calculation
    if (mark > 100) {
        result = "Mark should be below 100";
    } else if (mark >= 90) {
        result = "A+";
    } else if (mark >= 80) {
        result = "A";
    } else if (mark >= 70) {
        result = "B+";
    } else if (mark >= 60) {
        result = "B";
    } else if (mark >= 50) {
        result = "C+";
    } else if (mark >= 40) {
        result = "C";
    } else if (mark >=30) {
        result = "D+";
    } else {
        result = "you are Failed !"
    }
    

    if (mark > 100) {
        document.getElementById(`result-h4`).innerText = `${name}, your ${result}`;
        document.getElementById(`input-mark`).value = '';
    } else if (mark < 30){
        document.getElementById(`result-h4`).innerText = `Sorry ${name} ${result}`;
        document.getElementById(`input_name`).value = '';
        document.getElementById(`input-mark`).value = '';
    }else {
        document.getElementById(`result-h4`).innerText = `Result : ${name} your grade is ${result}`;
        document.getElementById(`input_name`).value = '';
        document.getElementById(`input-mark`).value = '';
    }
});