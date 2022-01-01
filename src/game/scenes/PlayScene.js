import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
  }

  create() {
    var platforms;
    var player;

    this.add.image(600, 500, 'bg')

    platforms = this.physics.add.staticGroup({
     
    });

    platforms.create(985, 550, 'ground').setScale(0.5).refreshBody();
    platforms.create(920, 550, 'ground').setScale(0.5).refreshBody();
    platforms.create(855, 550, 'ground').setScale(0.5).refreshBody();
    platforms.create(790, 550, 'ground').setScale(0.5).refreshBody();
    platforms.create(725, 550, 'ground').setScale(0.5).refreshBody();

    player = this.physics.add.sprite(800, 100, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);


    const bomb = this.physics.add.image(400, 200, 'bomb')
    bomb.setCollideWorldBounds(true)
    bomb.body.onWorldBounds = true // enable worldbounds collision event
    bomb.setBounce(1)
    bomb.setVelocity(500, 60)

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.75 })
    })
  }

  update() {
  }
}
