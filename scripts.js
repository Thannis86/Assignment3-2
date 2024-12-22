const mainCookie = (document.getElementById("cookie").style.cursor = "pointer");
const mCookieBtn = document.querySelector("#mainCookie");
const mCount = document.querySelector("#mainCount");
const save = document.querySelector("#save");
const load = document.querySelector("#load");
const start = document.querySelector("#start");
const timerLvl = document.querySelector("#timerLvl");

let mainvalue = 0;
let store02 = 0;

save.addEventListener("click", function () {
  localStorage.setItem("mainvalue", mainvalue);
  localStorage.setItem("store01", store01);
  localStorage.setItem("store02", store02);
});

async function cookieAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);

  timerLvl.textContent = `Current: ${data[store02].name} Upgrade Cost: ${data[store02].cost}`;

  function startTimer() {
    const cookieTimer = setInterval(function () {
      mainvalue += data[store02].increase;
      mCount.textContent = mainvalue;
    }, 1000);
  }

  timerLvl.addEventListener("click", function () {
    if (mainvalue > data[store02].cost - 1) {
      mainvalue -= data[store02].cost;
      store02 = data[store02].id++;
      timerLvl.textContent = `Current: ${data[store02].name} Upgrade Cost: ${data[store02].cost}`;
      console.log(store02);
    }
  });

  let started = false;
  console.log(started);

  start.addEventListener("click", function () {
    startTimer();
    start.style.display = "none";
    load.style.display = "none";
    started = true;
    console.log(started);
  });

  load.addEventListener("click", function () {
    mainvalueret = localStorage.getItem("mainvalue");
    mainvalue = JSON.parse(mainvalueret);
    store01 = localStorage.getItem("store01");
    store02 = localStorage.getItem("store02");
    timerLvl.textContent = `Current: ${data[store02].name} Upgrade Cost: ${data[store02].cost}`;
    startTimer();
    start.style.display = "none";
    load.style.display = "none";
    started = true;
    console.log(started);
  });

  mCookieBtn.addEventListener("click", function () {
    if (started === true) {
      mainvalue += data[store02].increase;
      mCount.textContent = mainvalue;
    }
  });
}

cookieAPI();
