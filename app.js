let body = document.querySelector('body')
let mainMenu = document.querySelector('#mainMenu')
let playBtn = document.querySelector('.Play')
let infoBtn = document.querySelector('.info')
let username = document.querySelector('.username')
let wrongUsername = document.querySelector('.wrongUsername')

wrongUsername.setAttribute('class', 'hidden')

let [giff1, giff2] = document.querySelectorAll('#giff')

giff1.classList = 'hidden'
giff2.classList = 'hidden'

let gradient = document.getElementById('gradient')
let resultEl = document.getElementById('result')
let targetEl = document.querySelector('.target')
let [score, combo, every] = document.querySelectorAll('.score')

let tryAgainBtn = document.querySelector('#tryAgain')
tryAgainBtn.setAttribute('class', 'hidden')

let gameDiv = document.querySelector('#game')

let mainDivForInfo = document.createElement('div')



function removeChildFromInfoDiv() {
    mainMenu.removeChild(mainDivForInfo)

    infoBtn.disabled = false
}

function infoOpen() {

    if (mainDivForInfo.childNodes.length == 0) {

        mainDivForInfo.setAttribute('class', 'info-text')

        let h2El = document.createElement('h2')
        h2El.textContent = 'Welcome to our game :)'

        let divWithInfo = document.createElement('div')

        let p1 = document.createElement('p')
        p1.textContent = 'Its idea is: You get a target with an integer percentage, which you have to hit the same percentage number that is set as a target. You receive points for each bullseye. You receive combo points that increase for every bullseye in a row. If you make a mistake, your combo points resets! The game ends when you make 11 combos in a row. Good luck!'

        let closeBtn = document.createElement('button')
        closeBtn.textContent = 'Close'
        closeBtn.setAttribute('class', 'info')

        closeBtn.addEventListener('click', removeChildFromInfoDiv)

        divWithInfo.appendChild(p1)

        mainDivForInfo.appendChild(h2El)
        mainDivForInfo.appendChild(divWithInfo)
        mainDivForInfo.appendChild(closeBtn)

    }
    mainMenu.appendChild(mainDivForInfo)

    infoBtn.disabled = true
}

infoBtn.addEventListener('click', infoOpen)

username.addEventListener('change', (e) => {

    if (username.value.length > 3 && username.value.length <= 12) {
        wrongUsername.setAttribute('class', 'hidden')
    } else {
        wrongUsername.setAttribute('class', 'wrongUsername')
        setTimeout(() => {
            wrongUsername.setAttribute('class', 'hidden')
        }, 7000);
    }

})

playBtn.addEventListener('click', (e) => {

    if (username.value.length > 3 && username.value.length <= 12) {
        gameDiv.classList.remove('hidden')
        mainMenu.classList = 'hidden'
    } else {
        wrongUsername.setAttribute('class', 'wrongUsername')
        setTimeout(() => {
            wrongUsername.setAttribute('class', 'hidden')
        }, 7000);
    }
})
let point = 0
let everyClick = 0
let comboCount = 0

