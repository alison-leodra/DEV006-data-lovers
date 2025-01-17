export const filterDirector = (directores, data) => {
  //filtro
  const directores1 = data.films.filter(films => films.director === directores)
  return directores1;
};

export const filterProducer = (productores, data) => {
  const productores1 = data.filter(films => films.producer === productores)
  return productores1;
};



export const sortDataYear = (sortBy, data) => {
  let orden = "";

  if (sortBy === "oldest") {
    orden = data.sort((x, y) => x.release_date - y.release_date)
  }
  else {
    orden = data.sort((x, y) => x.release_date - y.release_date).reverse();
  }

  return orden;
};

export const characterMovie = (characterMovies, data) => {

  return data.films.filter(films => films.title === characterMovies)
    .flatMap(element => element.people);

}

export const filterSpecies = (especie, data) => {

  if (especie !== "Else") {

    return data.filter(element => element.specie === especie);
  }

  return data.filter(element => ["Wolf", "Red elk", "Deity", "Bird", "unknown", "Spirit of The White Fox", "Dragon", "Wizard", "Demon", "Human/Scarecrow", "Dog", "Arch-mage/Human", "Fish/Human", "Witch/Human"].includes(element.specie));

};

export const functionSortAZ = (sortAZ, data) => {

  const AZ = data.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  })

  if (sortAZ === "AZ") {

    return AZ
  }

  else {
    const ZA = AZ.reverse();
    return ZA
  }
}


export const genderTrivia = (data) => {

  const peopleMap = data.films.flatMap(element => element.people);
  const genderF = peopleMap.filter(people => people.gender === "Female");
  const femalePercent = Math.round((genderF.length * 100) / peopleMap.length);

  const genderM = peopleMap.filter(people => people.gender === "Male");
  const malePercent = Math.round((genderM.length * 100) / peopleMap.length);

  const genderNA = peopleMap.filter(people => ["NA", "Unknown (Possible Male)"].includes(people.gender))
  const naPercent = Math.round((genderNA.length * 100) / peopleMap.length);

  const answerOneDone = malePercent + " % of the characters are males, " + femalePercent +
    "% are females, and " + naPercent + "% of the characters have unknown genders."

  return answerOneDone;
}

export const specieTrivia = (data) => {

  const peopleMap = data.films.flatMap(element => element.people);
  const witch = peopleMap.filter(people => people.specie === "Witch");
  const witchPercent = Math.round((witch.length * 100) / peopleMap.length);

  const cats = peopleMap.filter(people => people.specie === "Cat");
  const catsPercent = Math.round((cats.length * 100) / peopleMap.length);

  const answerTwoDone = "Cat is the second most common specie among Ghibli characters with " + catsPercent + "% and only " + witchPercent + "% of them are witches."

  return answerTwoDone
}

export const ageTrivia = (data) => {

  const peopleMap = data.films.flatMap(element => element.people);

  const young = peopleMap.filter(people => people.age < 18);
  const youngPercent = Math.round((young.length * 100) / peopleMap.length);

  const youngs = peopleMap.filter(people => ["Young", "Child", "Teenager", "12-14", "circa 14-17"].includes(people.age));
  const youngPercents = Math.round((youngs.length * 100) / peopleMap.length);

  const totalYoung = youngPercent + youngPercents

  const na = peopleMap.filter(people => ["NA", "unknown", "", "Unknown"].includes(people.age));
  const naPercent = Math.round((na.length * 100) / peopleMap.length);

  const adults = 100 - (totalYoung + naPercent)

  const answerThreeDone = adults + "% of the characters are adults, " + totalYoung + "% are under 18 and " + naPercent
    + "% are of unknown age."
  return answerThreeDone
}