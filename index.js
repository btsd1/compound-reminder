// import {Finance} from 'financejs'

const btn = document.getElementById('generator')
const factShower = document.getElementById('random_fact')

const adjectives = ['Curious', 'Interesting', 'Amazing', 'Shocking', 'Astounding', 'Surprising']
// let finance = new Finance()
const generateFact = () => {
    let contribution =  (Math.floor(Math.random() * 30) + 1) * 1000;
    let rateOfReturn = .07
    let years = (Math.floor(Math.random()*30 + 1))
    let total = 0;
    for (let i = 1; i < years; i++){
        // let thisYearsContribution = finance.CI(Math.floor(rateOfReturn*100),1,contribution,i)
        // total += thisYearsContribution
    }
    let randomAdj = adjectives[Math.floor(Math.random()*6 + 1)]

    total = Math.floor(total + contribution)
    // factShower.innerText = `Hello there! A contribution of ${contribution} for ${years} years at ${Math.floor(rateOfReturn*100)}% will result in ${total}`
    factShower.innerText = `Compound interest is ${randomAdj}`

    // console.log()

}

// generateFact()
btn.addEventListener('click', generateFact)
