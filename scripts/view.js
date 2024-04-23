updateView();
function updateView() {
  let div = document.getElementById('app');
  html = /*html*/ `
    <div class="slide">
      ${makeSlide()}
    </div>
    <div class="buttons">
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  div.innerHTML = html;
}

function makeSlide() {
  html = '';

  for (let i = 0; i < model.fantasyPlaces.length; i++)
    html += /*html*/ `
      <div class="item" style="background-image: url('${model.fantasyPics[i]}');">
        <div class="content">
          <div class="name">${model.fantasyPlaces[i]}</div>
          <div class="des">${model.fantasyDes[i]}</div>
        </div>
      </div>
      `;

  return html;
}
