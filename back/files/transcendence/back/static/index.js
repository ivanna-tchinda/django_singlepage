function showSection(section) {  
    fetch(`/` + section + `/`)
    .then(response => response.text())
    .then(text => {
        console.log(text);
        document.querySelector('#content').innerHTML = text;
    });

}

var btn = document.getElementById("btn-1");
btn.addEventListener("click", function(){
    chargerScript(btn.value);
});

var btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", function(){
    chargerScript(btn2.value);
});

var btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", function(){
    chargerScript(btn3.value);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            if(this.dataset.section == 1)
                showSection("jeu")
            else if(this.dataset.section == 2)
                showSection("tournoi")
            else
                showSection("ordinateur")
        }
    })
});

function chargerScript(value) {
    var script = document.createElement('script');
    script.src = "/static/" + value;
    var index_script = document.querySelector('#script_js');
    index_script.parentNode.insertBefore(script, index_script.nextSibling)
  }