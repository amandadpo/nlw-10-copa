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
    createCard("24/11", "Fase de grupos", createGame('brazil','16:00', 'serbia')) +
    createCard("28/11", "Fase de grupos", createGame('brazil','13:00', 'switzerland')) +
    createCard("02/12", "Fase de grupos", createGame('brazil','16:00', 'cameroon'))+
    createCard("03/12","Oitavas de final", createGame('netherlands','12:00','united states')+createGame('argentina','16:00','australia'))+
    createCard("04/12","Oitavas de final", createGame('france','12:00','poland')+createGame('england','16:00','senegal'))+
    createCard("05/12","Oitavas de final", createGame('japan','12:00','croatia')+createGame('brazil','16:00','southkorea'))+
    createCard("06/12","Oitavas de final", createGame('morocco','12:00','spain')+createGame('portugal','16:00','switzerland'))+
    createCard("09/12","Quartas de final", createGame('croatia','12:00','brazil')+createGame('netherlands','16:00','argentina'))+
    createCard("10/12","Quartas de final", createGame('morocco','12:00','portugal')+createGame('england','16:00','france'))+
    createCard("13/12","Semifinais", createGame('argentina','16:00','croatia'))+
    createCard("14/12","Semifinais", createGame('france','16:00','morocco'))+
    createCard("17/12","Terceiro lugar", createGame('x','12:00','x'))+
    createCard("18/12","Final", createGame('x','12:00','x'))