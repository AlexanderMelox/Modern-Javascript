document.querySelector('.clear-tasks').addEventListener('click', (e) => {
  // e.preventDefault();
  // console.log('Hello World');

  let val;

  val = e;

  // Event target element

  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamo
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  console.log(val);
  

});