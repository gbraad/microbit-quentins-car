basic.showLeds(`
    # # . # #
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)
radio.setGroup(255)

radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        powerbrick.Servo(powerbrick.Servos.S1, 40)
    } else if (receivedString == "right") {
        powerbrick.Servo(powerbrick.Servos.S1, -40)
    } else if (receivedString == "forward") {
        powerbrick.MotorRunDual(255, 255)
    } else if (receivedString == "backward") {
        powerbrick.MotorRunDual(-180, -180)
    } else {
        powerbrick.Servo(powerbrick.Servos.S1, 0)
        powerbrick.MotorStopAll()
    }
})
