let text = document.getElementById("text");
let result = document.getElementById("result");

text.addEventListener('input', function() {
    let content = this.value;
    let chars = content.length;
    
    content = content.trim();

    let wordlist = content.split(/\s/);

    let wordsseparated = wordlist.filter(function (element) {
        return element != "";
    });

    let words = wordsseparated.length;

    result.textContent = `Characters: ${chars} | Words: ${words}`;
})



function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("result").textContent = "Characters: ___ | Words: ___";
}