function convertLowerCase() {
  const outputArea = document.getElementById("outputArea");
  const inputText = document.getElementById("inputArea").value;

  outputArea.value = inputText.toLowerCase();
}

function convertUpperCase() {
  const outputArea = document.getElementById("outputArea");
  const inputText = document.getElementById("inputArea").value;

  outputArea.value = inputText.toUpperCase();
}

function convertCamelCase() {
  const outputArea = document.getElementById("outputArea");
  const inputText = document.getElementById("inputArea").value;

  outputArea.value = inputText
    .split(/[\s-_]+/)
    .filter(word => word.length > 0)

    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
    }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })

    .join('');
}


function copyText(button) {
    navigator.clipboard.writeText(document.getElementById("outputArea").value);
    button.textContent = "Copied!";
    setTimeout(() => {
        button.textContent = "Copy";
    }, 1200);
  }

  function clearText() {
    document.getElementById("inputArea").value = "";
    document.getElementById("outputArea").value = "";
  }