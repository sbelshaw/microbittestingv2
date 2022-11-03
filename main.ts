input.onButtonPressed(Button.A, function () {
    while (true) {
        item.change(LedSpriteProperty.X, -1)
        basic.pause(1000)
        if (item.isTouchingEdge()) {
            basic.showString("GAME OVER!")
            item = game.createSprite(2, 2)
        }
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        item.change(LedSpriteProperty.X, 1)
        basic.pause(1000)
        if (item.isTouchingEdge()) {
            basic.showString("GAME OVER!")
            item = game.createSprite(2, 2)
        }
        if (input.buttonIsPressed(Button.A)) {
            break;
        }
    }
})
let item: game.LedSprite = null
item = game.createSprite(2, 2)
