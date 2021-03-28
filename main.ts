enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Flying,
    EvilyFlying
}
namespace SpriteKind {
    export const Effect = SpriteKind.create()
    export const Duck = SpriteKind.create()
    export const Explosion = SpriteKind.create()
    export const GOD = SpriteKind.create()
}
namespace StatusBarKind {
    export const AmmoBar = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    AmmoMode += 1
    if (AmmoMode == 1) {
        ReloadMode = 1
        AmmoMode = 1
        MaxAmmo = 12
        statusbar.max = MaxAmmo
        ReloadTime = 125
        Shooter.setImage(img`
            . . . . . . . c d . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . c b . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . e d . . . . . . . 
            . . . . . . e e f e . . . . . . 
            . . . . . . e d f e . . . . . . 
            . . . . . c c c e e e . . . . . 
            . . . . . e d d d f e . . . . . 
            . . . . . f c c e e f . . . . . 
            . . . . . e e d d d d . . . . . 
            . . . . . c e e d d d . . . . . 
            . . . . . c e e d d d . . . . . 
            `)
        Shooter.say("Rifle Mode", 500)
        if (Ammunition > MaxAmmo) {
            Ammunition = MaxAmmo
        }
        statusbar.value = Ammunition
    } else {
        if (AmmoMode == 2) {
            ReloadMode = 2
            MaxAmmo = 30
            ReloadTime = 2000
            statusbar.max = MaxAmmo
            Shooter.setImage(img`
                . . . . . . c d c d . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . c d c d . . . . . . 
                . . . . . . c b c b . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . c d c d . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . e d e d . . . . . . 
                . . . . . . e e f e . . . . . . 
                . . . . . . e d f e . . . . . . 
                . . . . . c c c e e e . . . . . 
                . . . . . e d d d f e . . . . . 
                . . . . . f c c e e f . . . . . 
                . . . . . e e d d d d . . . . . 
                . . . . . c e e d d d . . . . . 
                . . . . . c e e d d d . . . . . 
                `)
            Shooter.say("Full Auto Mode", 500)
            if (Ammunition > MaxAmmo) {
                Ammunition = MaxAmmo
            }
            statusbar.value = Ammunition
        } else {
            if (AmmoMode == 3) {
                ReloadMode = 1
                MaxAmmo = 4
                ReloadTime = 170
                statusbar.max = MaxAmmo
                Shooter.setImage(img`
                    . . . . . c d . c d . . . . . . 
                    . . . . . c d . c d . . . . . . 
                    . . . . . c d . c d . . . . . . 
                    . . . . . c b . c b . . . . . . 
                    . . . . . f f . f f . . . . . . 
                    . . . . . c d . c d . . . . . . 
                    . . . . . f f . f f . . . . . . 
                    . . . . . e d d e d . . . . . . 
                    . . . . . e e d f e . . . . . . 
                    . . . . . e d d f e . . . . . . 
                    . . . . c c c c e e e . . . . . 
                    . . . . e e d d d f e . . . . . 
                    . . . . f f c c e e f . . . . . 
                    . . . . e e e d d d d . . . . . 
                    . . . . c c e e d d d . . . . . 
                    . . . . c c e e d d d . . . . . 
                    `)
                Shooter.say("Shotgun Mode", 500)
                if (Ammunition > MaxAmmo) {
                    Ammunition = MaxAmmo
                }
                statusbar.value = Ammunition
            } else {
                if (AmmoMode == 4) {
                    ReloadMode = 2
                    MaxAmmo = 2
                    ReloadTime = 750
                    statusbar.max = MaxAmmo
                    Shooter.setImage(img`
                        . . . . . . . c b . . . . . . . 
                        . . . . . . f c d f . . . . . . 
                        . . . . . . f c d f . . . . . . 
                        . . . . . . f c d f . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . . . f c d f . . . . . . 
                        . . . . . . f c d f . . . . . . 
                        . . . . . . f e d f . . . . . . 
                        . . . . . . e e f e . . . . . . 
                        . . . . . . e d f e . . . . . . 
                        . . . . . c c c e e e . . . . . 
                        . . . . . e d d d f e . . . . . 
                        . . . . . f c c e e f . . . . . 
                        . . . . . e e d d d d . . . . . 
                        . . . . . c e e d d d . . . . . 
                        . . . . . c e e d d d . . . . . 
                        `)
                    Shooter.say("RPG Mode", 500)
                    if (Ammunition > MaxAmmo) {
                        Ammunition = MaxAmmo
                    }
                    statusbar.value = Ammunition
                } else {
                    if (AmmoMode == 5) {
                        ReloadMode = 2
                        MaxAmmo = 1
                        ReloadTime = 7500
                        statusbar.max = MaxAmmo
                        Shooter.setImage(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . c c c c d d d d . . . . 
                            . . . . c c c c d d d d . . . . 
                            . . . . c c c c d d d b . . . . 
                            . . . . f f f f f f f f . . . . 
                            . . . . c e e e e e e d . . . . 
                            . . . e e e e e e e e e e . . . 
                            . . c c c c c c e e e e e e . . 
                            . . e e e e d d d f e e e e . . 
                            . . f f f f c c e e f f f f . . 
                            . . e e e e e d d d d d d d . . 
                            . . c c c c e e d d d d d d . . 
                            . . c c c c e e d d d d d d . . 
                            `)
                        Shooter.say("Meteor Mode", 500)
                        if (Ammunition > MaxAmmo) {
                            Ammunition = MaxAmmo
                        }
                        statusbar.value = Ammunition
                    } else {
                        if (AmmoMode == 6) {
                            ReloadMode = 2
                            MaxAmmo = 4
                            ReloadTime = 1500
                            statusbar.max = MaxAmmo
                            Shooter.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . c d . . . . . . . 
                                . . . . . . . c b . . . . . . . 
                                . . . . . . . f f . . . . . . . 
                                . . . . . . . c 2 . . . . . . . 
                                . . . . . . . f f . . . . . . . 
                                . . . . . . . e 2 . . . . . . . 
                                . . . . . . e e 4 e . . . . . . 
                                . . . . . . e 2 4 e . . . . . . 
                                . . . . . c c c e e e . . . . . 
                                . . . . e e 2 2 2 4 e e . . . . 
                                . . c f f f c c e e f f e e . . 
                                . c c c c e e 2 2 2 2 4 2 e e . 
                                . c c c c c e e 2 2 2 4 2 2 e . 
                                . c c c c c e e 2 2 2 2 4 2 e . 
                                `)
                            Shooter.say("Party Mode!", 500)
                            if (Ammunition > MaxAmmo) {
                                Ammunition = MaxAmmo
                            }
                            statusbar.value = Ammunition
                        } else {
                            if (AmmoMode == 7) {
                                ReloadMode = 2
                                MaxAmmo = 1
                                ReloadTime = 2000
                                statusbar.max = MaxAmmo
                                Shooter.setImage(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . c d . . . . . . . 
                                    . . . . . . . c b . . . . . . . 
                                    . . . . . . . f f . . . . . . . 
                                    . . . . . . . c 6 . . . . . . . 
                                    . . . . . . . f f . . . . . . . 
                                    . . . . . . . 8 6 . . . . . . . 
                                    . . . . . . 8 8 9 8 . . . . . . 
                                    . . . . . . 8 6 9 8 . . . . . . 
                                    . . . . . c c c 8 8 8 . . . . . 
                                    . . . . 8 8 6 6 6 9 8 8 . . . . 
                                    . . . . f f c c e e f f . . . . 
                                    . . . . 8 8 8 6 6 6 6 9 . . . . 
                                    . . . . 8 8 8 8 6 6 6 9 . . . . 
                                    . . . . 8 8 8 8 6 6 6 6 . . . . 
                                    `)
                                Shooter.say("Beam Mode", 500)
                                if (Ammunition > MaxAmmo) {
                                    Ammunition = MaxAmmo
                                }
                                statusbar.value = Ammunition
                            } else {
                                ReloadMode = 1
                                AmmoMode = 1
                                MaxAmmo = 12
                                statusbar.max = MaxAmmo
                                ReloadTime = 125
                                Shooter.setImage(img`
                                    . . . . . . . c d . . . . . . . 
                                    . . . . . . . c d . . . . . . . 
                                    . . . . . . . c d . . . . . . . 
                                    . . . . . . . c b . . . . . . . 
                                    . . . . . . . f f . . . . . . . 
                                    . . . . . . . c d . . . . . . . 
                                    . . . . . . . f f . . . . . . . 
                                    . . . . . . . e d . . . . . . . 
                                    . . . . . . e e f e . . . . . . 
                                    . . . . . . e d f e . . . . . . 
                                    . . . . . c c c e e e . . . . . 
                                    . . . . . e d d d f e . . . . . 
                                    . . . . . f c c e e f . . . . . 
                                    . . . . . e e d d d d . . . . . 
                                    . . . . . c e e d d d . . . . . 
                                    . . . . . c e e d d d . . . . . 
                                    `)
                                Shooter.say("Rifle Mode", 500)
                                if (Ammunition > MaxAmmo) {
                                    Ammunition = MaxAmmo
                                }
                                statusbar.value = Ammunition
                            }
                        }
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Duck, SpriteKind.Explosion, function (sprite, otherSprite) {
    if (sprite.vy == 0) {
        music.knock.play()
        info.changeScoreBy(1)
        Gore = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Effect)
        Gore.setFlag(SpriteFlag.Invisible, true)
        Gore.setPosition(sprite.x, sprite.y)
        Gore.follow(sprite)
        sprite.setVelocity(randint(15, 25), randint(50, 80))
        while (!(sprite.isHittingTile(CollisionDirection.Bottom))) {
            Gore.startEffect(effects.disintegrate, 1000)
            pause(200)
        }
        sprite.destroy()
        Gore.destroy()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shot == 0 && Reloading == 0) {
        if (Ammunition > 0 && AmmoMode == 1) {
            music.pewPew.play()
            shot = 1
            Shooter.startEffect(effects.warmRadial, 100)
            Bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                `, Shooter, randint(-10, 10), -500)
            Bullet.setFlag(SpriteFlag.StayInScreen, false)
            Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
            Ammunition += -1
            statusbar.value += -1
            Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
            while (controller.A.isPressed()) {
                pause(100)
            }
            pause(500)
            shot = 0
        } else {
            if (Ammunition > 0 && AmmoMode == 3) {
                music.pewPew.play()
                shot = 1
                for (let index = 0; index < 8; index++) {
                    Bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . 5 5 . . . . . . 
                        . . . . . . . . 5 5 . . . . . . 
                        `, Shooter, randint(-150, 150), -300)
                    Bullet.setFlag(SpriteFlag.StayInScreen, false)
                    Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
                }
                Shooter.startEffect(effects.warmRadial, 150)
                Ammunition += -1
                statusbar.value += -1
                Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
                while (controller.A.isPressed()) {
                    pause(100)
                }
                pause(700)
                shot = 0
            } else {
                if (Ammunition > 0 && AmmoMode == 2) {
                    music.pewPew.play()
                    shot = 1
                    Bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        `, Shooter, randint(-40, 40), -300)
                    Bullet.setFlag(SpriteFlag.StayInScreen, false)
                    Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
                    Shooter.startEffect(effects.warmRadial, 100)
                    Ammunition += -1
                    statusbar.value += -1
                    Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
                    shot = 0
                } else {
                    if (Ammunition > 0 && AmmoMode == 4) {
                        music.pewPew.play()
                        shot = 1
                        Bullet = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . f . . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . . 5 5 5 . . . . . . 
                            `, Shooter, randint(-15, 15), -175)
                        Bullet.setFlag(SpriteFlag.StayInScreen, false)
                        Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
                        Shooter.startEffect(effects.warmRadial, 200)
                        Bullet.startEffect(effects.warmRadial)
                        Ammunition += -1
                        statusbar.value += -1
                        Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
                        while (controller.A.isPressed()) {
                            pause(100)
                        }
                        pause(750)
                        shot = 0
                    } else {
                        if (Ammunition > 0 && AmmoMode == 5) {
                            music.sonar.play()
                            shot = 1
                            Bullet = sprites.createProjectileFromSprite(img`
                                . . . . . . . c c c a c . . . . 
                                . . c c b b b a c a a a c . . . 
                                . c c a b a c b a a a b c c . . 
                                . c a b c f f f b a b b b a . . 
                                . c a c f f f 8 a b b b b b a . 
                                . c a 8 f f 8 c a b b b b b a . 
                                c c c a c c c c a b c f a b c c 
                                c c a a a c c c a c f f c b b a 
                                c c a b 6 a c c a f f c c b b a 
                                c a b c 8 6 c c a a a b b c b c 
                                c a c f f a c c a f a c c c b . 
                                c a 8 f c c b a f f c b c c c . 
                                . c b c c c c b f c a b b a c . 
                                . . a b b b b b b b b b b b c . 
                                . . . c c c c b b b b b c c . . 
                                . . . . . . . . c b b c . . . . 
                                `, Shooter, randint(-15, 15), -150)
                            Bullet.setFlag(SpriteFlag.StayInScreen, false)
                            Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
                            Shooter.startEffect(effects.fire, 500)
                            Bullet.startEffect(effects.fire)
                            Ammunition += -1
                            statusbar.value += -1
                            Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
                            while (controller.A.isPressed()) {
                                pause(100)
                            }
                            pause(2000)
                            shot = 0
                        } else {
                            if (Ammunition > 0 && AmmoMode == 6) {
                                music.bigCrash.play()
                                shot = 1
                                for (let index = 0; index < 10; index++) {
                                    RandomConfetti = randint(1, 6)
                                    if (RandomConfetti == 1) {
                                        Bullet = sprites.createProjectileFromSprite(img`
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . . 2 2 . . . . . . . 
                                            . . . . . . . 2 2 . . . . . . . 
                                            `, Shooter, randint(-160, 160), randint(-150, -300))
                                    } else {
                                        if (RandomConfetti == 2) {
                                            Bullet = sprites.createProjectileFromSprite(img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 4 4 . . . . . . . 
                                                . . . . . . . 4 4 . . . . . . . 
                                                `, Shooter, randint(-160, 160), randint(-150, -300))
                                        } else {
                                            if (RandomConfetti == 3) {
                                                Bullet = sprites.createProjectileFromSprite(img`
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . . . . . . . . . . 
                                                    . . . . . . . 5 5 . . . . . . . 
                                                    . . . . . . . 5 5 . . . . . . . 
                                                    `, Shooter, randint(-160, 160), randint(-150, -300))
                                            } else {
                                                if (RandomConfetti == 4) {
                                                    Bullet = sprites.createProjectileFromSprite(img`
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . . . . . . . . . . 
                                                        . . . . . . . 7 7 . . . . . . . 
                                                        . . . . . . . 7 7 . . . . . . . 
                                                        `, Shooter, randint(-160, 160), randint(-150, -300))
                                                } else {
                                                    if (RandomConfetti == 5) {
                                                        Bullet = sprites.createProjectileFromSprite(img`
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . . . . . . . . . . 
                                                            . . . . . . . 8 8 . . . . . . . 
                                                            . . . . . . . 8 8 . . . . . . . 
                                                            `, Shooter, randint(-160, 160), randint(-150, -300))
                                                    } else {
                                                        if (RandomConfetti == 6) {
                                                            Bullet = sprites.createProjectileFromSprite(img`
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . . 
                                                                . . . . . . . a a . . . . . . . 
                                                                . . . . . . . a a . . . . . . . 
                                                                `, Shooter, randint(-160, 160), randint(-200, -300))
                                                        } else {
                                                            Shooter.say("Error")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    Bullet.setFlag(SpriteFlag.StayInScreen, false)
                                    Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
                                    RandomConfetti = randint(1, 2)
                                    if (RandomConfetti == 1) {
                                        Bullet.startEffect(effects.coolRadial, 1000)
                                    } else {
                                        Bullet.startEffect(effects.warmRadial, 1000)
                                    }
                                }
                                Shooter.startEffect(effects.coolRadial, 200)
                                Shooter.startEffect(effects.warmRadial, 200)
                                Ammunition += -1
                                statusbar.value += -1
                                Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
                                while (controller.A.isPressed()) {
                                    pause(100)
                                }
                                pause(700)
                                shot = 0
                            } else {
                                if (Ammunition > 0 && AmmoMode == 7) {
                                    music.beamUp.play()
                                    shot = 1
                                    for (let index = 0; index < 125; index++) {
                                        Bullet = sprites.createProjectileFromSprite(img`
                                            . . . . . . 6 6 6 6 . . . . . . 
                                            . . . . . . 6 6 6 6 . . . . . . 
                                            . . . . . . 6 5 5 6 . . . . . . 
                                            . . . . . . 7 6 6 6 . . . . . . 
                                            . . . . . . 7 8 8 1 . . . . . . 
                                            . . . . . . 7 8 8 8 . . . . . . 
                                            . . . . . . 8 8 8 8 . . . . . . 
                                            . . . . . . 8 8 6 6 . . . . . . 
                                            . . . . . . 8 6 6 6 . . . . . . 
                                            . . . . . . 8 6 6 6 . . . . . . 
                                            . . . . . . 8 6 6 6 . . . . . . 
                                            . . . . . . 8 8 6 6 . . . . . . 
                                            . . . . . . 8 8 8 8 . . . . . . 
                                            . . . . . . 8 8 8 8 . . . . . . 
                                            . . . . . . 6 6 6 6 . . . . . . 
                                            . . . . . . 6 6 6 6 . . . . . . 
                                            `, Shooter, randint(0, 0), -250)
                                        Bullet.startEffect(effects.coolRadial, 100)
                                        Bullet.setFlag(SpriteFlag.StayInScreen, false)
                                        Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
                                        Shooter.startEffect(effects.coolRadial, 100)
                                        pause(25)
                                    }
                                    Ammunition += -1
                                    statusbar.value += -1
                                    Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
                                    shot = 0
                                } else {
                                    if (Ammunition <= 0) {
                                        Shooter.say("Reload!", 500)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
scene.onHitWall(SpriteKind.Explosion, function (sprite, location) {
    music.thump.play()
    sprite.startEffect(effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Duck, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite.vy == 0) {
        music.knock.play()
        info.changeScoreBy(1)
        Gore = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Effect)
        Gore.setFlag(SpriteFlag.Invisible, true)
        Gore.setPosition(sprite.x, sprite.y)
        Gore.follow(sprite)
        sprite.setVelocity(randint(15, 25), randint(50, 80))
        if (AmmoMode == 4) {
            music.smallCrash.play()
            Boom = sprites.create(img`
                . . . . . . . . . . . . . . . 2 
                . . . . . . . . . . . . . . 2 . 
                . . . . . . . . . . . . . . 2 . 
                . . . . . 2 . . . . . . . 2 . . 
                2 2 2 . . 4 2 2 2 2 . . . 2 . . 
                . . 2 2 4 4 5 5 5 4 2 4 2 2 . . 
                . . 4 4 4 5 5 5 5 5 4 4 4 4 . . 
                . 4 4 4 5 5 5 5 5 5 5 5 4 4 4 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
                . 4 4 4 5 5 5 5 5 5 5 5 5 4 2 . 
                . 4 2 4 4 5 5 5 5 5 5 5 5 4 4 . 
                . 2 2 4 4 4 5 5 5 5 5 5 5 4 4 . 
                . . . 4 4 4 4 4 5 5 5 4 2 4 4 . 
                . . . 2 . . 4 2 4 4 4 4 2 2 2 2 
                . 2 2 . . . . . 2 . . . . . . . 
                . . . . . . . . . 2 . . . . . . 
                `, SpriteKind.Explosion)
            Boom.setPosition(otherSprite.x, otherSprite.y)
            otherSprite.destroy()
            for (let index = 0; index < 5; index++) {
                Debris = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 5 4 2 . . . . . . 
                    . . . . 2 2 5 2 2 4 2 . . . . . 
                    . . . . 4 2 5 5 5 4 2 . . . . . 
                    . . . . 4 2 2 5 4 2 2 2 . . . . 
                    . . . . 2 5 5 4 2 2 2 . . . . . 
                    . . . . . 5 5 4 2 4 . . . . . . 
                    . . . . . . 2 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Explosion)
                Debris.setVelocity(randint(-200, 200), 100)
                Debris.setPosition(Boom.x, Boom.y)
                Debris.y += 10
                Debris.setFlag(SpriteFlag.StayInScreen, false)
                Debris.setFlag(SpriteFlag.Invisible, true)
                Debris.setFlag(SpriteFlag.DestroyOnWall, true)
                Debris.startEffect(effects.fire, 3000)
                Debris.lifespan = 350
            }
            for (let index = 0; index < 5; index++) {
                Debris = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 5 4 2 . . . . . . 
                    . . . . 2 2 5 2 2 4 2 . . . . . 
                    . . . . 4 2 5 5 5 4 2 . . . . . 
                    . . . . 4 2 2 5 4 2 2 2 . . . . 
                    . . . . 2 5 5 4 2 2 2 . . . . . 
                    . . . . . 5 5 4 2 4 . . . . . . 
                    . . . . . . 2 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Explosion)
                Debris.setVelocity(randint(-200, 200), -100)
                Debris.setPosition(Boom.x, Boom.y)
                Debris.y += -10
                Debris.setFlag(SpriteFlag.StayInScreen, false)
                Debris.setFlag(SpriteFlag.Invisible, true)
                Debris.setFlag(SpriteFlag.DestroyOnWall, true)
                Debris.startEffect(effects.fire, 3000)
                Debris.lifespan = 350
            }
            Boom.destroy(effects.ashes, 300)
        }
        if (AmmoMode == 5) {
            music.smallCrash.play()
            Boom = sprites.create(img`
                . . . . . . . . . . . . . . . 2 
                . . . . . . . . . . . . . . 2 . 
                . . . . . . . . . . . . . . 2 . 
                . . . . . 2 . . . . . . . 2 . . 
                2 2 2 . . 4 2 2 2 2 . . . 2 . . 
                . . 2 2 4 4 5 5 5 4 2 4 2 2 . . 
                . . 4 4 4 5 5 5 5 5 4 4 4 4 . . 
                . 4 4 4 5 5 5 5 5 5 5 5 4 4 4 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
                . 4 4 4 5 5 5 5 5 5 5 5 5 4 2 . 
                . 4 2 4 4 5 5 5 5 5 5 5 5 4 4 . 
                . 2 2 4 4 4 5 5 5 5 5 5 5 4 4 . 
                . . . 4 4 4 4 4 5 5 5 4 2 4 4 . 
                . . . 2 . . 4 2 4 4 4 4 2 2 2 2 
                . 2 2 . . . . . 2 . . . . . . . 
                . . . . . . . . . 2 . . . . . . 
                `, SpriteKind.Explosion)
            Boom.setPosition(otherSprite.x, otherSprite.y)
            otherSprite.destroy()
            for (let index = 0; index < 10; index++) {
                Debris = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 5 4 2 . . . . . . 
                    . . . . 2 2 5 2 2 4 2 . . . . . 
                    . . . . 4 2 5 5 5 4 2 . . . . . 
                    . . . . 4 2 2 5 4 2 2 2 . . . . 
                    . . . . 2 5 5 4 2 2 2 . . . . . 
                    . . . . . 5 5 4 2 4 . . . . . . 
                    . . . . . . 2 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Explosion)
                Debris.setVelocity(randint(-200, 200), 50)
                Debris.setPosition(Boom.x, Boom.y)
                Debris.y += 10
                Debris.setFlag(SpriteFlag.StayInScreen, false)
                Debris.setFlag(SpriteFlag.BounceOnWall, true)
                Debris.startEffect(effects.fire)
                Debris.setFlag(SpriteFlag.AutoDestroy, true)
                Debris.lifespan = 5000
            }
            for (let index = 0; index < 10; index++) {
                Debris = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 5 4 2 . . . . . . 
                    . . . . 2 2 5 2 2 4 2 . . . . . 
                    . . . . 4 2 5 5 5 4 2 . . . . . 
                    . . . . 4 2 2 5 4 2 2 2 . . . . 
                    . . . . 2 5 5 4 2 2 2 . . . . . 
                    . . . . . 5 5 4 2 4 . . . . . . 
                    . . . . . . 2 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Explosion)
                Debris.setVelocity(randint(-200, 200), -50)
                Debris.setPosition(Boom.x, Boom.y)
                Debris.y += -10
                Debris.setFlag(SpriteFlag.StayInScreen, false)
                Debris.setFlag(SpriteFlag.BounceOnWall, true)
                Debris.startEffect(effects.fire)
                Debris.lifespan = 5000
            }
            Boom.destroy(effects.ashes, 200)
        }
        while (!(sprite.isHittingTile(CollisionDirection.Bottom))) {
            Gore.startEffect(effects.disintegrate, 1000)
            pause(200)
        }
        sprite.destroy()
        Gore.destroy()
    }
})
info.onCountdownEnd(function () {
    game.splash("You Got " + info.score() + " Ducks!")
    game.over(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    music.knock.play()
    sprite.destroy(effects.ashes, 200)
    sprite.destroy(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.zapped.play()
    info.changeLifeBy(-1)
    sprite.destroy(effects.ashes, 200)
    otherSprite.startEffect(effects.ashes, 200)
    otherSprite.startEffect(effects.fire, 200)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Reloading = 1
    while (Ammunition < MaxAmmo) {
        if (ReloadMode == 1) {
            Shooter.say("Reloading... " + Ammunition + "/" + MaxAmmo, ReloadTime)
            pause(ReloadTime)
            Ammunition += 1
            statusbar.value += 1
        } else {
            if (ReloadMode == 2) {
                Shooter.say("Reloading... ", ReloadTime)
                pause(ReloadTime)
                Ammunition = MaxAmmo
                statusbar.value = MaxAmmo
            } else {
                Ducks.say("Error")
            }
        }
    }
    Shooter.say("Ammo: " + Ammunition + "/" + MaxAmmo, 200)
    Reloading = 0
})
sprites.onOverlap(SpriteKind.Effect, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
})
info.onLifeZero(function () {
    game.splash("You Got " + info.score() + " Ducks!")
    game.over(false, effects.splatter)
})
scene.onHitWall(SpriteKind.Duck, function (sprite, location) {
    sprite.destroy()
})
let EnemyBomb: Sprite = null
let EvilDucks: Sprite = null
let Ducks: Sprite = null
let Debris: Sprite = null
let Boom: Sprite = null
let RandomConfetti = 0
let Bullet: Sprite = null
let Gore: Sprite = null
let Reloading = 0
let shot = 0
let ReloadMode = 0
let AmmoMode = 0
let Shooter: Sprite = null
let MaxAmmo = 0
let Ammunition = 0
let ReloadTime = 0
let statusbar: StatusBarSprite = null
let Tick = 0
statusbar = statusbars.create(15, 3, StatusBarKind.AmmoBar)
ReloadTime = 125
Ammunition = 12
MaxAmmo = 12
Shooter = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e d . . . . . . . 
    . . . . . . e e f e . . . . . . 
    . . . . . . e d f e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . . e d d d f e . . . . . 
    . . . . . f c c e e f . . . . . 
    . . . . . e e d d d d . . . . . 
    . . . . . c e e d d d . . . . . 
    . . . . . c e e d d d . . . . . 
    `, SpriteKind.Player)
AmmoMode = 1
ReloadMode = 1
shot = 0
Reloading = 0
let DuckAnimation = animation.createAnimation(ActionKind.Flying, 200)
DuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
DuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
DuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
DuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
let EvilDuckAnimation = animation.createAnimation(ActionKind.EvilyFlying, 200)
EvilDuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 2 5 d 4 2 . . 
    . . b d 5 5 b 1 2 2 5 4 4 c . . 
    b b d b 5 5 5 d 2 b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
EvilDuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 2 5 5 d 2 . . 
    . . . . b 5 5 1 2 2 5 d 4 c . . 
    . . . . b 5 5 d 2 b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
EvilDuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 2 5 d 4 c . . 
    . . . . b 5 5 1 2 2 d d 4 4 4 b 
    . . . . b 5 5 d 2 b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
EvilDuckAnimation.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d 2 . . 
    . . . . b 5 5 1 2 2 5 d 4 c . . 
    . . . . b 5 5 d 2 b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
Shooter.setFlag(SpriteFlag.StayInScreen, true)
Shooter.setPosition(81, 103)
statusbar.max = 12
statusbar.attachToSprite(Shooter, 0, 0)
statusbar.positionDirection(CollisionDirection.Right)
statusbar.setColor(7, 2)
statusbar.setBarBorder(0.1, 15)
scene.setBackgroundColor(9)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    6 6 7 6 7 6 7 6 6 d 6 7 7 6 7 7 
    d d 6 7 7 6 7 d d d 7 6 d 6 7 6 
    d d d d d d 6 d d d d d d d 6 d 
    d d d d d d d d d d d d d d d d 
    d 1 1 d 1 d d d d d 1 d d d d d 
    d 1 1 d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d b d d d d d d d 1 d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d d d b b d d d 
    d d d d d d d d d d d b b d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d 1 d d d d d d d d 
    d d d d d d d d d d d d d d 1 d 
    `, true)
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, false)
scene.setTileMap(img`
    . . . . . . . . . . 
    1 1 1 . . . . . . . 
    . 1 1 1 . . . 1 1 1 
    . . . . . . . 1 1 . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    7 7 7 7 7 7 7 7 7 7 
    `)
info.setLife(5)
game.splash("Welcome to Duck Hunt!")
game.splash("Your goal is to shoot as many", " ducks as you can in a minute!")
game.splash("Controls: A to shoot, Down to", "reload, Arrow keys to move,")
game.splash("and B to switch", "between firemodes.")
info.startCountdown(60)
forever(function () {
    EvilDucks = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 2 f 5 5 d f . . 
        . . . . b 5 5 2 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Duck)
    animation.attachAnimation(EvilDucks, EvilDuckAnimation)
    animation.setAction(EvilDucks, ActionKind.EvilyFlying)
    EvilDucks.setPosition(0, randint(10, 60))
    EvilDucks.setVelocity(randint(60, 65), 0)
    for (let index = 0; index < randint(1, 3); index++) {
        pause(randint(200, 2000))
        EnemyBomb = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . a b a a . . . . . . 
            . . . . . c b a f c a c . . . . 
            . . . . c b b b f f a c c . . . 
            . . . . b b f a b b a a c . . . 
            . . . . c b f f b a f c a . . . 
            . . . . . c a a c b b a . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        EnemyBomb.startEffect(effects.fire)
        EnemyBomb.setPosition(EvilDucks.x, EvilDucks.y)
        music.thump.play()
        EnemyBomb.setVelocity(0, 75)
    }
})
forever(function () {
    pause(randint(15, 25) * 100)
    Ducks = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Duck)
    animation.attachAnimation(Ducks, DuckAnimation)
    animation.setAction(Ducks, ActionKind.Flying)
    Ducks.setPosition(0, randint(10, 60))
    Ducks.setVelocity(randint(60, 65), 0)
})
forever(function () {
    controller.moveSprite(Shooter, 100, 0)
})
