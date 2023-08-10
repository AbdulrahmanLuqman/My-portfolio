import { defineStore } from 'pinia'

export default function Store(){
  return defineStore('elements', {
    state: () =>({
      show: false,
      inDarkMode: false,
      // green: false,
      // gold: false,
      // red: true
      color: 'yellow'
    }),
    actions: {
      // toggleModes(){
      //   this.isDarkMode = !this.isDarkMode
      // },
      gree(){
        // this.green = true
        // this.gold = false
        // this.red = false
        // this.color = 'green'
      },
      goldd(){
        // this.green = false,
        // this.gold = true,
        // this.red = false
        // this.color = 'blue'
      }
    }
  })()
}
