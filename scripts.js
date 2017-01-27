var nowTime = new Date()
var nowHours = nowTime.getHours()
var nowMinutes = nowTime.getMinutes()
var nowSeconds = nowTime.getSeconds()
var secondHandAngle = 6 * nowSeconds + 180
var hourHandAngle = checkTheHour()
var minuteHandAngle = 6 * nowMinutes + 180


function checkTheHour() {
	if (nowHours > 12) {
		return(((Math.abs(12-nowHours))*(360/12)) + 180 + (nowMinutes/2))
	} else {
		return(((nowHours)*(360/12)) + 180 + (nowMinutes/2))}
}

function moveTheHands() {
	var sha = secondHandAngle
	var aha = hourHandAngle
	var mha = minuteHandAngle

	var secondHand = document.getElementById("secondHand")
	$("#secondHand").append("style", ("transform: rotate(" + sha + "deg);"))

	var hourHand = document.getElementById("hourHand")
	hourHand.setAttribute("style", ("transform: rotate(" + aha + "deg);"))

	var minuteHand = document.getElementById("minuteHand")
	minuteHand.setAttribute("style", ("transform: rotate(" + mha + "deg);"))


	window.setInterval(function(){
		secondHand.setAttribute("style", ("transform: rotate(" + sha + "deg);"))	
		sha += 6
	}, 1000)

	window.setInterval(function(){
		hourHand.setAttribute("style", ("transform: rotate(" + aha + "deg);"))	
		aha += 1
	}, (120000))

	window.setInterval(function(){
		minuteHand.setAttribute("style", ("transform: rotate(" + mha + "deg);"))	
		mha += 1
	}, 10000)
}