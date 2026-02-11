// Класи залишаються тими ж самими
class Marker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }

  printToElement(text, elementId, inkIndicatorId, inkValueId) {
    const element = document.getElementById(elementId);
    const indicator = document.getElementById(inkIndicatorId);
    const valueSpan = document.getElementById(inkValueId);

    let resultSpan = document.createElement('span');
    resultSpan.style.color = this.color;

    for (let char of text) {
      if (char !== " ") {
        if (this.inkAmount >= 0.5) {
          resultSpan.textContent += char;
          this.inkAmount -= 0.5;
        } else {
          break;
        }
      } else {
        resultSpan.textContent += char;
      }
    }

    element.appendChild(resultSpan);
    // Додаємо пробіл після кожного вводу
    element.innerHTML += " ";

    // Оновлюємо візуал індикатора
    indicator.style.width = this.inkAmount + "%";
    valueSpan.innerText = Math.max(0, this.inkAmount) + "%";
  }
}

class RefillableMarker extends Marker {
  refill(indicatorId, valueId) {
    this.inkAmount = 100;
    document.getElementById(indicatorId).style.width = "100%";
    document.getElementById(valueId).innerText = "100%";
  }
}

// Ініціалізація
const myMarker = new RefillableMarker("#9C69E2", 100);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('printBtn').addEventListener('click', () => {
    const text = document.getElementById('markerTextInput').value;
    myMarker.printToElement(text, 'paper', 'inkLevel', 'inkValue');
    document.getElementById('markerTextInput').value = ""; // очистити поле
  });

  document.getElementById('refillBtn').addEventListener('click', () => {
    myMarker.refill('inkLevel', 'inkValue');
    document.getElementById('paper').innerText = ""; // очистити папір при заправці
  });
});
