const book = document.getElementsByClassName('book')
const modal = document.getElementById('booking')
const close = document.getElementsByClassName('close')[0]
const modalRoomNum = document.getElementById('roomNum')
const modalPrice = document.getElementById('pricePerNight')
const modalTotal = document.getElementById('total')
const quantity = document.querySelector('#quantity')
const button = document.getElementsByClassName('button')

let room = []

for (var i = 0; i < book.length; i++) {
  let reserve = book[i]
  reserve.addEventListener('click', function() {
    room.num = reserve.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    room.capacity = reserve.parentNode.previousElementSibling.previousElementSibling.innerHTML;
    room.price = reserve.parentNode.previousElementSibling.innerHTML;
    bookingContent()
  })
}

function bookingContent() {
  modalRoomNum.innerHTML = 'Room' + room.num;
  modalPrice.innerHTML = room.price + 'per Night';
  modal.style.display = 'block';
}

close.addEventListener('click', function() {
  modal.style.display = 'none';
  modalTotal.innerHTML = '$ 0';
})

quantity.addEventListener('change', function(event) {
  event.preventDefault();
  let total = this.value * parseFloat(room.price.slice(1));
  modalTotal.innerHTML = '$ ' + total.toFixed(2);
})
