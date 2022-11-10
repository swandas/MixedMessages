let statementArr = [ 'My favorite Seven Deadly Sin Gran Cross character is', 'My least favorite Seven Deadly Sin Gran Cross character is', 'In PVP I keep losing whenever my opponent uses ', 'In PVP I demolish the other team if they ever use', 'In PVE I love to use' ]


let characterName = ['Merlin', 'Escanore', 'Gowther', 'Diane', 'King', 'Ban']

const aboutSDS = (array1, array2) => {
let randomOne = (Math.floor(Math.random() * array1.length));
let randomTwo = (Math.floor(Math.random() * array2.length));
console.log(array1[randomOne] + ' ' + array2[randomTwo])
}
return aboutSDS(statementArr, characterName)