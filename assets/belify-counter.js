//be counter
let domTopIdfr = document.getElementById('nlify___fr-counter');
let domTopIdnl = document.getElementById('nlify___js-counter');
if (domTopIdnl !== null) {
	weekDayNames(domTopIdnl);
}
if (domTopIdfr !== null) {
	weekDayNames(domTopIdfr);
}
function weekDayNames(Id1) {
	let d = new Date();
	weekday = d.getDay(),
		dayslabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		weekday = dayslabel[d.getDay()];
	//switcher
	switch (weekday) {
		case 'Fri':
			calculateDeliveryTimeFriday(Id1, d, 14);
			break;
		case 'Sat':
			calculateDeliveryTimeSaturday(Id1)
			break;
		case 'Sun':
			calculateDeliveryTimeEveryDay(Id1, d, 0);
			break;
		default:
			calculateDeliveryTimeEveryDay(Id1, d, 14);
	}
}
function calculateDeliveryTimeEveryDay(someId, currentDate, setTime) {
	let putDateOfNow = currentDate,
		startDateOfToday = putDateOfNow.setHours(setTime, 0, 0),
		endDateOfToday = putDateOfNow.setHours(23, 59, 59);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}
	function tick() {
		let now = new Date();
		if (now <= startDateOfToday) {
			let remain = ((startDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
          if(someId.id === 'nlify___js-counter'){
            			someId.innerHTML = `<div class="timer__wrapper">
                        <div class="timer__text">
                        Je order wordt vandaag verzonden – Bestel voor: 
                        </div>
                        <div class="timer__counter">  
                        <span class="time-go">
                        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">uren</span></span> <code>:</code> 
                        <span class="time-min"> <strong>${min}</strong><span class="time__badge">minuten</span></span> <code>:</code> 
                        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">seconden</span></span> 
                        </span></div></div>`;
          }
                    if(someId.id === 'nlify___fr-counter'){
            			someId.innerHTML = `<div class="timer__wrapper">
                        <div class="timer__text">
                        Nous exp&eacute;dions d&egrave;s aujourd'hui - commandez dans:
                        </div>
                        <div class="timer__counter">  
                        <span class="time-go">
                        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">uren</span></span> <code>:</code> 
                        <span class="time-min"> <strong>${min}</strong><span class="time__badge">minuten</span></span> <code>:</code> 
                        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">seconden</span></span> 
                        </span></div></div>`;
          }
			setTimeout(tick, 1000);
		} else if (now < endDateOfToday) {
			if (now >= endDateOfToday) { // too late, go to tomorrow
				after.setDate(after.getDate() + 1);
			}
			let remain = ((endDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
          if(someId.id === 'nlify___js-counter') {
                          someId.innerHTML = `<div class="timer__wrapper">
                <div class="timer__text">
                Je order wordt morgen verzonden - Bestel voor: 
                </div>
                <div class="timer__counter">
                <span class="time-up"  >
                <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">uren</span></span> <code>:</code>  
                <span class="time-min"> <strong>${min}</strong><span class="time__badge">minuten</span></span> <code>:</code> 
                <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">seconden</span></span> 
                </span></div></div>`;
         	 }
            if(someId.id === 'nlify___fr-counter') {
                          someId.innerHTML = `<div class="timer__wrapper">
                <div class="timer__text">
               Nous exp&eacute;dions d&egrave;s demain - commandez dans:
                </div>
                <div class="timer__counter">
                <span class="time-up"  >
                <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">uren</span></span> <code>:</code>  
                <span class="time-min"> <strong>${min}</strong><span class="time__badge">minuten</span></span> <code>:</code> 
                <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">seconden</span></span> 
                </span></div></div>`;
         	 }
			setTimeout(tick, 1000);
		}
	}
	tick();
}
function calculateDeliveryTimeFriday(someId, currentDate, setTime) {
	let putDateOfNow = currentDate,
		startDateOfToday = putDateOfNow.setHours(setTime, 0, 0);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}
	function tick() {
		let now = new Date();
		if (now <= startDateOfToday) {
			let remain = ((startDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
          if(someId.id === 'nlify___js-counter'){
            			someId.innerHTML = `<div class="timer__wrapper">
                        <div class="timer__text">
                        Je order wordt vandaag verzonden – Bestel voor: 
                        </div>
                        <div class="timer__counter">  
                        <span class="time-go">
                        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">uren</span></span> <code>:</code> 
                        <span class="time-min"> <strong>${min}</strong><span class="time__badge">minuten</span></span> <code>:</code> 
                        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">seconden</span></span> 
                        </span></div></div>`;
          }
                    if(someId.id === 'nlify___fr-counter'){
            			someId.innerHTML = `<div class="timer__wrapper">
                        <div class="timer__text">
                       Nous exp&eacute;dions d&egrave;s aujourd'hui - commandez dans:
                        </div>
                        <div class="timer__counter">  
                        <span class="time-go">
                        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">uren</span></span> <code>:</code> 
                        <span class="time-min"> <strong>${min}</strong><span class="time__badge">minuten</span></span> <code>:</code> 
                        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">seconden</span></span> 
                        </span></div></div>`;
          }
			setTimeout(tick, 1000);
		} else if (now > startDateOfToday) {
            if(someId.id === 'nlify___js-counter'){
			someId.innerHTML = `<div class="timer__wrapper"><div class="timer__text">Gratis bezorging bij een bestelling boven 59 &euro;. Gratis retourneren en ruilen</div></div>`;
            }
            if(someId.id === 'nlify___fr-counter'){
			someId.innerHTML = `<div class="timer__wrapper"><div class="timer__text">Livraison gratuite de plus de 59&euro; | Retour et &eacute;change gratuits</div></div>`;
            }
		}
	}
	tick();
}
function calculateDeliveryTimeSaturday(someId) {
  if(someId.id === 'nlify___js-counter'){
    someId.innerHTML = `<div class="timer__wrapper"><div class="timer__text">Gratis bezorging bij een bestelling boven 59 &euro;. Gratis retourneren en ruilen</div></div>`;
  }
    if(someId.id === 'nlify___fr-counter'){
    someId.innerHTML = `<div class="timer__wrapper"><div class="timer__text">Livraison gratuite de plus de 59&euro; | Retour et &eacute;change gratuits</div></div>`;
  }
}
