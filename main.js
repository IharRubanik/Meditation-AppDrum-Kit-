// создали переменную keys и положили в неё все клавиши
let keys = document.querySelectorAll('.key');
// повесили на весь маассив обработчик событий, после запустили функцию playNote
keys.forEach(key => {
 key.addEventListener('click',  playNote);
});
// создали функию PlayNote, 
function playNote(e) {
    // будем помещать в "е" событие которое поймали
 let key = e.target;
// так как атрибут data-note совподает с id аудио тегов, получаем его следующим образом
 let note = document.getElementById(key.dataset.note);
//  добавили класс active при клике
 key.classList.add('active');
// для короткого звучания добавили currentTime
 note.currentTime = 0;
 note.play();
//  удаляем класс Active при окончании звучания мелодии
 note.addEventListener('ended',() => {
  key.classList.remove('active');
 });
}