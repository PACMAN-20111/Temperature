basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
    } else {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
})
