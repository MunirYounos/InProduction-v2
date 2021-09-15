(function(a){
	$('#youtube-video').hide();
	$('.youtube-cover-image, .youtube-button').on('click', function () {
		$('#youtube-video').show();
		$('.youtube-cover-image , .youtube-button').hide();
	});
	// scroll smothing for readmore button
	$('.btn-readmore').on('click', function () {
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 1000);
		return false;
	});

})(jQuery);


// variables
var accordionBtn = document.querySelectorAll('.accordion__title');
var allTexts = document.querySelectorAll('.accordion__flex');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
	el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
	var targetText = el.currentTarget.nextElementSibling.classList;
	var targetAccIcon = el.currentTarget.children[0];
	var target = el.currentTarget;

	if (targetText.contains('accordion-show')) {
		targetText.remove('accordion-show');
		targetAccIcon.classList.remove('anime');
		target.classList.remove('accordionTitleActive');
	}
	else {
		accordionBtn.forEach(function (el) {
			el.classList.remove('accordionTitleActive');

			allTexts.forEach(function (el) {
				el.classList.remove('accordion-show');
			})

			accIcon.forEach(function (el) {
				el.classList.remove('anime');
			})

		})

		targetText.add('accordion-show');
		target.classList.add('accordionTitleActive');
		targetAccIcon.classList.add('anime');
	}
}

//tabs section
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.content-body');
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-active');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show-active');
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-active');
  });
}
// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show-active');
  });
}
// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});

// relief tabs
const homeTabBtns = document.querySelectorAll('.home-tabs__wrapper-btns-btn');
const homeTabItems = document.querySelectorAll('.home-tabs__wrapper-content-img');

function selectHomeTabContents(e) {
  removeActiveHomeTabClass();
  removeActiveHomeTabItemClass();
  this.classList.add('active');
  const homeTabContentItems = document.querySelector(`#${this.id}-content`);
  homeTabContentItems.classList.add('active');
}

homeTabBtns.forEach(tabbtn => tabbtn.addEventListener('click', selectHomeTabContents));

const removeActiveHomeTabClass = () => {
  homeTabBtns.forEach(tabbtn => {
    tabbtn.classList.remove('active')
  })
}
const removeActiveHomeTabItemClass = () => {
  homeTabItems.forEach(homeTabItem => {
    homeTabItem.classList.remove('active')
  })
}
