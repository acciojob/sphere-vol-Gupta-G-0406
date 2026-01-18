function volume_sphere() {
  let radius = parseFloat(document.getElementById("radius").value);

  let volume;
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
  }

  document.getElementById("volume").value = volume;
  return false;
}

window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
