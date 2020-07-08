let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];
  index = 0
  let button = document.getElementById('button');
  button.addEventListener('click',function(){
      let targetNameElement = document.getElementById('name');
      targetNameElement.innerHTML = pokeArray[index].name;

      let targetImageElement = document.getElementById('image');
      targetImageElement.src = pokeArray[index].image;
      index++;
  })