let start = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(123)
    basic.showString("start")
})
input.onPinPressed(TouchPin.P1, function () {
    start = 1
})
basic.forever(function () {
	
})
