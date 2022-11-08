function getFacts() {
  let name = prompt("What is your name?");
  let haveCats = prompt("Do you have cats");
  haveCats = haveCats.toLowerCase().trim();
  let h6 = document.querySelector("h6");
  if (haveCats === "yes") {
    let h6 = document.querySelector("h6");
    h6.innerHTML =
      "That's Great" +
      ", " +
      name +
      "! <br /> We're both Cat Parents, then! 😊";
  } else {
    let h6 = document.querySelector("h6");
    h6.innerHTML =
      "That's Okay" +
      ", " +
      name +
      "! <br /> Cats can be hard to take care of! 😊";
  }
  if (haveCats === "yes" || haveCats === "no") {
    let h6 = document.querySelector("h6");
    h3.innerHTML =
      " <strong> FACT! </strong><br /> 🐈 Cats are believed to be the only mammals who don't taste sweetness🍬.";
  }
  if (haveCats === "yes") {
    alert("Extra Fact🤫: Cats can sleep 13 to 18 hours a day 😴.");
  }
}
let factsButton = document.querySelector("button");
factsButton.addEventListener("click", getFacts);
