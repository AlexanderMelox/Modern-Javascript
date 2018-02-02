// Event bubbling

// document.querySelector('.card-title').addEventListener('click', () => {
//   console.log('card title');
  
// });

// document.querySelector('.card-content').addEventListener('click', () => {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', () => {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', () => {
//   console.log('col');
// });

// Event delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}