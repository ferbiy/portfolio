let inst = document.querySelector("#inst"),
  behance = document.querySelector("#behance"),
  showContacts = document.querySelector("#show-contacts"),
  hideContacts = document.querySelector("#hide-contacts"),
  hideThis = document.querySelectorAll(".hide-this");

if (ww < 620) {
  inst.style.display = "none";
  behance.style.display = "none";

  document.styleSheets[3].rules[8].style.display = "";
  document.styleSheets[3].rules[8].style.display = "none";
}

let photos = [
  { files: ["01"], colors: ["#8C914F", "white"] },
  { files: ["02"] },
  { files: ["03", "04"] },
  { files: ["05"] },
  { files: ["06"] },
  { files: ["07", "08"] },
  { files: ["41", "42"] },
  { files: ["43"] },
  { files: ["13"], colors: ["#607C8C", "white"] },
  { files: ["15"], colors: ["white", "black"] },
  { files: ["16"] },
  { files: ["17", "18"], colors: ["white", "black"] },
  { files: ["19"], colors: ["#790B0B", "white"] },
  { files: ["20"], colors: ["", ""] },
  { files: ["21"] },
  { files: ["23"] },
  { files: ["24"], colors: ["#779182", "white"] },
  { files: ["25", "26"] },
  { files: ["27"] },
  { files: ["28"], colors: ["white", "black"] },
  { files: ["29"] },
  { files: ["30"] },
];

function upgrade() {
  setTimeout(() => {
    let kaka = document.querySelector(".active");

    function changeColors(back, text) {
      document.styleSheets[3].rules[1].style.backgroundColor = "";
      document.styleSheets[3].rules[1].style.backgroundColor = back;
      document.styleSheets[3].rules[2].style.color = "";
      document.styleSheets[3].rules[2].style.color = text;
      document.styleSheets[3].rules[3].style.color = "";
      document.styleSheets[3].rules[3].style.color = text;
      document.styleSheets[3].rules[4].style.color = "";
      document.styleSheets[3].rules[4].style.color = text;
      document.styleSheets[3].rules[5].style.backgroundColor = "";
      document.styleSheets[3].rules[5].style.backgroundColor = back;
      document.styleSheets[3].rules[6].style.fill = "";
      document.styleSheets[3].rules[6].style.fill = text;
      document.styleSheets[3].rules[7].style.fill = "";
      document.styleSheets[3].rules[7].style.fill = text;
      document.styleSheets[3].rules[8].style.backgroundColor = "";
      document.styleSheets[3].rules[8].style.backgroundColor = back;
    }

    setTimeout(() => {
      if (kaka.attributes["data-color-back"] != undefined) {
        changeColors(
          kaka.attributes["data-color-back"].value,
          kaka.attributes["data-color-text"].value
        );
      } else {
        changeColors("black", "white");
      }
    }, 300);
  }, 200);
}

function Photo(item, index) {
  this.files = item.files;
  this.localIndex = 0;

  this.isItArray = function () {
    if (Array.isArray(this.files)) {
      return 2;
    }
    return 1;
  };

  this.active = function () {
    if (index == 0 && this.localIndex == 0) {
      html += " active";
    }
  };

  this.atrClass = function () {
    html += `class="carousel-item carouselHeight`;
  };

  this.closeCode = function () {
    html += `">`;
  };

  this.imgCode = function (x) {
    html += `<img src="images/${this.files[x]}.jpg" class="d-block " alt="..." />`;
  };

  this.closeDiv = function () {
    html += `</div>`;
  };

  this.addAttribute = function () {
    if (item.colors != undefined) {
      html += ` data-color-back="${item.colors[0]}" data-color-text="${item.colors[1]}" `;
    }
  };

  this.final = function () {
    html += `<div `;
    this.addAttribute();
    this.atrClass();
    this.active();
    this.closeCode();
    if (this.files.length > 1) {
      for (
        this.localIndex;
        this.localIndex < this.files.length;
        this.localIndex++
      ) {
        this.imgCode(this.localIndex);
        if (ww < 930) {
          this.closeDiv();
          if (this.localIndex != this.files.length - 1) {
            html += `<div `;
            this.addAttribute();
            this.atrClass();
            this.closeCode();
          }
        }
        if (this.localIndex == this.files.length - 1 && ww > 929) {
          this.closeDiv();
        }
      }
      this.localIndex++;
    } else {
      this.imgCode(this.localIndex);
      this.closeDiv();
    }
  };
}

let paste = document.querySelector("#pasteHere"),
  html = "";

for (let i = 0; i < photos.length; i++) {
  let ok = new Photo(photos[i], i);
  ok.final();
}

function addAttribute(colors) {
  if (colors != undefined) {
    html += `data-color-back="${colors[0]}" data-color-text="${colors[1]}"`;
  }
}
paste.innerHTML = html;
setInterval(() => {
  upgrade();
}, 100);
