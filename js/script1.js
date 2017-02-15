function pow(x, n) {
  var res = x;

  if (n > 0) {

    for (i = 1; i < n; i++) {
      res *= x;
    }

    return console.log(res);

  } else if (n < 0) {

    n *= -1;
    for (i = 1; i < n; i++) {
      res *= x;
    }

    return console.log(1 / res);

  } else if (n == 0) {
    return 1;
  }
}

var x = prompt('Введите целое число');
var n = prompt('Введите степень, в которую требуется возвести число');

if ( ( (x%1) !== 0) || ( (n%1) !== 0) ) { // проверяет целое ли введенное число

  alert('Ошибка! Введите число заново');

} else {
  pow(x, n);
}
