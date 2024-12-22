const mainCookie = (document.getElementById("cookie").style.cursor = "pointer");
const mCookieBtn = document.querySelector("#mainCookie");
const mCount = document.querySelector("#mainCount");
const save = document.querySelector("#save");
const load = document.querySelector("#load");
const start = document.querySelector("#start");
const cookieLvl = document.querySelector("#cookieLvl");
const timerLvl = document.querySelector("#timerLvl");

let mainvalue = 0;
let store01 = 0;
let store02 = 0;

async function cookieAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);

  function startTimer() {
    const cookieTimer = setInterval(function () {
      mainvalue += data[store02].increase;
      mCount.textContent = mainvalue;
    }, 1000);
  }

  start.addEventListener("click", function () {
    startTimer();
    start.style.display = "none";
  });
}

cookieAPI();
