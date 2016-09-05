var test = {
  createWrap : function () {
    var div = document.createElement('div');
    div.className = "wrapper";
    document.body.appendChild(div);
  },
  createDiv : function () {
    var div = document.createElement('div');
    div.className = "header";
    div.innerHTML = "Тест по программированию";
    wrapper.appendChild(div);
  },
  createOl : function () {
    var ol = document.createElement('ol');
    ol.className = "list";
    wrapper.appendChild(ol);
  },
  createLi : function () {
    var li = document.createElement('li');
    li.className = "list__item";
    list.appendChild(li);
  },
  createP : function (a, b) {
    var p = document.createElement('p');
    p.className = "list__text";
    p.innerHTML = ('Вопрос №'+b);
    listItem[a].appendChild(p);
  },
  createCheck : function (a, b, c) {
    var div = document.createElement('div');
    div.className = "checkbox-btn";
    listItem[a].appendChild(div);

    var chk = document.querySelectorAll('.checkbox-btn');
    var input = document.createElement('input');
    input.setAttribute ('type', 'checkbox');
    input.id = b;
    chk[b].appendChild(input);

    var label = document.createElement('label');
    label.setAttribute ('for', b);
    label.innerHTML = ('Вариант ответа №'+c);
    chk[b].appendChild(label);
  },
  createBut : function () {
    var a = document.createElement('a');
    a.className = "myButton";
    a.innerHTML = "Проверить мои результаты";
    wrapper.appendChild(a);
  }
}

test.createWrap();
var wrapper = document.querySelector('.wrapper');
test.createDiv();
test.createOl();

var list = document.querySelector('.list');
var v = 0;
for (var i = 0; i < 3; i++) {
  v = i + 1;
  test.createLi(v);
}

var listItem = document.querySelectorAll('.list__item');
var n = 0;
var m = 1;
v = 0;
for (var i = 0; i < 3; i++) {
  v = i + 1;
  m = 1;
  test.createP(i, v);
  for (var j = 0; j < 3; j++) {
    test.createCheck(i, n, m);
    n++;
    m++;
  }
}
test.createBut();
