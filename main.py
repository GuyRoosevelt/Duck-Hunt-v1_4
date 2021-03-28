class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    Flying = 3
    EvilyFlying = 4
@namespace
class SpriteKind:
    Effect = SpriteKind.create()
    Duck = SpriteKind.create()
    Explosion = SpriteKind.create()
    GOD = SpriteKind.create()
@namespace
class StatusBarKind:
    AmmoBar = StatusBarKind.create()

def on_b_pressed():
    global AmmoMode, ReloadMode, MaxAmmo, ReloadTime, Ammunition
    AmmoMode += 1
    if AmmoMode == 1:
        ReloadMode = 1
        AmmoMode = 1
        MaxAmmo = 12
        statusbar.max = MaxAmmo
        ReloadTime = 125
        Shooter.set_image(img("""
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
        """))
        Shooter.say("Rifle Mode", 500)
        if Ammunition > MaxAmmo:
            Ammunition = MaxAmmo
        statusbar.value = Ammunition
    else:
        if AmmoMode == 2:
            ReloadMode = 2
            MaxAmmo = 30
            ReloadTime = 2000
            statusbar.value = MaxAmmo
            Shooter.set_image(img("""
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
            """))
            Shooter.say("Full Auto Mode", 500)
            if Ammunition > MaxAmmo:
                Ammunition = MaxAmmo
            statusbar.max = 20
        else:
            if AmmoMode == 3:
                ReloadMode = 1
                MaxAmmo = 4
                ReloadTime = 170
                statusbar.value = MaxAmmo
                Shooter.set_image(img("""
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
                """))
                Shooter.say("Shotgun Mode", 500)
                if Ammunition > MaxAmmo:
                    Ammunition = MaxAmmo
                statusbar.max = Ammunition
            else:
                if AmmoMode == 4:
                    ReloadMode = 2
                    MaxAmmo = 2
                    ReloadTime = 1000
                    statusbar.max = MaxAmmo
                    Shooter.set_image(img("""
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
                    """))
                    Shooter.say("RPG Mode", 500)
                    if Ammunition > MaxAmmo:
                        Ammunition = MaxAmmo
                    statusbar.value = Ammunition
                else:
                    if AmmoMode == 5:
                        ReloadMode = 2
                        MaxAmmo = 1
                        ReloadTime = 7500
                        statusbar.max = MaxAmmo
                        Shooter.set_image(img("""
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
                        """))
                        Shooter.say("Meteor Mode", 500)
                        if Ammunition > MaxAmmo:
                            Ammunition = MaxAmmo
                        statusbar.value = Ammunition
                    else:
                        if AmmoMode == 6:
                            ReloadMode = 2
                            MaxAmmo = 3
                            ReloadTime = 1500
                            statusbar.max = MaxAmmo
                            Shooter.set_image(img("""
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
                            """))
                            Shooter.say("PARTY Mode!", 500)
                            if Ammunition > MaxAmmo:
                                Ammunition = MaxAmmo
                            statusbar.value = Ammunition
                        else:
                            ReloadMode = 1
                            AmmoMode = 1
                            MaxAmmo = 12
                            statusbar.max = MaxAmmo
                            ReloadTime = 125
                            Shooter.set_image(img("""
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
                            """))
                            Shooter.say("Rifle Mode", 500)
                            if Ammunition > MaxAmmo:
                                Ammunition = MaxAmmo
                            statusbar.value = Ammunition
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite, otherSprite):
    global Gore
    if sprite.vy == 0:
        music.knock.play()
        info.change_score_by(1)
        Gore = sprites.create(img("""
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
            """),
            SpriteKind.Effect)
        Gore.set_position(sprite.x, sprite.y)
        Gore.follow(sprite)
        sprite.set_velocity(randint(15, 25), randint(50, 80))
        while not (sprite.is_hitting_tile(CollisionDirection.BOTTOM)):
            Gore.start_effect(effects.disintegrate, 1000)
            pause(200)
        sprite.destroy()
        Gore.destroy()
sprites.on_overlap(SpriteKind.Duck, SpriteKind.Explosion, on_on_overlap)

