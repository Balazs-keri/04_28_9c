let hőmérséklet = 0
input.onButtonPressed(Button.A, function () {
    if (hőmérséklet > 18) {
        basic.showIcon(IconNames.Happy)
    } else if (hőmérséklet < 18) {
        basic.showIcon(IconNames.Sad)
    }
    basic.showNumber(hőmérséklet)
    basic.showString("°C")
})
basic.forever(function () {
    hőmérséklet = input.temperature()
})
