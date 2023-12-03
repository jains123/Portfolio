// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"UZnh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobMenu = mobMenu;
var mobItems = document.querySelector('.mob-menu');
var burgerBack = document.querySelector('.burger-back');
var burgerButton = document.querySelector('.burger');
var title = document.querySelector('title');
var l1 = document.querySelector('.line1');
var l2 = document.querySelector('.line2');
var l3 = document.querySelector('.line3');
function mobMenu() {
  l1.classList.toggle('rotate-top');
  l2.classList.toggle('opaque');
  l3.classList.toggle('rotate-bottom');
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
  burgerBack.classList.toggle('burger-back-active');
  setTimeout(function () {
    mobItems.classList.toggle('active');
  }, 200);
}
},{}],"cQtx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkModeToggle = darkModeToggle;
var body = document.querySelector('body');
var footer = document.querySelector('.footer-container');
var textElements = document.querySelectorAll('*:not(:empty)');
var icons = document.querySelectorAll('i');
var projects = document.getElementsByClassName('project');
var projectsArray = Array.from(projects);
var toggle = document.getElementById('toggle');
var mobileToggle = document.getElementById('mobileToggle');
function darkModeToggle() {
  body.classList.toggle('dark-mode-body');
  for (var i = 0; i < textElements.length; i++) {
    var element = textElements[i];
    element.classList.toggle('dark-mode-text');
  }
  projectsArray.forEach(function (project) {
    project.classList.toggle('dark-mode-elements');
  });
  for (var i = 0; i < icons.length; i++) {
    var icon = icons[i];
    icon.classList.toggle('dark-mode-text');
  }
  footer.classList.toggle('dark-mode-elements');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode-body'));
}
},{}],"Focm":[function(require,module,exports) {
"use strict";

var _mob = require("./js/mob");
var _darkmode = require("./js/darkmode");
//IMPORTS

var burgerButton = document.querySelector('.burger');

//EVENT LISTENERS
burgerButton.addEventListener('click', _mob.mobMenu);
toggle.addEventListener('click', _darkmode.darkModeToggle);

//CHECKS IF DARKMODE WAS ACTIVATED IN PREVIOUS VISIT
if (localStorage.getItem('darkMode') == 'true') {
  (0, _darkmode.darkModeToggle)();
}
},{"./js/mob":"UZnh","./js/darkmode":"cQtx"}]},{},["Focm"], null)
//# sourceMappingURL=/src.450db64a.js.map