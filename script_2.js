num = prompt("De quel nombre veut tu calculer la factorielle ?")// Un prompt s'affiche avec la question suivante

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(`le résultat est :${factorialize(num)}`);
// Utilisateur rentre un nomb
