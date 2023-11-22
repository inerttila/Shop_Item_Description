let { desc, spec } = {
  desc: document.getElementById("description"),
  spec: document.getElementById("specs"),
};
let desc_text;
let specs_text;
desc.addEventListener("input", function (e) {
  desc_text = e.target.value;
});
spec.addEventListener("input", function (e) {
  specs_text = e.target.value;
});

let template = (description, specs_) => {
  return `

    &nbsp;
    <div class="desc_container">
    <div class="desc_section">
    
        ${description}
    
    </div>
    <div class="specs_section">
    <h2 class="include_package">In The Box</h2>
    <ul>
        ${specs_}
    </ul>
    </div>
    </div>
    `;
};
function generate() {
  if (desc_text.length && specs_text.length) {
    let ready_desc = [];
    let ready_specs = [];
    let generated = document.getElementById("answer");
    for (text of desc_text.split("\n")) {
      var w = "<p>" + text + "</p>";
      ready_desc.push(w);
    }
    for (text of specs_text.split("\n")) {
      var w = "<li>" + text + "</li>";
      ready_specs.push(w);
    }
    generated.innerText = template(ready_desc.join(""), ready_specs.join(""));
  } else {
    generated.innerText = "Please FILL all sections.";
  }
}

function myFunction() {
  var copyText = document.getElementById("answer");
  navigator.clipboard.writeText(copyText.innerText.split("\n").join(""));
  alert("Text Copied");
}
