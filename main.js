function createGame(player1, hour, player2) {
    let player1art = player1.slice(-1) === 'a' ? 'da' : 'do';
    let player2art = player2.slice(-1) === 'a' ? 'da' : 'do';                       
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1art} ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2art} ${player2}">
</li>
    `
}

function createCard (date, day, games) {
    return `
    <div class = "card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>

    `
}

document.querySelector('#cards').innerHTML = 
createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
createCard('28/11', 'segunda', createGame('switzerland', '13:00', 'brazil') +
createGame('portugal', '16:00', 'uruguay')) +
createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))
