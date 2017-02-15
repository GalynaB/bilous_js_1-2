var usersNames = [ ];

for (i = 0; i < 5; i++) {

  var name = prompt('Введите '+ i +' имя');

  if (name === 'null' || name === "") { // проверка правильности введения элементов массива
      alert("Имя не введено");
      break;

  } else {
      usersNames.push(name); // наполнение массива
  }
}

if (usersNames.length < 5) {
  alert("Введите все заново");
}

console.log(usersNames); // вывод в консоль заполненного массива

var searchName = prompt("Введите имя пользователя");
var search;

  for (var i = 0; i < usersNames.length; i++) {

    if (searchName === usersNames[i]) { // сравнение имен в массиве с введенным
    search = true;
    alert(searchName + ', вы успешно вошли');
    }
  }

  if (!search) {
  alert('Пользователь '+ searchName +' не найден');
  }
