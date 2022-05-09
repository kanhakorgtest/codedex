let userName = "Your Name";

let streakDates = [
  new Date('3/5/2022'),
  new Date('3/6/2022'),
  new Date('3/7/2022'),
  new Date('3/8/2022'),
];

let currentStreak = 0;

let totalCompleted = 0;
let totalXP = 0;

initLocalStorage();
initStats();

calculateCurrentStreak();

// showResult();

function initLocalStorage() {

  const storedUserName = window.localStorage.getItem('userName');
  const storedCurrentStreak = window.localStorage.getItem('currentStreak');
  const storedStreakDates = JSON.parse(window.localStorage.getItem('streakDates'));
  
  if (!storedCurrentStreak) {
    window.localStorage.setItem('currentStreak', currentStreak);
  } else {
    currentStreak = Number(storedCurrentStreak);
  }

  if (!storedStreakDates) {
    window.localStorage.setItem('streakDates', streakDates);
  } else {
    streakDates = storedStreakDates;
  }

  if (!storedUserName) {
    window.localStorage.setItem('userName', userName);
  } else {
    userName = storedUserName;
  }
 
  console.log("original:", streakDates)
}

// function updateExpPoints() {
//   window.localStorage.setItem('expPoints', xp+10);
// }

// function showResult() {
//   const currentStreak = window.localStorage.getItem("currentStreak") || 0;
//   window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);

// }

function updateUserName() {
  var contenteditable = document.querySelector('[contenteditable]');
  var text = contenteditable.textContent;

  window.localStorage.setItem('userName', text);
}

function calculateCurrentStreak() {

  let today = new Date();

  console.log("today: ", today);
  console.log("last: ", streakDates.slice(-1)[0]);
  console.log("difference: ", today - streakDates.slice(-1)[0]);

  
  const lastDate = streakDates.slice(-1)[0];
  // console.log("last date: " + lastDate);

  if ( today.toDateString() === lastDate.toDateString() ) {

    console.log("Do nothing");

  } else if ((today - streakDates.slice(-1)[0] ) > 172800000) {

    console.log("Missed yesterday. Reset.");
    streakDates = [];

    let today2 = new Date();
    console.log("today2", today2)

    streakDates.push(today2.toDateString());

    console.log(streakDates);
    //PROBLEM!!!
    console.log(JSON.stringify(streakDates));

    window.localStorage.setItem('streakDates', JSON.stringify(streakDates));
    window.localStorage.setItem('currentStreak', 1);
  } 
  else {
    console.log("Did it yesterday");
    streakDates.push(today);

    console.log(streakDates);
    window.localStorage.setItem('currentStreak', Number(currentStreak) + 1);
  }
}

function initStats() {

  const userName = window.localStorage.getItem("userName");
  document.getElementById("userName").innerHTML = userName;

  const currentStreak = window.localStorage.getItem("userName");

  // When Start button is clicked
  // const startButtons = document.getElementById("start-button");
  // const startButtons = document.getElementsByClassName("is-primary");
  
  const startButtons = document.querySelectorAll('.is-primary');

  // startButtons.forEach(el => el.addEventListener('click', event => {
  //   updateTotalStarted();
  // }));

  // startButtons.addEventListener("click", function () {
  //   updateTotalStarted();
  // })
}