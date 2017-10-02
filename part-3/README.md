## Part 3: Web interface for hotel manager

Create a front-end only site for a hotel manager where guests can choose from a list of rooms to book.

You only need to write HTML, CSS, and JavaScript. No web server is required.

The initial layout has already been provided for you in the [hotel.html][hotel-html] and [styles.css][hotel-css] files. From this base, build the modal and add interactive behavior with JS.

Note: the "Confirm" button in the modal doesn't need to do anything. Just leave it as a placeholder button.

### Wireframe

Clicking on the "Book" button for any room opens the "Booking" modal.

![modal](https://user-images.githubusercontent.com/709100/29230971-4ed7acc6-7eb3-11e7-9266-d40be6afe004.png)

### Requirements

- [ ] __10:__ All files are stored under the `part-3/` folder
- [ ] __20:__ No third party CSS or JS libraries are used (all code must be written from scratch)
- [ ] __10:__ HTML, CSS, and JS are separated into their own files.
- [ ] __20:__ Clicking on the "Book" button for a room will open the "Booking" modal with the room info automatically inserted (room number and nightly rate)
- [ ] __20:__ Users can select a check-in date (using an HTML5 date input) and a number of nights
- [ ] __20:__ The "Total" in the "Booking" modal shows the total sum (formula: nightly rate multiplied by number of nights)
- [ ] __20:__ Whenever the number of nights changes, the total is updated automatically
- [ ] __20:__ Clicking on the "X" button in the "Booking" modal closes the modal

[hotel-bookings]: https://gist.github.com/lg-bot/1ea5b9cb6dfab086bcb2db3d144e81d4#file-bookings-csv
[hotel-guests]: https://gist.github.com/lg-bot/1ea5b9cb6dfab086bcb2db3d144e81d4#file-guests-csv
[hotel-rooms]: https://gist.github.com/lg-bot/1ea5b9cb6dfab086bcb2db3d144e81d4#file-rooms-csv

[hotel-html]: https://gist.github.com/lg-bot/1ea5b9cb6dfab086bcb2db3d144e81d4#file-hotel-html
[hotel-css]: https://gist.github.com/lg-bot/1ea5b9cb6dfab086bcb2db3d144e81d4#file-styles-css
