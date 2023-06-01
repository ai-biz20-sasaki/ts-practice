export {};  //ファイルをモジュールにする

type Human = { name: string };
type Animal = { species: string };

function getName(human: Human) {
  return human.name
}

function getSpecies(animal: Animal) {
  return animal.species
}

const myFunc = Math.random() < 0.5 ? getName: getSpecies;

const uhyo: Human & Animal = {
  name: "uhyo",
  species: "Homo sapiens sapiens"
};

const value = myFunc(uhyo);
console.log(value);
