var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pin1 = createSprite(200, 300, 20, 20);
pin1.shapeColor="orange";
var pin2 = createSprite(180, 320, 20, 20);
pin2.shapeColor="green";
var pin3 = createSprite(220, 320, 20, 20);
pin3.shapeColor="blue";
var pin4 = createSprite(160, 340, 20, 20);
pin4.shapeColor="red";
var pin5 = createSprite(200, 340, 20, 20);
pin5.shapeColor="yellow";
var pin6 = createSprite(240, 340, 20, 20);
pin6.shapeColor="pink";
var ball = createSprite(200, 10, 20, 20);




function draw() {
background("white")
if (keyDown("space")){
 ball.velocityY=17;
 ball.velocityX=10
 
  
}




 
pin1.bounce(ball)
pin2.bounce(ball)
pin3.bounce(ball)
pin4.bounce(ball)
pin5.bounce(ball)
pin6.bounce(ball)

pin1.bounce(pin2)
pin1.bounce(pin3)
pin1.bounce(pin4)
pin1.bounce(pin5)
pin1.bounce(pin6)

pin2.bounce(pin1)
pin2.bounce(pin3)
pin2.bounce(pin4)
pin2.bounce(pin5)
pin2.bounce(pin6)
  
pin3.bounce(pin1)
pin3.bounce(pin2)
pin3.bounce(pin4)
pin3.bounce(pin5)
pin3.bounce(pin6)

pin4.bounce(pin1)
pin4.bounce(pin2)
pin4.bounce(pin3)
pin4.bounce(pin5)
pin4.bounce(pin6)

pin5.bounce(pin1)
pin5.bounce(pin2)
pin5.bounce(pin3)
pin5.bounce(pin4)
pin5.bounce(pin6)

pin6.bounce(pin1)
pin6.bounce(pin2)
pin6.bounce(pin3)
pin6.bounce(pin4)
pin6.bounce(pin5)
 
createEdgeSprites()

ball.bounceOff(edges)
pin1.bounceOff(edges)
pin2.bounceOff(edges)
pin3.bounceOff(edges)
pin4.bounceOff(edges)
pin5.bounceOff(edges)
pin6.bounceOff(edges)
 drawSprites();
 
 
   
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
