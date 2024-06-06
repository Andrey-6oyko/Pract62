document.getElementById('checkButton').addEventListener('click', function() {
    var inputA = parseInt(document.getElementById('inputA').value);
    var inputB = parseInt(document.getElementById('inputB').value);
    var inputResult = parseInt(document.getElementById('inputResult').value);

    var expectedResult = (inputA ^ inputB); // XOR operation

    var resultElement = document.getElementById('result');
    if (inputResult === expectedResult) {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Неправильно!';
        resultElement.style.color = 'red';
    }
});