def on_a_pressed():
    global shot, Bullet, Ammunition, RandomConfetti
    if shot == 0 and Reloading == 0:
        if Ammunition > 0 and AmmoMode == 1:
            music.pew_pew.play()
            shot = 1
            Shooter.start_effect(effects.warm_radial, 100)
            Bullet = sprites.create_projectile_from_sprite(img("""
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
                """),
                Shooter,
                randint(-10, 10),
                -500)
            Bullet.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
            Bullet.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
            Ammunition += -1
            statusbar.value += -1
            Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
            while controller.A.is_pressed():
                pause(100)
            pause(500)
            shot = 0
        else:
            if Ammunition > 0 and AmmoMode == 3:
                music.pew_pew.play()
                shot = 1
                for index in range(8):
                    Bullet = sprites.create_projectile_from_sprite(img("""
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
                        """),
                        Shooter,
                        randint(-150, 150),
                        -300)
                    Bullet.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                    Bullet.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                Shooter.start_effect(effects.warm_radial, 150)
                Ammunition += -1
                statusbar.value += -1
                Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
                while controller.A.is_pressed():
                    pause(100)
                pause(700)
                shot = 0
            else:
                if Ammunition > 0 and AmmoMode == 2:
                    music.pew_pew.play()
                    shot = 1
                    Bullet = sprites.create_projectile_from_sprite(img("""
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
                        """),
                        Shooter,
                        randint(-40, 40),
                        -300)
                    Bullet.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                    Bullet.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                    Shooter.start_effect(effects.warm_radial, 100)
                    Ammunition += -1
                    statusbar.value += -1
                    Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
                    shot = 0
                else:
                    if Ammunition > 0 and AmmoMode == 4:
                        music.pew_pew.play()
                        shot = 1
                        Bullet = sprites.create_projectile_from_sprite(img("""
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
                                                            . . . . . . . . f . . . . . . . 
                                                            . . . . . . . f f f . . . . . . 
                                                            . . . . . . . f f f . . . . . . 
                                                            . . . . . . . f f f . . . . . . 
                                                            . . . . . . . 5 5 5 . . . . . .
                            """),
                            Shooter,
                            randint(-15, 15),
                            -175)
                        Bullet.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                        Bullet.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                        Shooter.start_effect(effects.warm_radial, 200)
                        Bullet.start_effect(effects.warm_radial)
                        Ammunition += -1
                        statusbar.value += -1
                        Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
                        while controller.A.is_pressed():
                            pause(100)
                        pause(1000)
                        shot = 0
                    else:
                        if Ammunition > 0 and AmmoMode == 5:
                            music.big_crash.play()
                            shot = 1
                            Bullet = sprites.create_projectile_from_sprite(img("""
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
                                """),
                                Shooter,
                                randint(-15, 15),
                                -150)
                            Bullet.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                            Bullet.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                            Shooter.start_effect(effects.fire, 500)
                            Bullet.start_effect(effects.fire)
                            Ammunition += -1
                            statusbar.value += -1
                            Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
                            while controller.A.is_pressed():
                                pause(100)
                            pause(2000)
                            shot = 0
                        else:
                            if Ammunition > 0 and AmmoMode == 6:
                                music.zapped.play()
                                shot = 1
                                for index2 in range(10):
                                    RandomConfetti = randint(1, 6)
                                    if RandomConfetti == 1:
                                        Bullet = sprites.create_projectile_from_sprite(img("""
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
                                            """),
                                            Shooter,
                                            randint(-160, 160),
                                            randint(-150, -300))
                                    else:
                                        if RandomConfetti == 2:
                                            Bullet = sprites.create_projectile_from_sprite(img("""
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
                                                """),
                                                Shooter,
                                                randint(-160, 160),
                                                randint(-150, -300))
                                        else:
                                            if RandomConfetti == 3:
                                                Bullet = sprites.create_projectile_from_sprite(img("""
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
                                                    """),
                                                    Shooter,
                                                    randint(-160, 160),
                                                    randint(-150, -300))
                                            else:
                                                if RandomConfetti == 4:
                                                    Bullet = sprites.create_projectile_from_sprite(img("""
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
                                                        """),
                                                        Shooter,
                                                        randint(-160, 160),
                                                        randint(-150, -300))
                                                else:
                                                    if RandomConfetti == 5:
                                                        Bullet = sprites.create_projectile_from_sprite(img("""
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
                                                            """),
                                                            Shooter,
                                                            randint(-160, 160),
                                                            randint(-150, -300))
                                                    else:
                                                        if RandomConfetti == 6:
                                                            Bullet = sprites.create_projectile_from_sprite(img("""
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
                                                                """),
                                                                Shooter,
                                                                randint(-160, 160),
                                                                randint(-200, -300))
                                                        else:
                                                            Shooter.say("Error")
                                    Bullet.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                                    Bullet.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                                    RandomConfetti = randint(1, 2)
                                    if RandomConfetti == 1:
                                        Bullet.start_effect(effects.cool_radial, 1000)
                                    else:
                                        Bullet.start_effect(effects.warm_radial, 1000)
                                Shooter.start_effect(effects.cool_radial, 200)
                                Shooter.start_effect(effects.warm_radial, 200)
                                Ammunition += -1
                                statusbar.value += -1
                                Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
                                while controller.A.is_pressed():
                                    pause(100)
                                pause(700)
                                shot = 0
                            else:
                                if Ammunition <= 0:
                                    Shooter.say("Reload!", 500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_hit_wall(sprite, location):
    sprite.start_effect(effects.ashes, 500)
scene.on_hit_wall(SpriteKind.Explosion, on_hit_wall)

def on_on_overlap2(sprite, otherSprite):
    global Gore, Boom, Debris
    if sprite.vy == 0:
        music.knock.play()
        info.change_score_by(1)
        Gore = sprites.create(img("""
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
            """),
            SpriteKind.Effect)
        Gore.set_position(sprite.x, sprite.y)
        Gore.follow(sprite)
        sprite.set_velocity(randint(15, 25), randint(50, 80))
        if AmmoMode == 4:
            music.small_crash.play()
            Boom = sprites.create(img("""
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
                """),
                SpriteKind.Explosion)
            Boom.set_position(otherSprite.x, otherSprite.y)
            otherSprite.destroy()
            for index3 in range(5):
                Debris = sprites.create(img("""
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
                    """),
                    SpriteKind.Explosion)
                Debris.set_velocity(randint(0, 160), 100)
                Debris.set_position(Boom.x, Boom.y)
                Debris.y += 10
                Debris.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                Debris.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                Debris.start_effect(effects.fire, 3000)
            for index4 in range(5):
                Debris = sprites.create(img("""
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
                    """),
                    SpriteKind.Explosion)
                Debris.set_velocity(randint(-160, 0), -100)
                Debris.set_position(Boom.x, Boom.y)
                Debris.y += -10
                Debris.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                Debris.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                Debris.start_effect(effects.fire, 3000)
            Boom.destroy(effects.ashes, 200)
        if AmmoMode == 5:
            music.small_crash.play()
            Boom = sprites.create(img("""
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
                """),
                SpriteKind.Explosion)
            Boom.set_position(otherSprite.x, otherSprite.y)
            otherSprite.destroy()
            for index5 in range(10):
                Debris = sprites.create(img("""
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
                    """),
                    SpriteKind.Explosion)
                Debris.set_velocity(randint(160, 0), 50)
                Debris.set_position(Boom.x, Boom.y)
                Debris.y += 10
                Debris.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                Debris.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
                Debris.start_effect(effects.fire)
                Debris.set_flag(SpriteFlag.AUTO_DESTROY, True)
                Debris.lifespan = 5000
            for index6 in range(10):
                Debris = sprites.create(img("""
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
                    """),
                    SpriteKind.Explosion)
                Debris.set_velocity(randint(0, -160), -50)
                Debris.set_position(Boom.x, Boom.y)
                Debris.y += -10
                Debris.set_flag(SpriteFlag.STAY_IN_SCREEN, False)
                Debris.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
                Debris.start_effect(effects.fire)
                Debris.lifespan = 5000
            Boom.destroy(effects.ashes, 200)
        while not (sprite.is_hitting_tile(CollisionDirection.BOTTOM)):
            Gore.start_effect(effects.disintegrate, 1000)
            pause(200)
        sprite.destroy()
        Gore.destroy()
sprites.on_overlap(SpriteKind.Duck, SpriteKind.projectile, on_on_overlap2)

def on_countdown_end():
    game.splash("You Got " + str(info.score()) + " Ducks!")
    game.over(True, effects.confetti)
info.on_countdown_end(on_countdown_end)

def on_hit_wall2(sprite, location):
    sprite.destroy(effects.ashes, 200)
    sprite.destroy(effects.fire, 200)
scene.on_hit_wall(SpriteKind.enemy, on_hit_wall2)

def on_on_overlap3(sprite, otherSprite):
    info.change_life_by(-1)
    sprite.destroy(effects.ashes, 200)
    otherSprite.start_effect(effects.ashes, 200)
    otherSprite.start_effect(effects.fire, 200)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap3)

