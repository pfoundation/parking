var app = document.getElementById('word');

var typewriter = new Typewriter(app, {
  loop: false
});

var pauseInterval = null;

typewriter.typeString('ure')
  .pauseFor(pauseInterval)
  .deleteAll()
  .typeString('atriotic')
  .pauseFor(pauseInterval)
  .deleteAll()
  .typeString('roud')
  .pauseFor(pauseInterval)
  .deleteAll()
  .typeString('assionate')
  .pauseFor(pauseInterval)
  .deleteAll()
  .typeString('ersistent')
  .pauseFor(pauseInterval)
  .deleteAll()
  .typeString('roactive')
  .pauseFor(pauseInterval)
  .deleteAll()
  .typeString('ixel')
  .pauseFor(pauseInterval)
  .start();
