import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const members = [...senators, ...representatives] // modern combining arrays

const senatorDiv = document.querySelector('.senators')
const seniorityHeading = document.querySelector('.seniority')
const weaselOrderedList = document.querySelector('.weaselList')

function simplifiedMembers(chamberFilter) {
  if(chamberFilter === "D" | chamberFilter === "R"){
    const filteredArray = members.filter(member => chamberFilter ? member.party === chamberFilter : member)
    return filteredArray.map(senator => {
      const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
      return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        party: senator.party,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
        gender: senator.gender,
        seniority: +senator.seniority,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct,
      }
    })
  }
  else{
    const filteredArray = members.filter(member => chamberFilter ? member.short_title === chamberFilter : member)
    return filteredArray.map(senator => {
      const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
      return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        party: senator.party,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
        gender: senator.gender,
        seniority: +senator.seniority,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct,
      }
    })
  }
}

populateSenatorDiv(simplifiedMembers())

function populateSenatorDiv(simpleSenators) {

  simpleSenators.forEach(senator => {
    let senFigure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL
    figCaption.textContent = senator.name
    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorDiv.appendChild(senFigure)
  })
}

//const filterSenators = (prop, value) => simplifiedSenators().filter(senator => senator[prop] === value)
  
//const republicans = filterSenators('party', 'R')
//const femaleSenators = filterSenators('gender', 'F')

//console.log(republicans, femaleSenators)

const mostSeniorMember = simplifiedMembers().reduce((acc, senator) => {
  return acc.seniority > senator.seniority ? acc : senator 
})

seniorityHeading.textContent = `The most senior member of Congress is ${mostSeniorMember.name} who has taken our tax dollars as salary for more than ${mostSeniorMember.seniority} years!`

const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  if(senator.loyaltyPct === 100) {
    acc.push(senator)
  }
  return acc
}, [])

const biggestWeasel = simplifiedMembers().reduce((acc, senator) => 
(acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator, {})

const biggestWeasels = simplifiedMembers().filter(senator => senator.missedVotesPct >= 50)

console.log(biggestWeasels)

biggestWeasels.forEach(weasel => {
  let listItem = document.createElement('li')
  listItem.textContent = weasel.name
  weaselOrderedList.appendChild(listItem)
})

// 'D', 'R', 'Rep.', 'Sen.'
document.getElementById("R").addEventListener("click", function() {
  removeChildren(document.getElementById("Senators"))
  populateSenatorDiv(simplifiedMembers("R"))
})
document.getElementById("D").addEventListener("click", function() {
  removeChildren(document.getElementById("Senators"))
  populateSenatorDiv(simplifiedMembers("D"))
})
document.getElementById("Rep").addEventListener("click", function() {
  removeChildren(document.getElementById("Senators"))
  populateSenatorDiv(simplifiedMembers("Rep."))
})
document.getElementById("Sen").addEventListener("click", function() {
  removeChildren(document.getElementById("Senators"))
  populateSenatorDiv(simplifiedMembers("Sen."))
})