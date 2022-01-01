import { Scene } from 'phaser'
import sky from '@/game/assets/BG.png'
import ground from '@/game/assets/Tiles/Tile (2).png'
import bomb from '@/game/assets/bomb.png'
import dude from '@/game/assets/Objects/Tree.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('bg', sky)
    this.load.image('ground', ground)
    this.load.image('bomb', bomb)
    this.load.image('dude', dude)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