function attachGradientEvents() {

    score.textContent = `Score: ${point} <-> `
    combo.textContent = `Combo: ${comboCount} <-> `
    every.textContent = `Every click: ${everyClick}`

    let randomNum = (Math.random() * 100).toFixed(0)

    targetEl.textContent = `Your target is ${randomNum}%`

    let doneText = ['Very nice u are awesome!', 'Thats what i mean', 'Very good', 'Perfectly', 'Hehe, my apologies', 'Congrats', 'Well done']

    let gradientMousemoveEl = (e) => {
        everyClick++

        gradient.removeEventListener('click', gradientMousemoveEl)
        tryAgainBtn.disabled = false

        every.textContent = `Every click: ${everyClick}`

        let percent = Math.ceil((e.offsetX / e.target.clientWidth) * 100)

        resultEl.textContent = `Your result is: ${percent}%`

        if (percent == randomNum) {

            giff1.classList = 'giff'
            giff2.classList = 'giff1'
            let randomTextForDone = Math.floor(Math.random() * doneText.length)
            gradient.textContent = doneText[randomTextForDone]

            comboCount++

            if (comboCount >= 2) {
                combo.textContent = `Combo: ${comboCount} <-> `
                if (comboCount == 2) {
                    gradient.textContent = 'AWESOME!'
                } else if (comboCount == 3) {
                    gradient.textContent = 'U are lucky'
                } else if (comboCount == 4) {
                    gradient.textContent = 'Are u cheating?'
                } else if (comboCount == 5) {
                    gradient.textContent = 'No way..'
                } else if (comboCount == 6) {
                    gradient.textContent = 'Imposibro!'
                } else if (comboCount == 7) {
                    gradient.textContent = 'LOL, howw?!?'
                } else if (comboCount == 8) {
                    gradient.textContent = 'U are not a human'
                } else if (comboCount == 9) {
                    gradient.textContent = 'Godlike'
                } else if (comboCount == 10) {
                    gradient.textContent = 'nmn GodeMode ON'
                } else if (comboCount == 11) {
                    gradient.textContent = 'Unstoppable'

                    tryAgainBtn.disabled = true

                    setTimeout(() => {
                        gameDiv.classList = 'hidden'

                        let arr = [point, everyClick, comboCount]

                        let divForFinal = document.createElement('div')
                        let divForAllPoints = document.createElement('div')

                        let h3ScoreEl = document.createElement('h3')
                        h3ScoreEl.setAttribute('class', 'score')
                        h3ScoreEl.textContent = `Score: ${arr[0]} <-> `

                        let h3ComboEl = document.createElement('h3')
                        h3ComboEl.setAttribute('class', 'score')
                        h3ComboEl.textContent = `Combo: ${arr[1]} <-> `

                        let h3EveryEl = document.createElement('h3')
                        h3EveryEl.setAttribute('class', 'score')
                        h3EveryEl.textContent = `Every click: ${arr[2]}`

                        let h1El = document.createElement('h1')
                        h1El.textContent = 'FINISH u are awesome'
                        h1El.setAttribute('class', 'finish')

                        let newGameBtn = document.createElement('button')
                        newGameBtn.textContent = 'New Game'
                        newGameBtn.setAttribute('class', 'newGameBtn')
                        newGameBtn.addEventListener('click', (e) => {

                            point = 0
                            everyClick = 0
                            comboCount = 0

                            gameDiv.classList.remove('hidden')
                            body.removeChild(divForFinal)

                            gradient.addEventListener('click', gradientMousemoveEl)

                            randomNum = (Math.random() * 100).toFixed(0)

                            targetEl.textContent = `Your target is ${randomNum}%`

                            gradient.style.background = 'black'
                            gradient.style.color = '#00000085'

                            resultEl.textContent = `Your result is: 0%`

                            tryAgainBtn.setAttribute('class', 'hidden')

                            gradient.textContent = 'Hover here'

                            score.textContent = `Score: ${point} <-> `
                            combo.textContent = `Combo: ${comboCount} <-> `
                            every.textContent = `Every click: ${everyClick}`

                            giff1.classList = 'hidden'
                            giff2.classList = 'hidden'

                            tryAgainBtn.disabled = true
                        })

                        divForAllPoints.appendChild(h3ScoreEl)
                        divForAllPoints.appendChild(h3ComboEl)
                        divForAllPoints.appendChild(h3EveryEl)

                        divForFinal.appendChild(h1El)
                        divForFinal.appendChild(divForAllPoints)
                        divForFinal.appendChild(newGameBtn)

                        body.appendChild(divForFinal)
                    }, 3000);
                }
            }
            tryAgainBtn.setAttribute('class', 'tryAgain')
            tryAgainBtn.textContent = 'Done'

            point++
            gradient.style.background = 'green'
            gradient.style.color = 'black'

            score.textContent = `Score: ${point} <-> `

        } else {
            tryAgainBtn.setAttribute('class', 'tryAgain')
            tryAgainBtn.textContent = 'Try Again'

            gradient.style.background = 'black'
            gradient.style.color = '#00000085'

            comboCount = 0

            combo.textContent = `Combo: ${comboCount} <-> `

            let diffNum = (Number(Math.max(percent, randomNum)) - Number(Math.min(percent, randomNum))) // Vlqdi nau4i neshto qko ot men
            diffNum = Number(diffNum)

            if (diffNum == 1) {
                gradient.textContent = 'Come on u are almost right'
            } else if (diffNum > 1 && diffNum <= 5) {
                gradient.textContent = 'Mmm, almost but not enough'
            } else if (diffNum > 5 && diffNum <= 10) {
                gradient.textContent = 'U can better...'
            } else if (diffNum > 10 && diffNum <= 20) {
                gradient.textContent = 'Hehe, try again :)'
            } else if (diffNum > 20 && diffNum <= 50) {
                gradient.textContent = 'Lol, try again and be carefull'
            } else if (diffNum > 50 && diffNum <= 60) {
                gradient.textContent = 'Mm, bad but stay positive'
            } else if (diffNum > 60 && diffNum <= 75) {
                gradient.textContent = 'Go check your eyes, dude'
            } else if (diffNum > 75 && diffNum <= 95) {
                gradient.textContent = 'Seriously, u have a problem.//'
            } else if (diffNum > 95 && diffNum <= 100) {
                gradient.textContent = 'Terrible...'
            }
        }
    }
    gradient.addEventListener('click', gradientMousemoveEl)

    tryAgainBtn.addEventListener('click', () => {
        gradient.addEventListener('click', gradientMousemoveEl)

        randomNum = (Math.random() * 100).toFixed(0)

        targetEl.textContent = `Your target is ${randomNum}%`

        gradient.style.background = 'black'
        gradient.style.color = '#00000085'

        resultEl.textContent = `Your result is: 0%`

        tryAgainBtn.setAttribute('class', 'hidden')

        gradient.textContent = 'Hover here'

        giff1.classList = 'hidden'
        giff2.classList = 'hidden'

        tryAgainBtn.disabled = true
    })
}