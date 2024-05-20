document.getElementById('getAllEmployees').addEventListener('click', fetchAllEmployees);
document.getElementById('getSingleEmployee').addEventListener('click', fetchSingleEmployee);
document.getElementById('createEmployee').addEventListener('click', createEmployee);
document.getElementById('updateEmployee').addEventListener('click', updateEmployee);
document.getElementById('deleteEmployee').addEventListener('click', deleteEmployee);

function fetchAllEmployees() {
  const url = 'https://reqres.in/api/users?page=2';
  fetch(url)
    .then(handleResponse)
    .then(data => {
      const resultContainer = document.getElementById('getAllEmployeesResult');
      resultContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchSingleEmployee() {
  const employeeId = document.getElementById('employeeId').value;
  const url = `https://reqres.in/api/users/${employeeId}`;
  fetch(url)
    .then(handleResponse)
    .then(data => {
      const resultContainer = document.getElementById('getSingleEmployeeResult');
      resultContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
      const resultContainer = document.getElementById('getSingleEmployeeResult');
      resultContainer.textContent = 'Unable to fetch employee data.';
    });
}

function createEmployee() {
  const name = document.getElementById('employeeName').value;
  const salary = document.getElementById('employeeSalary').value;
  const age = document.getElementById('employeeAge').value;
  const url = 'https://reqres.in/api/users';
  const data = { name, salary, age };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(handleResponse)
    .then(data => {
      const resultContainer = document.getElementById('createEmployeeResult');
      resultContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function updateEmployee() {
  const id = document.getElementById('updateEmployeeId').value;
  const name = document.getElementById('updateEmployeeName').value;
  const salary = document.getElementById('updateEmployeeSalary').value;
  const age = document.getElementById('updateEmployeeAge').value;
  const url = `https://dummy.restapiexample.com/api/v1/update/${id}`;
  const data = { name, salary, age };
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(handleResponse)
    .then(data => {
      const resultContainer = document.getElementById('updateEmployeeResult');
      resultContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function deleteEmployee() {
  const id = document.getElementById('deleteEmployeeId').value;
  const url = `https://dummy.restapiexample.com/api/v1/delete/${id}`;
  fetch(url, {
    method: 'DELETE'
  })
    .then(handleResponse)
    .then(data => {
      const resultContainer = document.getElementById('deleteEmployeeResult');
      resultContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function handleResponse(response) {
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  }
  return response.text();
}