function createGame(player1, hour, player2) {
  let player1art = player1.slice(-1) === "a" ? "da" : "do"
  let player2art = player2.slice(-1) === "a" ? "da" : "do"
  return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1art} ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2art} ${player2}">
</li>
    `
}
let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class = "card" style ="animation-delay: ${delay}">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>

    `
}
document.querySelector("#cards").innerHTML =
    createCard("20/11", "domingo (ESTREIA)", createGame("qatar", "13:00", "ecuador" ))  +
    createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
    createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
    createGame("portugal", "16:00", "uruguay") + 
    createGame("cameroon", "07:00", "serbia") +
    createGame("south-korea", "10:00", "ghana")
  ) +
  createCard(
    "02/12", 
    "sexta", 
  createGame("brazil", "16:00", "cameroon") +
  createGame("south-korea", "12:00", "portugal") +
  createGame("ghana", "12:00", "uruguay",) +
  createGame("serbia", "16:00", "switzerland")
  )
