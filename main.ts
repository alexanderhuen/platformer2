controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me_as_guy.vy == 0) {
        me_as_guy.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
let me_as_guy: Sprite = null
scene.setBackgroundColor(9)
me_as_guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    7 7 7 7 f . . . . . f 7 7 7 7 7 
    . . . . f . f . f . f . . . . . 
    . . . . f 5 . . . 5 f . . . . . 
    . . . . f 5 5 5 5 5 f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . 7 . . . . . 7 . . . . . 
    . . . . 7 . . . . . 7 . . . . . 
    . . . . 7 . . . . . 7 . . . . . 
    . . . . 7 . . . . . 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(me_as_guy, 100, 0)
tiles.setCurrentTilemap(tilemap`l1`)
me_as_guy.ay = 350
scene.cameraFollowSprite(me_as_guy)
