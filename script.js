const characterEle = document.getElementById("character");
const block = document.getElementById("block");
let count = 0;
const jump = () => {
  if (characterEle.classList != "animate") {
    characterEle.classList.add("animate");
  }
  setTimeout(() => {
    characterEle.classList.remove("animate");
  }, 500);
};

const checkDead = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  //   console.log("cha top >> ", characterTop);
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  //   console.log("block left >> ", blockLeft);
  if (blockLeft > 0 && blockLeft < 20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("You Loose The Game - Your Score: " + Math.floor(count / 100));
    console.log(
      " ------------------------ game over ----------------",
      blockLeft,
      characterTop
    );
    count = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    count++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(count / 100);
  }
}, 10);
