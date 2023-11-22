function copyText() {
  var copyText = document.getElementById("copyCode");
  navigator.clipboard.writeText(copyText.value.split("\n").join(""));
  alert("Text Copied");
}

function generate() {
  let area = document.getElementById("copyCode");
  const productShortDescription = document.getElementById("desc_s").value;
  const leftSpecs = document.getElementById("left_area").value;
  const rightSpecs = document.getElementById("right_area").value;
  if (leftSpecs.length && rightSpecs.length && productShortDescription.length) {
    let rSpecsSplit = [];
    let lSpecsSplit = [];
    var w;

    for (text of leftSpecs.split("\n")) {
      w = "<li>" + text + "</li>";
      lSpecsSplit.push(w);
    }
    for (text of rightSpecs.split("\n")) {
      w = "<li>" + text + "</li>";
      rSpecsSplit.push(w);
    }
    area.value = template(
      productShortDescription,
      lSpecsSplit.join(""),
      rSpecsSplit.join("")
    );
  } else {
    area.value = "Please FILL all sections.";
  }
}

let template = (description, l_specs, r_specs) => {
  return `\
<p class="short_desc">
${description}
</p>

<h6 class="specs_title">Key Specs</h6>
<div class="short_specs">
<ul>
${l_specs}
</ul>
<ul>
${r_specs}
</ul>
</div><p><a class="product_contact_button" href="https://3dskai.com/en/contact-us/" target="_blank" rel="noopener">Enquire Now</a></p>`;
};