def on_down_pressed():
    global Reloading, Ammunition
    Reloading = 1
    while Ammunition < MaxAmmo:
        if ReloadMode == 1:
            Shooter.say("Reloading... " + str(Ammunition) + "/" + str(MaxAmmo),
                ReloadTime)
            pause(ReloadTime)
            Ammunition += 1
            statusbar.value += 1
        else:
            if ReloadMode == 2:
                Shooter.say("Reloading... ", ReloadTime)
                pause(ReloadTime)
                Ammunition = MaxAmmo
                statusbar.value = MaxAmmo
            else:
                Ducks.say("Error")
    Shooter.say("Ammo: " + str(Ammunition) + "/" + str(MaxAmmo), 200)
    Reloading = 0
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap4(sprite, otherSprite):
    sprite.destroy()
sprites.on_overlap(SpriteKind.Effect, SpriteKind.player, on_on_overlap4)

def on_life_zero():
    game.splash("You Got " + str(info.score()) + " Ducks!")
    game.over(False, effects.splatter)
info.on_life_zero(on_life_zero)

def on_hit_wall3(sprite, location):
    sprite.destroy()
scene.on_hit_wall(SpriteKind.Duck, on_hit_wall3)

EnemyBomb: Sprite = None
EvilDucks: Sprite = None
Ducks: Sprite = None
Debris: Sprite = None
Boom: Sprite = None
RandomConfetti = 0
Bullet: Sprite = None
Gore: Sprite = None
Reloading = 0
shot = 0
ReloadMode = 0
AmmoMode = 0
Shooter: Sprite = None
MaxAmmo = 0
Ammunition = 0
ReloadTime = 0
statusbar: StatusBarSprite = None
Tick = 0
statusbar = statusbars.create(15, 3, StatusBarKind.AmmoBar)
ReloadTime = 125
Ammunition = 12
MaxAmmo = 12
Shooter = sprites.create(img("""
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
    """),
    SpriteKind.player)
