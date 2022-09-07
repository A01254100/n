input.onButtonPressed(Button.A, function () {
    basic.showNumber(Número)
    Número += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto = "aaaaa"
})
input.onButtonPressed(Button.B, function () {
    Número += -1
    basic.showNumber(Número)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto)
})
let Número = 0
let Texto = ""
Texto = "eeeee"
Número = 92
