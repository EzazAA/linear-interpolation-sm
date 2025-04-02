document.addEventListener("DOMContentLoaded", function () {
    const fSlider = document.getElementById("fSlider");
    const lSlider = document.getElementById("lSlider");
    const middleBox = document.querySelector(".middle");
    const firstBox = document.querySelector(".first");
    const lastBox = document.querySelector(".last");
  
    // Function to perform linear interpolation
    function linearInterpolation(a, b, x) {
      const xA = 0; // Position of point A
      const xB = 1; // Position of point B
      return a + ((b - a) * (x - xA)) / (xB - xA); // Interpolating at position x
    }
  
    function updateMoisture() {
      const a = parseFloat(fSlider.value);
      const b = parseFloat(lSlider.value);
      const mid = linearInterpolation(a, b, 0.5); // Interpolating at 0.5 meters
  
      // Update the background color intensity based on moisture level
      firstBox.style.backgroundColor = `rgb(0, 0, ${a * 2.55})`;
      lastBox.style.backgroundColor = `rgb(0, 0, ${b * 2.55})`;
      middleBox.style.backgroundColor = `rgb(0, 0, ${mid * 2.55})`;
    }
  
    // Set initial values
    fSlider.value = 50;
    lSlider.value = 50;
    updateMoisture();
  
    // Add event listeners
    fSlider.addEventListener("input", updateMoisture);
    lSlider.addEventListener("input", updateMoisture);
  });
  