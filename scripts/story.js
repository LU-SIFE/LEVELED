function proceed() {
	switch(story_progress) {

		case 1:
			document.getElementById('text_container').innerHTML = 'Let us get down to business.';
			unfade(text_container);
			setTimeout(() => document.getElementById('text_container').innerHTML = 'Let us get down to business. <br>NOW.', 1800);
			setTimeout(() => unfade(proceed_text), 3500);
			setTimeout(() => text_progressable = true, 4500);
			setTimeout(() => shake_effect('text_container'), 1800);
		break;

		case 2:
			document.getElementById('text_container').innerHTML = 'Let Me explain why you are here.';
			unfade(text_container);
			setTimeout(() => unfade(proceed_text), 2000);
			setTimeout(() => text_progressable = true, 3000);
		break;

		case 3:
			document.getElementById('text_container').innerHTML = "About a month ago, we discovered hell. <br><br> ... <br> It wasn't pretty";
			unfade(text_container);
			setTimeout(() => unfade(proceed_text), 2000);
			setTimeout(() => text_progressable = true, 3000);
		break;

		case 4:

		break;

	}
}