AmmoMode = 1
ReloadMode = 1
shot = 0
Reloading = 0
DuckAnimation = animation.create_animation(ActionKind.Flying, 200)
DuckAnimation.add_animation_frame(img("""
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
"""))
DuckAnimation.add_animation_frame(img("""
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
"""))
DuckAnimation.add_animation_frame(img("""
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
"""))
DuckAnimation.add_animation_frame(img("""
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
"""))
EvilDuckAnimation = animation.create_animation(ActionKind.EvilyFlying, 200)
EvilDuckAnimation.add_animation_frame(img("""
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
"""))
EvilDuckAnimation.add_animation_frame(img("""
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
"""))
EvilDuckAnimation.add_animation_frame(img("""
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
"""))
EvilDuckAnimation.add_animation_frame(img("""
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
"""))
Shooter.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
Shooter.set_position(81, 103)
statusbar.max = 12
statusbar.attach_to_sprite(Shooter, 0, 0)
statusbar.position_direction(CollisionDirection.RIGHT)
statusbar.set_color(7, 2)
statusbar.set_bar_border(0.1, 15)
scene.set_background_color(9)
scene.set_tile(7,
    img("""
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
    """),
    True)
scene.set_tile(1,
    img("""
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
    """),
    False)
scene.set_tile_map(img("""
    . . . . . . . . . . 
        1 1 1 . . . . . . . 
        . 1 1 1 . . . 1 1 1 
        . . . . . . . 1 1 . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        7 7 7 7 7 7 7 7 7 7
"""))
info.set_life(5)
game.splash("Welcome to Duck Hunt!")
game.splash("Your goal is to shoot as many",
    " ducks as you can in a minute!")
game.splash("Controls: A to shoot, Down to",
    "reload, Arrow keys to move,")
game.splash("and B to switch", "between firemodes.")
info.start_countdown(60)

def on_forever():
    global Ducks
    pause(randint(15, 25) * 100)
    Ducks = sprites.create(img("""
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
        """),
        SpriteKind.Duck)
    animation.attach_animation(Ducks, DuckAnimation)
    animation.set_action(Ducks, ActionKind.Flying)
    Ducks.set_position(0, randint(10, 60))
    Ducks.set_velocity(randint(60, 65), 0)
forever(on_forever)

def on_forever2():
    global EvilDucks, EnemyBomb
    EvilDucks = sprites.create(img("""
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
        """),
        SpriteKind.Duck)
    animation.attach_animation(EvilDucks, EvilDuckAnimation)
    animation.set_action(EvilDucks, ActionKind.EvilyFlying)
    EvilDucks.set_position(0, randint(10, 60))
    EvilDucks.set_velocity(randint(60, 65), 0)
    for index7 in range(randint(1, 3)):
        pause(randint(200, 2000))
        EnemyBomb = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        EnemyBomb.start_effect(effects.fire)
        EnemyBomb.set_position(EvilDucks.x, EvilDucks.y)
        EnemyBomb.set_velocity(0, 75)
forever(on_forever2)

def on_forever3():
    controller.move_sprite(Shooter, 100, 0)
forever(on_forever3)
