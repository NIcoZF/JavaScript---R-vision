var n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramide(n) {
let i = " "
let j = "#"
for(let a = 1; a <= n; a++)
{
  console.log(i.repeat(n-a)+j.repeat(a))
}}

console.log(pyramide(n));
