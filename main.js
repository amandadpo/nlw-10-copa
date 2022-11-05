function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="assest/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="assest/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>   
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return`
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard("24/11", "quinta", createGame('brazil','16:00', 'serbia')) +
    createCard("28/11", "segunda", createGame('brazil','13:00', 'switzerland')) +
    createCard("02/12", "sexta", createGame('brazil','16:00', 'cameroon'))+
    createCard("03/12", "oitavas de final", createGame('?','12:00', '?')+ createGame('?','16:00','?'))+
    createCard("04/12", "oitavas de final", createGame('?','12:00', '?')+ createGame('?','16:00','?'))+
    createCard("05/12", "oitavas de final", createGame('?','12:00', '?')+ createGame('?','16:00','?'))+
    createCard("06/12", "oitavas de final", createGame('?','12:00', '?')+ createGame('?','16:00','?'))+
    createCard("09/12", "quartas de final", createGame('?','12:00', '?')+ createGame('?','16:00','?'))+
    createCard("10/12", "quartas de final", createGame('?','12:00', '?')+ createGame('?','16:00','?'))+
    createCard("13/12", "semifinais", createGame('?','16:00', '?'))+
    createCard("14/12", "semifinais", createGame('?','16:00', '?'))+
    createCard("17/12", "disputa pelo terceiro lugar", createGame('?','12:00', '?'))+
    createCard("18/12", "final", createGame('?','12:00', '?'))
    



