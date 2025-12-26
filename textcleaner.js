function cleanText() {
    let inputText = document.getElementById('inputArea').value;

    // Trim leading and trailing whitespace
    let cleanedText = inputText.trim();

    // Replace multiple spaces with a single space
    cleanedText = cleanedText.replace(/\s\s+/g, ' ');

    // Convert text to lowercase
    cleanedText = cleanedText.toLowerCase();

    // Remove all non-alphanumeric characters except spaces
    cleanedText = cleanedText.replace(/[^a-zA-Z0-9\s]/g, " ");

    // Remove any extra spaces that might be left after replacing characters
    cleanedText = cleanedText.replace(/\s{2,}/g, ' ');

    // Output the cleaned text to the output area
    document.getElementById('outputArea').value = cleanedText;
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
