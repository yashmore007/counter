// function ProtectCount() {
//   let count = 0;

//   this.increaseCount = function () {
//     ++count;
//   };

//   this.decreaseCount = function () {
//     --count;
//   };

//   this.resetCount = function () {
//     count = 0;
//   };

//   this.getCurrentCount = function () {
//     return count;
//   };
// }

class Counter {
  #count = 0;

  increase() {
    this.#count++;
  }

  decrease() {
    this.#count--;
  }

  reset() {
    this.#count = 0;
  }

  getCount() {
    return this.#count;
  }
}

const countObj = new Counter();

const counterPlace = document.getElementById("count");

const updateUi = function () {
  const currentCount = countObj.getCount();
  counterPlace.textContent = currentCount;
};

// document.getElementById("minus").addEventListener("click", () => {
//   countObj.decrease();
//   render();
// });

// document.getElementById("setZero").addEventListener("click", () => {
//   countObj.reset(); //sets count variable to zero
//   render();
// });

// document.getElementById("add").addEventListener("click", () => {
//   countObj.increase();
//   render();
// });

document.getElementById("btn").addEventListener("click", (e) => {
  if (e.target.id === "minus") countObj.decrease();
  else if (e.target.id === "add") countObj.increase();
  else if (e.target.id === "setZero") countObj.reset();
  else return;
  updateUi();
});
