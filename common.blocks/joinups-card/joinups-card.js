/*

var joinupsCard = document.querySelectorAll('.joinups-card__form_pt-form')[0],
	joinupsForms = document.querySelectorAll('.location')[0],
	radioButtonVal1 = document.querySelectorAll('.location-1')[0],
	radioButtonVal2 = document.querySelectorAll('.location-2')[0];

radioButtonVal1.addEventListener('click', function() {
	joinupsForms.classList.add('form__form-russian');
	joinupsForms.classList.remove('form__form-foreign');
});
radioButtonVal2.addEventListener('click', function() {
	joinupsForms.classList.add('form__form-russian');
	joinupsForms.classList.remove('form__form-foreign');
});

*/

/* var radioButton1 = document.querySelectorAll('input[name="location"]') [1]; */
var radioButtons = document.querySelectorAll('input[name="location"]') ;
var radioButton1 = radioButtons [0] ;
var radioButton2 = radioButtons [1] ;

console.log(radioButton1.value);
console.log(radioButton2.value);

radioButton1.addEventListener('change', function() { console.log(1) } );
radioButton2.addEventListener('change', function() { console.log(2) } );

/* document.querySelector('body').addEventListener('click', function() { console.log(1) } ); */

document.getElementById('continue').addEventListener('click', function() { console.log(1) } );

/* radioButton1.addEventListener('change', function () {console.log(3)} ); */







/*


var mediaSection = document.querySelectorAll('.promo-cards__media-section')[0],
	mediaCard = document.querySelectorAll('.promo-cards__media')[0],
	mediaTab1 = document.querySelectorAll('.promo-cards__media-tab-1')[0],
	mediaTab2 = document.querySelectorAll('.promo-cards__media-tab-2')[0],
	mediaTab3 = document.querySelectorAll('.promo-cards__media-tab-3')[0];

mediaTab1.addEventListener('click', function() {
	mediaTab1.classList.add('text_view_alert');
	mediaTab2.classList.remove('text_view_alert');
	mediaTab3.classList.remove('text_view_alert');

	mediaSection.classList.add('promo-cards_slide_first');
	mediaSection.classList.remove('promo-cards_slide_second');
	mediaSection.classList.remove('promo-cards_slide_third');

	mediaCard.classList.add('promo-cards__media_type_video');
	mediaCard.classList.remove('promo-cards__media_type_text');
	mediaCard.classList.remove('promo-cards__media_type_music');
});
mediaTab2.addEventListener('click', function() {
	mediaTab1.classList.remove('text_view_alert');
	mediaTab2.classList.add('text_view_alert');
	mediaTab3.classList.remove('text_view_alert');

	mediaSection.classList.remove('promo-cards_slide_first');
	mediaSection.classList.add('promo-cards_slide_second');
	mediaSection.classList.remove('promo-cards_slide_third');

	mediaCard.classList.remove('promo-cards__media_type_video');
	mediaCard.classList.add('promo-cards__media_type_text');
	mediaCard.classList.remove('promo-cards__media_type_music');
});
mediaTab3.addEventListener('click', function() {
	mediaTab1.classList.remove('text_view_alert');
	mediaTab2.classList.remove('text_view_alert');
	mediaTab3.classList.add('text_view_alert');

	mediaSection.classList.remove('promo-cards_slide_first');
	mediaSection.classList.remove('promo-cards_slide_second');
	mediaSection.classList.add('promo-cards_slide_third');

	mediaCard.classList.remove('promo-cards__media_type_video');
	mediaCard.classList.remove('promo-cards__media_type_text');
	mediaCard.classList.add('promo-cards__media_type_music');
});


*/
