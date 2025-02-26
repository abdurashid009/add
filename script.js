
    const numberDisplay = document.getElementById("number");
    const textInput = document.getElementById("text-input");
    const sendBtn = document.getElementById("send-btn");
    const colorPicker = document.getElementById("color-picker");

    let number = 0;

    document.getElementById("increase").onclick = () => {
        numberDisplay.textContent = ++number;
    };

    document.getElementById("decrease").onclick = () => {
        numberDisplay.textContent = --number;
    };

    sendBtn.onclick = () => {
        let value = parseInt(textInput.value);
        if (!isNaN(value)) numberDisplay.textContent = number = value;
    };

    colorPicker.onchange = () => {
        numberDisplay.style.color = colorPicker.value;
    };


