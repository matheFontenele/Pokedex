/*Lista de seletores DOM*/
const pokeContainer = document.querySelector('#pokeContainer');
const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonName = document.querySelector('#pokemon-name');
const pokemonimg = document.querySelector('#pokemon-img');
const Home = document.querySelector('#containerHome');
const typesSelect = document.querySelector('#containerTypes');
const filterSelect = document.querySelector('#containerFilter');
const btnTypeSelect = document.querySelector('#select-type');
const btnFilterMode = document.querySelector('#filter-mode');
const formSearch = document.querySelector('#form-search');
const returnBtn1 = document.querySelector('#return-btn1');
const returnBtn2 = document.querySelector('#return-btn2');

const pokemonNumbers = 150;

/*Lista de cores*/
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ghost: '#d3aaeb'
}

const pokeTypes = Object.keys(colors);

/*Lista de tipos*/
const types = {
    fire: 'src="./img/Tipos/fire.png"',
    grass: 'src="./img/Tipos/plant.png"',
    electric: 'src="./img/Tipos/thunder.png"',
    water: 'src="./img/Tipos/water.png"',
    ground: 'src="./img/Tipos/terra.png"',
    rock: 'src="./img/Tipos/rock.png"',
    fairy: 'src="./img/Tipos/shine.png"',
    poison: 'src="./img/Tipos/poison.png"',
    bug: 'src="./img/Tipos/inseto.png"',
    dragon: 'src="./img/Tipos/dragon.png"',
    psychic: 'src="./img/Tipos/psiquico.png"',
    flying: 'src="./img/Tipos/fly.png"',
    fighting: 'src"./img/Tipos/porrada.png"',
    normal: 'src="./img/Tipos/normal.png"',
    ghost: 'src="./img/Tipos/ghost.png"'
}

const pokeTypesImg = Object.keys(types);

/*função para buscar pokemons da API*/
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonNumbers; i++) {
        await getPokemons(i);
    }
}

const getPokemons = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const resp = await fetch(url);
    const data = await resp.json();
    newPokemon(data)
}

/*Função para criar novos pokemons no HTML*/
const newPokemon = (poke) =>{
    const card = document.createElement('div');
    card.classList.add('Pokemon')

    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const imgId = poke.id
    const id = poke.id.toString().padStart(3, '0');

    const pokeTypes = poke.types.map(type => type.type.name)
    const type = pokeTypes.find(type => pokeTypes.indexOf(type) > -1)
    const color = colors[type]
    
    const typeSpan = types[type]

    card.style.backgroundColor = color
    

    const newPokemonDiv = `<div class="infoPoke" id="info-poke"><p id="pokemon-number">Nº ${id}</p><h2 id="pokemon-name">${name}</h2><span class="type"><img ${typeSpan} alt="${typeSpan}"></span></div><div class="perfilPoke" id="info-poke"><img class="imgPerfil" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${imgId}.gif" id="pokemon-img" src="" alt="${name}"></div>`

    card.innerHTML = newPokemonDiv

    pokeContainer.appendChild(card)
}


/*Função para consumir API de Pokemons
const getPokemons = async (pokemon) => {
    const urlGet = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await urlGet.json();
    return(data);
}/*

/*Função para utilizar os dados consumidos do API
const showPokemon = async (pokemon) => {
    const data = await getPokemons(pokemon);
    pokemonNumber.innerHTML = `Nº 0${data.id}`;
    pokemonName.innerHTML = data.name;
    pokemonimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
}/*


/*Função e evento para ocultar e exibir containers*/
function showMenu1() {
    Home.classList.toggle('hide');
    typesSelect.classList.toggle('hide');
}
function showMenu2() {
    Home.classList.toggle('hide');
    filterSelect.classList.toggle('hide');
}

/*Eventos*/
btnTypeSelect.addEventListener('click', () => {
    showMenu1();
})
btnFilterMode.addEventListener('click', () => {
    showMenu2();
});

returnBtn1.addEventListener('click', () => {
    showMenu1();
});

returnBtn2.addEventListener('click', () => {
    showMenu2();
});

fetchPokemons();
