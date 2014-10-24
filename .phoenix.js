'use strict';
var api
  , Window = Window || {}
  , padding = 0
;

api.alert('test');
api.bind(
  'return'
  , ['cmd', 'shift']
  , function() {
    api.alert('fullscreen');
    Window.focusedWindow()
      .toFullScreen();
  }
);
api.bind(
  'space'
  , ['cmd', 'shift']
  , function() {
    /*Window
      .focusedWindow()
      .toGrid(0, 0, 0.5, 0.5, Window.focusedWindow().screen().nextScreen());
    */
    api.alert(Window.focusedWindow());
    api.alert('space');
  }
);

api.bind(
  'e'
  , ['cmd', 'shift']
  , function() {
    api.alert('swap');
  }
);

api.bind(
  'h'
  , ['cmd', 'alt']
  , function() {
    api.alert('reduce width');
  }
);
api.bind(
  'h'
  , ['cmd', 'alt']
  , function() {
    api.alert('reduce height');
  }
);
api.bind(
  'k'
  , ['cmd', 'alt']
  , function() {
    api.alert('increase width');
  }
);
api.bind(
  'l'
  , ['cmd', 'alt']
  , function() {
    api.alert('increase height');
  }
);

Window.prototype.toFullScreen = function() {
  return this.toGrid(0, 0, 1, 1);
};

Window.prototype.toGrid = function(x, y, width, height, screen) {
  var screen = screen || this.screen().frameWithoutDockOrMenu();
  this.setFrame({
    x: Math.round(x * screen.width) + padding + screen.x
    , y: Math.round(y * screen.height) + padding + screen.y
    , width: Math.round(width * screen.width) - (2 * padding)
    , height: Math.round(height * screen.height) - (2 * padding)
  });
  this.focusWindow();
  return this;
};
