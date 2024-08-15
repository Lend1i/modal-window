#USAGE 

**Here is a layout example for a webpage**
 
```modal('[data-modal]', '.modal', modalTimerId);```



```
<div class="offer__action">
	<button data-modal class="btn btn_dark">contact us</button>
</div>
```
```
<div class="modal">
	<div class="modal__dialog">
		<div class="modal__content">
			<form action="#">
				<div data-close class="modal__close">&times;</div>
				<div class="modal__title">We will get in touch with you as soon as possible!</div>
				<input required placeholder="Your name" name="name" type="text" class="modal__input">
				<input required placeholder="Your phone number" name="phone" type="phone" class="modal__input">
				<button class="btn btn_dark btn_min">Call me back</button>
			</form>
		</div>
	</div>
</div>
```
