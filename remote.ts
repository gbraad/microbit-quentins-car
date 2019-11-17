radio.setGroup(255)
basic.showLeds(`
    # # . # #
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)

basic.forever(function () {
    let x = pins.analogReadPin(AnalogPin.P1);
    x = (x / 2) - 256;

    if (x > 128) {
        radio.sendString("backward")
    } else if (x < -128) {
        radio.sendString("forward")
    } else {

        let y = pins.analogReadPin(AnalogPin.P2);
        y = (y / 2) - 256;

        if (y > 128) {
            radio.sendString("left")
        } else if (y < -128) {
            radio.sendString("right")
        } else {
            radio.sendString("stop")
        }
    }
})