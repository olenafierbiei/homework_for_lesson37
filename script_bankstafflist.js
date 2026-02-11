// Клас, що описує працівника
class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

// Клас для генерації HTML-таблиці
class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  // Метод для створення HTML-коду
  getHtml() {
    let html = `<table class="bank-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>`;

    this.employees.forEach(emp => {
      html += `
                <tr>
                    <td>${emp.name}</td>
                    <td>${emp.position}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}€</td>
                </tr>`;
    });

    html += `</tbody></table>`;
    return html;
  }
}

// Створюємо масив працівників
const bankStaff = [
  new Employee("Olena Ferbey", "Full Stack Developer", "IT", 1500),
  new Employee("John Fang", "Security Specialist", "Data Vault", 2000),
  new Employee("Hanna Wilson", "Cloud Manager", "Infrastructure", 2000),
  new Employee("Max Weber", "Financial Analyst", "Economy", 2500)
];
document.addEventListener('DOMContentLoaded', () => {
  // Створюємо об'єкт таблиці
  const tableGenerator = new EmpTable(bankStaff);

  // Знаходимо контейнер і вставляємо згенерований HTML
  const container = document.getElementById('tableContainer');
  if (container) {
    container.innerHTML = tableGenerator.getHtml();
  }
});