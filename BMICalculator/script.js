const form = document.querySelector("form");
// this usecase will give you empty
//  const height = parseInt(document.querySelector('#height').value)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    res.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    res.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * weight)/ 10000)).toFixed(2)
    res.innerHTML = `<span>${bmi}</span>`
  }
});
