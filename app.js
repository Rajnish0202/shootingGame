// Declaring Initial Health of Players

let player1 = 100;
let player2 = 100;

// Function On Click Shoot

function shoot() {
  // Getting Power

  // const Hero1Img = document.querySelector(".hero1 img");
  // const Hero2Img = document.querySelector(".hero2 img");

  // Hero1Img.classList.add("active");
  // Hero2Img.classList.add("active");

  let hero1 = Math.floor(Math.random() * 5 + 1);
  let hero2 = Math.floor(Math.random() * 5 + 1);

  let points = 0;

  console.log("Hero1: " + hero1);
  console.log("Hero2: " + hero2);

  document.getElementById("power1").innerHTML = hero1;
  document.getElementById("power2").innerHTML = hero2;

  player1 = player1 - hero2;
  player2 = player2 - hero1;

  if (player1 <= 0) {
    player1 = 0;
  }

  if (player2 <= 0) {
    player2 = 0;
  }

  console.log("Hero1:" + player1);
  console.log(typeof ("Hero2:" + player2));

  document.getElementById("health1").innerHTML = player1;
  document.getElementById("health2").innerHTML = player2;

  if (player1 == 0) {
    document.getElementById("win1").classList.remove("active");
    document.getElementById("win2").classList.add("active");
    document.querySelector("button").disabled = true;
    document.querySelector("button").style.cursor = "not-allowed";
    localStorage.setItem("player1", points);
    points = ++points;
    document.getElementById("point2").innerHTML = points;
    localStorage.setItem("player2", points);
  }

  if (player2 == 0) {
    document.getElementById("win1").classList.add("active");
    document.getElementById("win2").classList.remove("active");
    document.querySelector("button").disabled = true;
    document.querySelector("button").style.cursor = "not-allowed";
    localStorage.setItem("player2", points);
    points = ++points;
    document.getElementById("point1").innerHTML = points;
    localStorage.setItem("player1", points);
  }
}
