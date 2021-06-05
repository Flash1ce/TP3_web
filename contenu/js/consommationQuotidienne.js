'use strict'
// document.addEventListener('DOMContentLoaded', function (event) {
// })

document.querySelectorAll('.btn-group .btn-secondary').forEach(function (elem) {
  elem.addEventListener('click', function () {
    const divSemaine = elem.parentElement.parentElement
    const divLesConsomation = document.createElement('div')

    divLesConsomation.id = divSemaine.getElementsByTagName('h3')
    divLesConsomation.id = 'LesConsomation'

    const inputVolumeConsomme = document.createElement('input')
    inputVolumeConsomme.type = 'text'

    const inputTeneurAlcool = document.createElement('input')
    inputTeneurAlcool.type = 'text'

    const volumeConsomme = document.createElement('p')
    volumeConsomme.textContent = 'volume consommé'
    volumeConsomme.style.color = 'white'

    const teneurAlcool = document.createElement('p')
    teneurAlcool.textContent = 'la teneur en alcool de la consommation. '
    teneurAlcool.style.color = 'white'

    divSemaine.appendChild(divLesConsomation)

    divLesConsomation.appendChild(volumeConsomme)
    divLesConsomation.appendChild(inputVolumeConsomme)

    divLesConsomation.appendChild(teneurAlcool)
    divLesConsomation.appendChild(inputTeneurAlcool)
  }
  )
})

