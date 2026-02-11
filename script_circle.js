// 1. Оголошуємо клас ТІЛЬКИ ОДИН РАЗ
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      console.error("Радіус має бути додатним!");
      return;
    }
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

// 2. Логіка взаємодії з HTML
function draw() {
  const rInput = document.getElementById('radiusInput').value;
  const radius = parseFloat(rInput);

  if (isNaN(radius) || radius <= 0) {
    alert("Будь ласка, введіть коректне число");
    return;
  }

  const myCircle = new Circle(radius);
  const circleEl = document.getElementById('visualCircle');

  // Встановлюємо розміри (діаметр)
  const size = myCircle.diameter + "px";
  circleEl.style.width = size;
  circleEl.style.height = size;

  // Виводимо дані
  document.getElementById('areaVal').innerText = myCircle.calculateArea().toFixed(2);
  document.getElementById('lengthVal').innerText = myCircle.calculateCircumference().toFixed(2);
}

// 3. Чекаємо завантаження DOM і вішаємо подію на кнопку
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('drawBtn');
  if (btn) {
    btn.addEventListener('click', draw);
  }
});