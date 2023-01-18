input.onButtonPressed(Button.A, function () {
    numero_1 = randint(0, 10)
    numero_2 += randint(0, 10)
    basic.showNumber(numero_1)
    basic.showString("x")
    basic.showNumber(numero_2)
    nrjogadas += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(pontuação)
    basic.showString("de")
    basic.showNumber(nrjogadas)
    basic.pause(1000)
    basic.clearScreen()
    nrjogadas = 0
    pontuação = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(numero_1 * numero_2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pontuação += 1
    basic.showString("boa")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let numero_2 = 0
let pontuação = 0
let nrjogadas = 0
let numero_1 = 0
numero_1 = 0
numero_1 = 0
nrjogadas = 0
pontuação = 0
