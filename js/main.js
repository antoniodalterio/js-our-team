'use strict';

const membroTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    img: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    img: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg',
  },
];

const container = document.getElementById('container');
container.append(teamDom('div', 'h3', 'p', 'img', 'nome', 'ruolo', 'img'));

function teamDom(div, tag0, tag1, tag2, ob1, ob2, ob3) {
  for (let i = 0; i < membroTeam.length; i++) {
    const contenitoreStringa = document.createElement(div);
    contenitoreStringa.classList.add('card');
    container.append(contenitoreStringa);
    const img = document.createElement(tag2);
    contenitoreStringa.append(img);
    img.src = `img/${membroTeam[i][ob3]}`;
    const stringa = document.createElement(tag0);
    contenitoreStringa.append(stringa);
    stringa.append(membroTeam[i][ob1]);
    const ruolo = document.createElement(tag1);
    contenitoreStringa.append(ruolo);
    ruolo.append(membroTeam[i][ob2]);
  }
}
