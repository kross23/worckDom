'use strickt';

const body = document.querySelector('body');
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

book[2].before(book[5]);
book[5].before(book[3]);
book[3].before(book[4]);
book[4].before(book[0]);
const chapterBook2 = book[0].querySelectorAll('li');
chapterBook2[3].after(chapterBook2[6]);
chapterBook2[6].after(chapterBook2[8]);
chapterBook2[10].before(chapterBook2[2]);

const chapterBook5 = book[5].querySelectorAll('li');
chapterBook5[1].after(chapterBook5[9]);
chapterBook5[9].after(chapterBook5[3]);
chapterBook5[4].after(chapterBook5[2]);
chapterBook5[2].after(chapterBook5[6]);
chapterBook5[6].after(chapterBook5[7]);
//console.log('chapterBook5: ', chapterBook5);
const book3= book[4].querySelector('a');
book3.textContent='Книга 3. this и Прототипы Объектов';
//console.log('book3: ', book3);
let chapterBook6 = book[2].querySelectorAll('ul');
let chapter8 = document.createElement('li');
chapter8.innerText='Глава 8: За пределами ES6';

chapterBook6[0].insertAdjacentElement('afterend', chapter8);
let chapter6 = book[2].querySelectorAll('li');
console.log('chapterBook6: ', chapter6);
chapter6[8].after(chapter6[10]);

console.log('book', book);

///////////////////первое задание
const adv = document.querySelector('.adv'); //удаление рекламы
adv.remove();