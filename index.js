// Import stylesheets
import './style.css';

const main = document.querySelector('main');

main.addEventListener('click', (e) => handelClick(e));

main.addEventListener('dblclick', (e) => {
  if (e.target.closest('article')) {
    console.log(e.target);
    wrapPrevious(e);
    changeIcon(e.target.closest('article').querySelector('header'));
    handleAccordion(e.target.closest('article').querySelector('.panel'));
  }
});

function handelClick(e) {
  const searchedBtn = e.target.closest("[data-action='toggle']");
  if (!searchedBtn) return;

  const panel = e.target.closest("[data-action='toggle']").parentElement
    .nextElementSibling;

  wrapPrevious(e);
  changeIcon(searchedBtn.parentElement);
  handleAccordion(panel);

  // panel.classList.toggle('hide');
}
function wrapPrevious(e) {
  const searchedPanel = document.querySelector('.border-indigo');
  const isActive = e.target.closest('.active');
  console.log('gas', isActive);
  if (!searchedPanel || isActive) return;
  // console.log('searchedPanel: ', e.target);
  changeIcon(searchedPanel.firstElementChild);
  handleAccordion(searchedPanel.lastElementChild);
}

function changeIcon(header) {
  if (header.classList.contains('open')) {
    header.closest('article').classList.remove('active');
    header.classList.remove('open');
    header.querySelector("[data-action='toggle']").remove();
    header.insertAdjacentHTML('beforeend', cloesedIcon);
  } else {
    header.closest('article').classList.add('active');
    header.classList.add('open');
    header.querySelector("[data-action='toggle']").remove();
    header.insertAdjacentHTML('beforeend', opendIcon);
  }
}

function handleAccordion(element) {
  if (element.classList.contains('hide')) {
    element.classList.toggle('hide');
    element.parentElement.classList.add('bg-grey-lightest', 'border-indigo');
    element.parentElement.querySelector('span').style.color = 'indigo';
    return;
  }
  element.classList.toggle('hide');
  element.parentElement.classList.remove('bg-grey-lightest', 'border-indigo');
  element.parentElement.querySelector('span').style.color = 'inherit';
}

const opendIcon = `<div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo" data-action="toggle">
<!-- icon by feathericons.com -->
<svg aria-hidden="false" data-reactid="266" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="18 15 12 9 6 15">
</polyline>
</svg>
</div>`;
const cloesedIcon = `<div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center" data-action="toggle">
                                 
<!-- icon by feathericons.com -->
<svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">

<polyline points="6 9 12 15 18 9">
</polyline>
</svg>

</div>`;
