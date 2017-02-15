var usersNames = [ ];

for (i = 0; i < 5; i++) {

  var name = prompt('Введите '+ i +' имя');

  if (name === 'null' || name === "") {
      alert("Имя не введено");
      break;
  } else {
      usersNames.push(name);
  }
}

console.log(usersNames);

var searchName = prompt("Введите имя пользователя");
var search;

  for (var i = 0; i < usersNames.length; i++) {

    if (searchName === usersNames[i]) {
    search = true;
    alert(searchName + ', вы успешно вошли');
    }
  }

  if (!search) {
  alert('Пользователь '+ searchName +' не найден');
  }
