updateView();
function updateView() {
  let div = document.getElementById('app');
  html = /*html*/ `
    <div class="slide">
      ${makeSlide()}
    </div>
  `;

  div.innerHTML = html;
}

function makeSlide() {
  html = '';

  for (let i = 0; i < model.fantasyPlaces.length; i++)
    html += /*html*/ `
      <div class="item" style="background-image: url(img/fantasy-05e34f7bfyhne5vg.jpg);">
        <div class="content">
          <div class="name">${model.fantasyPlaces[i]}</div>
          <div class="des">${model.fantasyDes[i]}</div>
        </div>
      </div>
      `;

  return html;
}
