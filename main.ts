input.onButtonPressed(Button.A, function () {
    led.enable(true)
    if (pins.analogReadPin(AnalogReadWritePin.P0) < 200) {
        basic.showString("FALTA AGUA")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P0))
        basic.showIcon(IconNames.Sad)
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (pins.analogReadPin(AnalogReadWritePin.P0) > 200 && pins.analogReadPin(AnalogReadWritePin.P0) < 520) {
        basic.showString("BUENA HUMEDAD")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P0))
        basic.showIcon(IconNames.Happy)
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else if (pins.analogReadPin(AnalogReadWritePin.P0) > 520) {
        basic.showString("EXCESO DE AGUA")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P0))
        basic.showIcon(IconNames.Skull)
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
    led.enable(false)
})
input.onButtonPressed(Button.AB, function () {
    led.enable(true)
    if (pins.analogReadPin(AnalogReadWritePin.P10) > 0 && pins.analogReadPin(AnalogReadWritePin.P10) < 500) {
        basic.showString("POCA LUZ")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P10))
    } else if (pins.analogReadPin(AnalogReadWritePin.P10) > 500 && pins.analogReadPin(AnalogReadWritePin.P10) < 900) {
        basic.showString("LUZ MEDIA BAJA")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P10))
    } else if (pins.analogReadPin(AnalogReadWritePin.P10) > 900 && pins.analogReadPin(AnalogReadWritePin.P10) < 1000) {
        basic.showString("LUZ MEDIA ALTA")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P10))
    } else if (pins.analogReadPin(AnalogReadWritePin.P10) > 1000) {
        basic.showString("EXCESO DE LUZ")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P10))
    }
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    if (input.temperature() > 0 && input.temperature() < 10) {
        basic.showString("PARAMO")
        basic.showNumber(input.temperature())
    } else if (input.temperature() > 10 && input.temperature() < 20) {
        basic.showString("FRIO")
        basic.showNumber(input.temperature())
    } else if (input.temperature() > 20 && input.temperature() < 30) {
        basic.showString("TEMPLADO")
        basic.showNumber(input.temperature())
    } else if (input.temperature() > 30) {
        basic.showString("CALIDO")
        basic.showNumber(input.temperature())
    }
    led.enable(false)
})
led.enable(false)
