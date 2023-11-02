basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(0, y)
        basic.pause(100)
        led.unplot(0, y)
        basic.pause(100)
    }
})
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(2, y)
        basic.pause(100)
        led.unplot(2, y)
        basic.pause(100)
    }
})
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(4, y)
        basic.pause(100)
        led.unplot(4, y)
        basic.pause(100)
    }
})
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(1, 4 - y)
        basic.pause(100)
        led.unplot(1, 4 - y)
        basic.pause(100)
    }
})
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(3, 4 - y)
        basic.pause(100)
        led.unplot(3, 4 - y)
        basic.pause(100)
    }
})
