const menu = document.querySelector('.material-symbols-outlined');
const home = document.getElementById('home');
const closeIcon = document.createElement('i');
const headerDesktop = document.createElement('ul');
const portfolio = document.createElement('li');
const about = document.createElement('li');
const contact = document.createElement('li');
const anchorTagA = document.createElement('a');
anchorTagA.innerHTML = 'Portfolio';
const anchorTagB = document.createElement('a');
const anchorTagC = document.createElement('a');
anchorTagB.innerHTML = 'About ';
anchorTagC.innerHTML = 'Contact';
anchorTagA.classList.add('menuListA');
anchorTagB.classList.add('menuListB');
anchorTagC.classList.add('menuListC');
portfolio.appendChild(anchorTagA);
about.appendChild(anchorTagB);
contact.appendChild(anchorTagC);
portfolio.classList.add('menu-portfolio');
about.classList.add('menu-about');
headerDesktop.id = 'headerDesktop';
contact.classList.add('menu-contact');
headerDesktop.appendChild(portfolio);
headerDesktop.appendChild(about);
headerDesktop.appendChild(contact);
closeIcon.classList.add('material-symbols-outlined');
closeIcon.id = 'close-white';
closeIcon.innerHTML = 'close';
const menuDiv = document.createElement('div');
menuDiv.id = 'menuDiv';
menuDiv.appendChild(headerDesktop);
menuDiv.appendChild(closeIcon);
menuDiv.appendChild(headerDesktop);
home.appendChild(menuDiv);
anchorTagA.href = '#home-2';
anchorTagB.href = '#about-me';
anchorTagC.href = '#form';
menu.onclick = function openMenu() {
  menuDiv.classList.toggle('active');
};
closeIcon.addEventListener('click', () => {
  menuDiv.classList.toggle('active');
});
portfolio.addEventListener('click', () => {
  menuDiv.classList.toggle('active');
});
about.addEventListener('click', () => {
  menuDiv.classList.toggle('active');
});
contact.addEventListener('click', () => {
  menuDiv.classList.toggle('active');
});
const projectButtonDesktop = document.querySelector('.project-btn-desktop');
const popUpButtons2 = document.querySelector('.project-btn-2');
const popUpButtons3 = document.querySelector('.project-btn-3');
const popUpButtons4 = document.querySelector('.project-btn-4');
const popUpButtons5 = document.querySelector('.project-btn-5');
const imgparaContainer = document.createElement('div');
imgparaContainer.id = 'imgparaContainer';
const imgContainer = document.createElement('div');
const projectBtn = document.querySelector('.project-btn');
const desktopBottom = document.createElement('div');
const desktopContainer = document.createElement('div');
desktopContainer.id = 'desktop-pop-container';
const containerDiv = document.createElement('div');
const remove = document.createElement('i');
remove.classList.add('material-symbols-outlined');
remove.classList.add('pop-remove');
remove.innerHTML = 'close';
const popUpBtn = document.getElementById('project-btn');
const unorderedList = document.createElement('ul');
const list1 = document.createElement('li');
const list2 = document.createElement('li');
const list3 = document.createElement('li');
const para = document.createElement('p');
const buttonDiv = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const anchor = document.createElement('img');
anchor.setAttribute('src', 'images/anchor.svg');
const github = document.createElement('img');
github.id = 'github-img';
github.setAttribute('src', 'images/github.svg');
button2.appendChild(github);
anchor.id = 'achor-img';
const button1Para = document.createElement('p');
button1Para.innerHTML = 'See Live';
const button2Para = document.createElement('p');
button2Para.innerHTML = 'See Source';
button1.appendChild(button1Para);
button2.appendChild(button2Para);
button1.appendChild(anchor);
button2.appendChild(github);
buttonDiv.id = 'pop-button-div';
buttonDiv.appendChild(button1);
buttonDiv.appendChild(button2);
button1.classList.add('pop-button1');
button2.classList.add('pop-button2');
para.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
para.classList.add('pop-para');
unorderedList.id = 'pop-undordered-list';
list1.innerHTML = 'html';
list2.innerHTML = 'Bootstrap';
list3.innerHTML = 'Ruby on rails';
containerDiv.id = 'pop-container';
list1.id = 'pop-html';
list2.id = 'pop-Bootstrap';
list3.id = 'pop-Ruby-on-rails';
unorderedList.appendChild(list1);
unorderedList.appendChild(list2);
unorderedList.appendChild(list3);
const img = document.createElement('img');
img.setAttribute('src', 'images/Snapshoot portfolio.svg');
img.id = 'pop-img';
const h1 = document.getElementById('Multi-post');
const h2 = document.createElement('h2');
h2.id = 'pop-heading2';
h2.innerHTML = 'Keeping track of hundreds  of components website';
const popUpDiv = document.createElement('div');
desktopContainer.appendChild(popUpDiv);
desktopContainer.appendChild(unorderedList);
imgContainer.appendChild(img);
desktopBottom.appendChild(para);
desktopBottom.appendChild(buttonDiv);
desktopBottom.id = 'desktop-bottom';
popUpDiv.appendChild(h1);
popUpDiv.appendChild(h2);
popUpDiv.appendChild(remove);
popUpDiv.id = 'pop-up';
containerDiv.appendChild(desktopContainer);
imgparaContainer.appendChild(imgContainer);
imgparaContainer.appendChild(desktopBottom);
containerDiv.appendChild(imgparaContainer);
const body = document.getElementById('body');
body.appendChild(containerDiv);
const blur = document.getElementById('blur');
popUpBtn.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
projectBtn.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
remove.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
popUpButtons2.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
popUpButtons3.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
popUpButtons4.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
popUpButtons5.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
projectButtonDesktop.addEventListener('click', () => {
  containerDiv.classList.toggle('active');
  blur.classList.toggle('active');
});
const form = document.getElementById('input-form');
const email = document.getElementById('mail');
const error = document.querySelector('.error');
const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

email.addEventListener('input', () => {
  const valid = email.value.length === 0 || emailRegExp.test(email.value);
  if (valid) {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const valid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!valid) {
    email.className = 'invalid';
    error.textContent = 'Form is not sent Type email in lowercase please and try again';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = 'The form has been submitted';
    error.className = 'delievered';
  }
  body.addEventListener('click', () => {
    error.textContent = '';
  });
});