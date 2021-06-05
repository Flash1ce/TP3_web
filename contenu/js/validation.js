'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
  obtenirLundi()
  document.getElementById('genererRapport').addEventListener('click', recupererDonnees)
})

function lancerValidation (nom, naissance, sexe, situation) {
  let continuer = 'true'
  while (continuer === 'true') {
    continuer = validerNom(nom)
    continuer = validerDate(naissance)
    continuer = validerSexe(sexe)
    continuer = validerSituation(situation)
    continuer = validerMajeur(naissance)
    // const Restriction = document.getElementById('situation').value
    // const age = AppPhil.Date.obtenirAge(naissance)
    // const Recommandations = AppPhil.EducAlcool.obtenirRecommandations(sexe)
    // const message = (nom + ' (' + sexe + ')' + '</br>' + age + 'âge' + '</br>' + Restriction + '</br>' + Recommandations)
    // document.getElementById('rapport').innerHTML = message
  }
}
function recupererDonnees () {
  const nom = document.getElementById('nom').value
  let naissance = new Date()
  naissance = document.getElementById('naissance').value
  console.log(naissance)
  const sexe = document.getElementsByName('sexe').value
  const situation = document.getElementById('situation').value
  const donneeDepart = document.AppPhil.GenerationContenu.genererJours()
  lancerValidation(nom, naissance, sexe, situation, donneeDepart)
}
function validerNom (unNom) {
  let nomValide = Boolean(true)
  // console.log(nom)
  for (let index = 0; index <= unNom.length; index++) {
    const indexFin = index + 1
    const caractere = unNom.substring(index, indexFin)
    if (caractere === '(' || caractere === ')' || caractere === '{' || caractere === '}') {
      nomValide = false
    }
  }

  if (unNom === '' || unNom === undefined || unNom.length < 2) {
    nomValide = false
  }

  if (nomValide === true) {
    document.getElementById('nomInvalide').className = 'alert alert-danger none'
    document.getElementById('genererRapport').className = 'btn btn-primary btn-block'
    return 'true'
  } else {
    document.getElementById('nomInvalide').className = 'alert alert-danger'
    document.getElementById('genererRapport').className = 'btn btn-primary btn-block disabled'
    return 'false'
  }
}

function validerDate (date) {
  console.log('ligne 57 valider date')
  const aujourdhui = Date.getDate
  if (date > aujourdhui) {
    return 'false'
  } else {
    return 'true'
  }
}
function validerSexe (sexe) {
  if (sexe === '' || sexe === undefined) {
    return 'false'
  } else {
    return 'true'
  }
}
function validerSituation (situation) {
  if (situation === '') {
    return 'false'
  } else {
    return 'true'
  }
}
function validerMajeur (Naissance) {
  let LaDateNaissance = new Date()
  LaDateNaissance = Naissance
  const age = document.AppPhil.Date.obtenirAge(LaDateNaissance)
  if (age < 18) {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
    document.getElementById('myModal').showModal()
    return false
  } else {
    return true
  }
}
function obtenirLundi () {
  let aujourdhui = new Date()
  // retourn jours semainge genre samedi = 6 dimanche = 1 lundi = 1 ect....
  aujourdhui = aujourdhui.getDay()
  console.log(aujourdhui)
  let dateDimanche = new Date()
  dateDimanche = document.AppPhil.Date.obtenirDimancheDeLaSemaine(aujourdhui)
  let dateLundi = new Date()
  dateLundi = dateDimanche + 1
  console.log(dateLundi)
  document.getElementById('semaine').innerHTML = dateLundi
}

document.getElementById('genererRapport').addEventListener('click', function () {
  // Création de l'objet il vas probablement faloir remplir un truc du genre!!!---------------------------------------------------------------------
  const homme3 = new AppPhil.Profil('Fleury', 'Philippe', 38, 'Homme', 'aucune_restriction', [3, 0, 0, 1, 2, 3, 4])

  const nom = document.getElementById('nom').value
  nom.split(' ')

  let naissance = new Date()
  naissance = document.getElementById('naissance').value
  const age = document.AppPhil.Date.obtenirAge(naissance).value

  const sexe = document.getElementsByName('sexe').value

  const Restriction = document.getElementById('situation').value

  const Recommandations = document.AppPhil.EducAlcool.obtenirRecommandations(sexe)

  const message = (nom + ' (' + sexe + ')' + '</br>' + age + 'âge' + '</br>' + Restriction + '</br>' + Recommandations)

  // NE PAS UTILISER INNERTHTML !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  document.getElementById('messageRapport').innerHTML = message
  document.AppPhil.GenerationContenu.genererGraphique()
})

document.getElementById('naissance').addEventListener('change', function () {
  const uneDate = document.getElementById('naissance').value
  validerDate(uneDate)
})

document.getElementById('nom').addEventListener('blur', function () {
  const unNom = document.getElementById('nom').value
  validerNom(unNom)
})
