const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];

function getAnimal(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { getAnimal };
