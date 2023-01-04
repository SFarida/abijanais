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
  const divs = document.getElementsByClassName('toggle')
  const divsToHide = document.getElementsByClassName('toggle')
  const button = document.getElementsByClassName('more')
  // let toggle = divsToHide.find(element => element.classList.contains('mobile_toggle'))
  for (let i = 0; i <= divs.length; i += 1) {
    if (divs[i].classList.contains('mobile_toggle')) {
      divs[i].classList.add('animate__animated', 'animate__jackInTheBox');
      divs[i].classList.remove('mobile_toggle');
      if (i == divs.length) {
        button[0].innerHTML = `LESS <i class="fa fa-caret-down mx-1 text-danger"
        aria-hidden="true"></i>`
        break;
      }
      console.log("has toggle", divsToHide, typeof divsToHide)
    }else{
      divs[i].classList.add("mobile_toggle")
      if(i == divs.length){
        button[0].innerHTML = `MORE <i class="fa fa-caret-down mx-1 text-danger"
        aria-hidden="true"></i>`
        break;
      }
    }
  }
}

  const speakers = [
    {
      id: 1,
      name: 'Yochai Benkler',
      picture: 'assets/images/speakers/speaker_01.png',
      title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
      id: 2,
      name: 'SohYeong Noh',
      picture: 'assets/images/speakers/speaker_02.png',
      title: 'Director of Art Centre Nabi and a board member of CC Korea',
      description: `As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary 
        collaboration and understanding among science technology, humanities, and the arts.`,
    },
    {
      id: 3,
      name: 'Lila tretikov',
      picture: 'assets/images/speakers/speaker_03.png',
      title: 'Executive Director of the Wikimedia Foundation',
      description: `Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. 
        Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.`,
    },
    {
      id: 4,
      name: 'Kilnam Chon',
      picture: 'assets/images/speakers/speaker_04.png',
      title: '',
      description: `Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. 
        In 2012. he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame`,
    },
    {
      id: 5,
      name: 'Julia Leda',
      picture: 'assets/images/speakers/speaker_05.png',
      title: 'President of Young Pirates of Europe',
      description: `European ingetration, political democracy and participation of youth through online as her major condern, 
        Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July`,
    },
    {
      id: 6,
      name: 'Ryan Merkley',
      picture: 'assets/images/speakers/speaker_06.png',
      title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
      description: `Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment`,
    },
  ]

  const loadProjects = () => {
    const container = document.getElementById('cooks_container');
    let row, col;
    for (let i = 0; i < speakers.length; i += 1) {
      if (i % 2 === 0 || i === 0) {
        row = document.createElement('div');
        row.classList.add('row');
      }
      col = document.createElement('div');
      col.classList.add('col-lg', 'speakers_col')
      row.appendChild(col);
      // Creating the image element
      const img = document.createElement('img');
      img.setAttribute("src", speakers[i].picture);
      img.setAttribute("alt", speakers[i].name);
      const imgDiv = document.createElement('div');
      imgDiv.classList.add("img_div")
      imgDiv.appendChild(img)
      col.appendChild(imgDiv);
      // Creating the div element to contain the name, title and description
      const divContent = document.createElement('div');
      divContent.classList.add("div_contain")
      // Creating the h4 element for the name
      const h4 = document.createElement('h4');
      const h4Text = document.createTextNode(speakers[i].name)
      h4.appendChild(h4Text);
      divContent.appendChild(h4);
      // Creating the h5 element for the title
      const h5 = document.createElement('h5');
      const h5Text = document.createTextNode(speakers[i].title);
      h5.appendChild(h5Text);
      divContent.appendChild(h5)
      // Creating the paragraph for the description
      const p = document.createElement('p');
      const pText = document.createTextNode(speakers[i].description);
      p.appendChild(pText);
      divContent.appendChild(p)
      col.appendChild(divContent)
      row.appendChild(col)
      container.appendChild(row);
      if (i >= 2) {
        col.classList.add("mobile_toggle", "toggle")
      }
    }
  };

  window.onload = function () {
    loadProjects();
  }