window.onload = () => {
  const container = document.querySelector('#container')
  const rabbit = document.querySelector('#rabbit')
  rabbit.style.transform = ' translate(-50%, 0%) translateZ(20px)'

  let perspective = 1;
  const timer = setInterval(() => {
    if (perspective > 100 ) {
      clearInterval(timer)

      let ok = true;
      window.addEventListener('mousemove', (ev) => {
        if (!ok) {
          setTimeout(() => {
            ok = true;
          }, 1000 / 60)
          return;
        }

      container.style.perspectiveOrigin = `${50 - (ev.x - window.innerWidth/2) * 25 / (window.innerWidth/2)}% ${50 - (ev.y - window.innerHeight/2) * 25 / (window.innerHeight/2)}%`
      ok = false
      })
      return
    }
    container.style.perspective = perspective+'px'
    if (perspective < 50) {
      perspective += 5
    }
    perspective += 5
    if (perspective > 90) {
      perspective -= 4
    }
  }, 50)
}