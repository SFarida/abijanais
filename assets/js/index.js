/* eslint-disable no-unused-vars */
const toggleMenu = () => {
  const menu = document.getElementById('menu');
  const header = document.getElementById('nav_');
  const closeButton = document.getElementById('close_btn');
  const toggleBars = document.getElementById('menu_hamburger');

  if (!(menu.classList.contains('mobile_menu'))) {
    closeButton.classList.add('show');
    toggleBars.classList.add('hide');
    menu.classList.add('mobile_menu');
    header.classList.add('mobile_header');
    menu.classList.remove('menu');
  } else {
    closeButton.classList.remove('show');
    toggleBars.classList.remove('hide');
    menu.classList.remove('mobile_menu');
    header.classList.remove('mobile_header');
    menu.classList.add('menu');
  }
};

const hideMenu = () => {
  document.getElementById('close_btn').classList.remove('show');
  document.getElementById('menu_hamburger').classList.remove('hide');
  document.getElementById('menuIcon').classList.remove('mobile_menu');
  document.getElementById('nav_').classList.remove('mobile_header');
  document.getElementById('menuIcon').classList.add('menu');
};

const toggleChefs = () => {
  const divs = document.getElementsByClassName('toggle');
  const divsToHide = document.getElementsByClassName('toggle');
  const button = document.getElementsByClassName('more');
  // let toggle = divsToHide.find(element => element.classList.contains('mobile_toggle'))
  for (let i = 0; i <= divs.length; i += 1) {
    if (divs[i].classList.contains('mobile_toggle')) {
      divs[i].classList.add('animate__animated', 'animate__jackInTheBox');
      divs[i].classList.remove('mobile_toggle');
      if (i === divs.length) {
        button[0].innerHTML = `LESS <i class="fa fa-caret-down mx-1 text-danger"
        aria-hidden="true"></i>`;
        break;
      }
      console.log('has toggle', divsToHide, typeof divsToHide);
    } else {
      divs[i].classList.add('mobile_toggle');
      if (i === divs.length) {
        button[0].innerHTML = `MORE <i class="fa fa-caret-down mx-1 text-danger"
        aria-hidden="true"></i>`;
        break;
      }
    }
  }
};

const speakers = [
  {
    id: 1,
    name: 'Yong Bentler',
    picture: 'assets/images/speakers/cook1.jpg',
    title: 'Executive Chef',
    description: 'Not every restaurant has an executive chef; that title normally applies only to large chains or restaurants.',
  },
  {
    id: 2,
    name: 'Lin Feng',
    picture: 'assets/images/speakers/cook2.jpg',
    title: 'Kitchen Porter',
    description: `The kitchen porter usually does not have the same training and experience as the chefs. 
    This person is in charge of simple but important tasks involved in the basic preparations of the food.`,
  },
  {
    id: 3,
    name: 'Laila Kai',
    picture: 'assets/images/speakers/cook3.jpg',
    title: 'Head Chef (Chef de Cuisine)',
    description: `The head chef remains at the top of the hierarchy in restaurant kitchens without an executive chef. 
    Like an executive chef, this person controls all aspects of the kitchen.`,
  },
  {
    id: 4,
    name: 'Robert Vikson',
    picture: 'assets/images/speakers/cook4.jpg',
    title: 'Deputy Chef (Sous Chef)',
    description: `The deputy chef, otherwise known as the sous chef, remains second-in-command in the kitchen. 
    Depending on the restaurant and its management, it is possible to have more than one sous chef. `,
  },
  {
    id: 5,
    name: 'Samantha Juice',
    picture: 'assets/images/speakers/cook5.jpg',
    title: 'Station Chef (Chef de Partie)',
    description: `The station chefs arguably have the critical roles in the kitchen. These chefs  cook the food that is being served to customers.`,
  },
  {
    id: 6,
    name: 'Alexa Robinson',
    picture: 'assets/images/speakers/cook6.jpg',
    title: 'Purchasing Manager',
    description: `The purchasing manager is in charge of buying all of the food for the kitchen. 
    This person keeps track of the food available in the kitchen and the food that needs to be ordered. `,
  },
];

const loadProjects = () => {
  const container = document.getElementById('cooks_container');
  let row; let
    col;
  for (let i = 0; i < speakers.length; i += 1) {
    if (i % 2 === 0 || i === 0) {
      row = document.createElement('div');
      row.classList.add('row');
    }
    col = document.createElement('div');
    col.classList.add('col-lg', 'speakers_col');
    row.appendChild(col);
    // Creating the image element
    const img = document.createElement('img');
    img.setAttribute('src', speakers[i].picture);
    img.setAttribute('alt', speakers[i].name);
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img_div');
    imgDiv.appendChild(img);
    col.appendChild(imgDiv);
    // Creating the div element to contain the name, title and description
    const divContent = document.createElement('div');
    divContent.classList.add('div_contain');
    // Creating the h4 element for the name
    const h4 = document.createElement('h4');
    const h4Text = document.createTextNode(speakers[i].name);
    h4.appendChild(h4Text);
    divContent.appendChild(h4);
    // Creating the h5 element for the title
    const h5 = document.createElement('h5');
    const h5Text = document.createTextNode(speakers[i].title);
    h5.appendChild(h5Text);
    divContent.appendChild(h5);
    const hr = document.createElement('hr');
    hr.classList.add('speakers_line', 'mb-3');
    divContent.appendChild(hr);
    // Creating the paragraph for the description
    const p = document.createElement('p');
    const pText = document.createTextNode(speakers[i].description);
    p.appendChild(pText);
    divContent.appendChild(p);
    col.appendChild(divContent);
    row.appendChild(col);
    container.appendChild(row);
    if (i >= 2) {
      col.classList.add('mobile_toggle', 'toggle');
    }
  }
};

window.onload = function () {
  loadProjects();
};