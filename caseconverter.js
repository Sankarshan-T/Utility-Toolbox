function convertLowerCase() {
  const outputArea = document.getElementById("outputArea");
  const inputText = document.getElementById("inputArea").value;

  const outputText = inputText.toLowerCase();
  outputArea.textContent = outputText;
}

function convertUpperCase() {
  const outputArea = document.getElementById("outputArea");
  const inputText = document.getElementById("inputArea").value;

  const outputText = inputText.toUpperCase();
  outputArea.textContent = outputText;
}



function copyText(button) {
    const outputtext = document.getElementById("outputArea").value;
  
    navigator.clipboard.writeText(outputtext)
    button.textContent = "Copied!";
    setTimeout(() => {
        button.textContent = "Copy";
    }, 1200);
  }

  function clearText() {
    document.getElementById("inputArea").value = "";
    document.getElementById("outputArea").value = "";
  }