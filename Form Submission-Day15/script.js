document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.getElementById('gender').value;
    let food = document.getElementById('food').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = firstName;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = email;
    newRow.insertCell(3).innerHTML = pincode;
    newRow.insertCell(4).innerHTML = gender;
    newRow.insertCell(5).innerHTML = food;
    newRow.insertCell(6).innerHTML = state;
    newRow.insertCell(7).innerHTML = country;

    document.getElementById('userForm').reset();
});
