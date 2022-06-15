AFRAME.registerComponent('move-diver', {
    schema: {
      SpeedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener('keydown', (e) => {
        this.data.SpeedOfAscent = this.el.getAttribute('position')
        var pos = this.data.SpeedOfAscent
        if (e.key === "ArrowRight") {
          if (pos.x < 10) {
            pos.x += 0.05
            this.el.setAttribute('position', pos )
          }
        }
        if (e.key === "ArrowLeft") {
          if (pos.x > -10) {
            pos.x -= 0.05
            this.el.setAttribute('position', pos )
          }
        }
        if (e.key === "ArrowUp") {
          if (pos.z < 2) {
            pos.z -= 0.05
            this.el.setAttribute('position', pos)
          }
        }
        if (e.key === "ArrowDown") {
          if (pos.z < 2) {
            pos.z += 0.05
            this.el.setAttribute('position', pos)
          }
        }
      })
    }
  })
  
  
AFRAME.registerComponent('plain-rotation-reader', {
  schema: {
    SpeedOfRotation: { type: "number", default: 0 },
    SpeedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener('keydown', (e) => {
      this.data.SpeedOfRotation = this.el.getAttribute('rotation')
      this.data.SpeedOfAscent = this.el.getAttribute('position')
      var rot = this.data.SpeedOfRotation
      var pos = this.data.SpeedOfAscent
      if (e.key === "ArrowRight") {
        if (rot.x < 10) {
          rot.x += 0.5
          this.el.setAttribute('rotation', rot)
        }
      }
      if (e.key === "ArrowLeft") {
        if (rot.x > -10) {
          rot.x -= 0.5
          this.el.setAttribute('rotation', rot)
        }
      }
      if (e.key === "ArrowUp") {
        if (rot.z < 20) {
          rot.z += 0.5
          this.el.setAttribute('rotation', rot)
        }
        if (pos.y < 2) {
          pos.y += 0.01
          this.el.setAttribute('position', pos)
        }
      }
      if (e.key === "ArrowDown") {
        if (rot.z > -10) {
          rot.z -= 0.5
          this.el.setAttribute('rotation', rot)
        }
        if (pos.y > -2) {
          pos.y -= 0.01
          this.el.setAttribute('position', pos)
        }
      }
    })
  }
})


  