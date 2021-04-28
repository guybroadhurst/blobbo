class Blobbo {
  constructor() {
    // lets set up the blob
    this.numOfPoints = 500
    this.time = 0
  }

  wave(num, amp, freq, speed) {
    return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time * speed)
  }

  draw() {
    // lets draw the blobbo
    noStroke()
    fill("#91fc9e")
    beginShape()
    for(let num = 0; num < this.numOfPoints; num = num + 1) {

      let angle = TWO_PI * num / this.numOfPoints
      let radius = Math.min(windowWidth, windowHeight) * 0.25
        + this.wave(num, 20, 3, 1) 
        + this.wave(num, 15, 7, 3) 
        + this.wave(num, 5, 9, 0) 
        + this.wave(num, 2, 8, -5)

      let x = (windowWidth / 2) + radius * cos(angle)
      let y = (windowHeight / 2) + radius * sin(angle)

      vertex(x, y)

    }
    
    endShape()

    this.time = this.time + 0.01
  }
}