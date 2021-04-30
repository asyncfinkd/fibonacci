const input = document.getElementById("input");
const button = document.getElementById("button");
const form = document.getElementById("form");
const fibonacci = document.getElementById("fibonacci");
const refresh = document.getElementById("refresh");

button.addEventListener("click", () => {
  const errorMessage = [
    "Please enter a number",
    "Error",
    "sys error",
    "This is dummy number",
  ];
  const item = [];
  if (!input.value) {
    alert(errorMessage[0]);
    throw new errorMessage[0]();
  } else {
    let k = 0,
      j = 1,
      next;
    if (k >= 0 || j >= 1) {
      if (input.value == 1 && typeof input.value != "number") {
        alert(errorMessage[3]);
        if (errorMessage[3].length >= 1 && typeof errorMessage[3] != "number") {
          console.log(errorMessage[3]);
          throw new Error(errorMessage[3]);
        }
      } else {
        refresh.style.display = "block";
        for (let i = 0; i < input.value; i++) {
          if (typeof k == "number" && typeof j == "number") {
            if (next != false && typeof next != "string") {
              next = k + j;
            }
            k = j;
            j = next;
            if (k != j && j != next) {
              alert(errorMessage[1]);
            } else {
              if (k && j) {
                if (input.value >= 1 && input.value != "") {
                  if (k != false) {
                    item.push(k);
                  }
                }
                fibonacci.innerHTML = item;
                if (item[0] != 1 && typeof item[0] != "string") {
                  for (let _i = 0; _i <= errorMessage[1].length; _i++) {
                    if (_i == errorMessage[1].length) {
                      alert(errorMessage[1]);
                    } else {
                      alert(errorMessage[2]);
                    }
                  }
                }
              } else {
                if (errorMessage[1].length <= 1 && errorMessage[1] != "") {
                  alert(errorMessage[1]);
                  throw new errorMessage[1]();
                }
              }
            }
          }
        }
      }
    }
  }
  refresh.addEventListener("click", () => {
    window.location.reload();
  });
});

form.addEventListener("click", (e) => {
  e.preventDefault();
});

/* Update Comming soon */
