module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = __webpack_require__(7);

var appRoot = __webpack_require__(1);

var loadPackages = function loadPackages() {
  var Package = null;

  try {
    Package = JSON.parse(fs.readFileSync("".concat(appRoot.path, "/package.json"), 'utf8'));
    return Package;
  } catch (e) {
    throw new Error("You must have a package.json file initialized.".concat(e));
  }
};

var loadEslint = function loadEslint() {
  try {
    return JSON.parse(fs.readFileSync("".concat(appRoot.path, "/.eslintrc.json"), 'utf8'));
  } catch (e) {
    return null;
  }
};

var checkIsTypescript = function checkIsTypescript(dependencies) {
  return Object.keys(dependencies).some(function (dependency) {
    return dependency === 'typescript';
  });
};

var checkIsPostcss = function checkIsPostcss(dependencies) {
  return Object.keys(dependencies).some(function (dependency) {
    return dependency === 'postcss';
  });
};

var checkIsStorybook = function checkIsStorybook(dependencies) {
  return Object.keys(dependencies).some(function (dependency) {
    return dependency === '@storybook/cli';
  });
};

var checkIsSass = function checkIsSass(dependencies) {
  return Object.keys(dependencies).some(function (dependency) {
    return dependency === 'node-sass';
  });
};

var checkIsJestInstalled = function checkIsJestInstalled(dependencies) {
  return Object.keys(dependencies).some(function (dependency) {
    return dependency === 'jest';
  });
};

var checkIsJsx = function checkIsJsx(_ref) {
  var rules = _ref.rules;
  return Object.keys(rules).some(function (rule) {
    return rule === 'react/jsx-filename-extension';
  }) && rules['react/jsx-filename-extension'][1].extensions.indexOf('jsx') > -1;
};

var checkIsSemicolon = function checkIsSemicolon(_ref2) {
  var rules = _ref2.rules;

  if (!Object.keys(rules).some(function (rule) {
    return rule === 'semi';
  })) {
    return true;
  }

  return Object.keys(rules).some(function (rule) {
    return rule === 'semi';
  }) && rules.semi[1] !== 'never';
};

var loadSettings = function loadSettings() {
  var pkg = loadPackages();
  var eslintConfig = loadEslint();
  var devDependencies = pkg.devDependencies,
      dependencies = pkg.dependencies;

  var allPackages = _objectSpread(_objectSpread({}, devDependencies), dependencies);

  var isTypescript = checkIsTypescript(allPackages);
  return {
    isTypescript: isTypescript,
    isPostcss: checkIsPostcss(allPackages),
    isStorybook: checkIsStorybook(allPackages),
    isSass: checkIsSass(allPackages),
    isJest: checkIsJestInstalled(allPackages),
    isJsx: eslintConfig && checkIsJsx(eslintConfig),
    isSemicolons: eslintConfig && checkIsSemicolon(eslintConfig),
    jsExt: isTypescript ? 'ts' : 'js'
  };
};

var applySettings = function applySettings(data, settings) {
  return Object.keys(settings)
  /* eslint-disable-next-line no-param-reassign */
  .forEach(function (prop) {
    data[prop] = settings[prop];
  });
};

module.exports = {
  loadSettings: loadSettings,
  checkIsTypescript: checkIsTypescript,
  checkIsPostcss: checkIsPostcss,
  checkIsStorybook: checkIsStorybook,
  checkIsSass: checkIsSass,
  checkIsJestInstalled: checkIsJestInstalled,
  checkIsJsx: checkIsJsx,
  checkIsSemicolon: checkIsSemicolon,
  loadPackages: loadPackages,
  loadEslint: loadEslint,
  applySettings: applySettings
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var lib = __webpack_require__(8);
module.exports = lib(__dirname);
/* WEBPACK VAR INJECTION */}.call(this, "node_modules/app-root-path"))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var prompt = function prompt(type, name, message) {
  return {
    type: type,
    name: name,
    message: message
  };
};

module.exports = {
  prompt: prompt
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var addAction = function addAction(path, template) {
  var skipIfExists = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 'add',
    path: path,
    template: template,
    skipIfExists: skipIfExists
  };
};

var modifyAction = function modifyAction(path, pattern, template) {
  return {
    type: 'modify',
    path: path,
    pattern: pattern,
    template: template
  };
};

module.exports = {
  addAction: addAction,
  modifyAction: modifyAction
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */
module.exports = {
  emptyReducer: __webpack_require__(13)["default"],
  requestActions: __webpack_require__(14)["default"],
  requestCreator: __webpack_require__(15)["default"],
  requestReducer: __webpack_require__(16)["default"],
  requestThunk: __webpack_require__(17)["default"],
  requestThunkTest: __webpack_require__(18)["default"]
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    loadSettings = _require.loadSettings;

var _require2 = __webpack_require__(12),
    useEmptyReducerGenerator = _require2.useEmptyReducerGenerator;

var _require3 = __webpack_require__(19),
    useRequestReducerGenerator = _require3.useRequestReducerGenerator;

var settings = loadSettings();

module.exports = function (plop) {
  useEmptyReducerGenerator(plop, settings);
  useRequestReducerGenerator(plop, settings);
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(dirname) {
	var path = __webpack_require__(2);
	var resolve = __webpack_require__(9);
	var appRootPath = resolve(dirname);

	var publicInterface = {
		resolve: function(pathToModule) {
			return path.join(appRootPath, pathToModule);
		},

		require: function(pathToModule) {
			return __webpack_require__(11)(publicInterface.resolve(pathToModule));
		},

		toString: function() {
			return appRootPath;
		},

		setPath: function(explicitlySetPath) {
			appRootPath = path.resolve(explicitlySetPath);
			publicInterface.path = appRootPath;
		},

		path: appRootPath
	};

	return publicInterface;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var path = __webpack_require__(2);

// Load global paths
var globalPaths = __webpack_require__(10).globalPaths;

// Guess at NPM's global install dir
var npmGlobalPrefix;
if ('win32' === process.platform) {
	npmGlobalPrefix = path.dirname(process.execPath);
} else {
	npmGlobalPrefix = path.dirname(path.dirname(process.execPath));
}
var npmGlobalModuleDir = path.resolve(npmGlobalPrefix, 'lib', 'node_modules');

// Save OS-specific path separator
var sep = path.sep;

// If we're in webpack, force it to use the original require() method
var requireFunction = ( true)
	? require
	: undefined;

const isInstalledWithPNPM = function(resolved) {
	const pnpmDir = sep + '.pnpm';

	for (const globalPath of globalPaths) {
		if (-1 !== globalPath.indexOf(pnpmDir) && -1 !== resolved.indexOf(pnpmDir)) {
			return true;
		}
	}
	return false;
}

const getFirstPartFromNodeModules = function(resolved) {
	const nodeModulesDir = sep + 'node_modules';

	if (-1 !== resolved.indexOf(nodeModulesDir)) {
		const parts = resolved.split(nodeModulesDir);
		if (parts.length) {
			return parts[0];
		}
	}

	return null;
}

// Resolver
module.exports = function resolve(dirname) {
	// Check for environmental variable
	if (process.env.APP_ROOT_PATH) {
		return path.resolve(process.env.APP_ROOT_PATH);
	}

	// Defer to Yarn Plug'n'Play if enabled
	if (process.versions.pnp) {
		try {
			var pnp = requireFunction('pnpapi');
			return pnp.getPackageInformation(pnp.topLevel).packageLocation;
		} catch (e) {}
	}

	// Defer to main process in electron renderer
	if ('undefined' !== typeof window && window.process && 'renderer' === window.process.type) {
		try {
			var remote = requireFunction('electron').remote;
			return remote.require('app-root-path').path;
		} catch (e) {}
	}

	// Defer to AWS Lambda when executing there
	if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
		return process.env.LAMBDA_TASK_ROOT;
	}

	var resolved = path.resolve(dirname);
	var alternateMethod = false;
	var appRootPath = null;

	// Check if the globalPaths contain some folders with '.pnpm' in the path
	// If yes this means it is most likely installed with pnpm
	if (isInstalledWithPNPM(resolved)) {
		appRootPath = getFirstPartFromNodeModules(resolved);

		if (appRootPath) {
			return appRootPath;
		}
	}

	// Make sure that we're not loaded from a global include path
	// Eg. $HOME/.node_modules
	//     $HOME/.node_libraries
	//     $PREFIX/lib/node
	globalPaths.forEach(function(globalPath) {
		if (!alternateMethod && 0 === resolved.indexOf(globalPath)) {
			alternateMethod = true;
		}
	});

	// If the app-root-path library isn't loaded globally,
	// and node_modules exists in the path, just split __dirname
	if (!alternateMethod) {
		appRootPath = getFirstPartFromNodeModules(resolved);
	}

	// If the above didn't work, or this module is loaded globally, then
	// resort to require.main.filename (See http://nodejs.org/api/modules.html)
	if (alternateMethod || null == appRootPath) {
		appRootPath = path.dirname(requireFunction.main.filename);
	}

	// Handle global bin/ directory edge-case
	if (alternateMethod && -1 !== appRootPath.indexOf(npmGlobalModuleDir) && (appRootPath.length - 4) === appRootPath.indexOf(sep + 'bin')) {
		appRootPath = appRootPath.slice(0, -4);
	}

	// Return
	return appRootPath;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var appRoot = __webpack_require__(1);

var _require = __webpack_require__(3),
    prompt = _require.prompt;

var _require2 = __webpack_require__(0),
    applySettings = _require2.applySettings;

var _require3 = __webpack_require__(4),
    addAction = _require3.addAction,
    modifyAction = _require3.modifyAction;

var _require4 = __webpack_require__(5),
    emptyReducer = _require4.emptyReducer;

var generateEmptyReducerActions = function generateEmptyReducerActions(_ref) {
  var isSemicolons = _ref.isSemicolons,
      jsExt = _ref.jsExt;
  var actions = [addAction("".concat(appRoot.path, "/src/redux/reducer/{{snakeCase name}}.").concat(jsExt), emptyReducer), addAction("".concat(appRoot.path, "/src/redux/creator/{{snakeCase name}}.").concat(jsExt), ''), addAction("".concat(appRoot.path, "/src/redux/actions/{{snakeCase name}}.").concat(jsExt), '')];

  if (!isSemicolons) {
    actions = [].concat(_toConsumableArray(actions), [modifyAction("".concat(appRoot.path, "/src/redux/reducer/{{snakeCase name}}.").concat(jsExt), /;\n/g, '\n')]);
  }

  return actions;
};

var useEmptyReducerGenerator = function useEmptyReducerGenerator(plop, settings) {
  plop.setGenerator('empty reducer', {
    description: 'Create an empty skeleton reducer.',
    prompts: [prompt('input', 'name', 'What is the name of the reducer?')],
    actions: function actions(data) {
      applySettings(data, settings);
      return generateEmptyReducerActions(data);
    }
  });
};

module.exports = {
  useEmptyReducerGenerator: useEmptyReducerGenerator,
  generateEmptyReducerActions: generateEmptyReducerActions
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{#isTypescript}}export interface {{properCase name}}State {\n\n};\n\nexport interface {{properCase name}}Action {\n  type: string,\n};\n\n{{/isTypescript}}const DEFAULT{{#isTypescript}}: {{properCase name}}State{{/isTypescript}} = {};\n\nexport default (state{{#isTypescript}}: {{properCase name}}State{{/isTypescript}} = DEFAULT, action){{#isTypescript}}: {{properCase name}}State{{/isTypescript}} => {\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\n");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export {\n  REQUEST_{{upperCase name}}: 'REQUEST_{{upperCase name}}',\n  SUCCESS_{{upperCase name}}: 'SUCCESS_{{upperCase name}}',\n  FAILURE_{{upperCase name}}: 'FAILURE_{{upperCase name}}',\n};\n\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n  REQUEST_{{upperCase name}},\n  SUCCESS_{{upperCase name}},\n  FAILURE_{{upperCase name}},\n} from '../actions/{{snakeCase name}}';\n\nconst request{{properCase name}} = () => ({\n  type: REQUEST_{{upperCase name}},\n});\n\nconst success{{properCase name}} = (data{{#isTypescript}}: any{{/isTypescript}}) => ({\n  type: SUCCESS_{{upperCase name}},\n  data\n});\n\nconst failure{{properCase name}} = (error{{#isTypescript}}: error{{/isTypescript}}) => ({\n  type: SUCCESS_{{upperCase name}},\n  error\n});\n\nexport {\n  request{{properCase name}},\n  success{{properCase name}},\n  failure{{properCase name}},\n};\n\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n  request{{properCase name}},\n  success{{properCase name}},\n  failure{{properCase name}},\n} from '../actions/{{snakeCase name}}';\n\nconst DEFAULT_STATE = {\n  isLoading: false,\n  data: undefined,\n  error: undefined,\n};\n\nconst {{camelCase name}} = (state = DEFAULT_STATE, action) => {\n  switch(action.type) {\n    case request{{properCase name}}:\n      return {\n        ...state,\n        isLoading: true,\n      };\n    case success{{properCase name}}:\n      return {\n        ...state,\n        data: action.data,\n        isLoading: false,\n      };\n    case failure{{properCase name}}:\n      return {\n        ...state,\n        error: action.error,\n        isLoading: false,\n      };\n    default:\n      return state;\n  }\n};\n\n");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n  request{{properCase name}},\n  success{{properCase name}},\n  failure{{properCase name}},\n} from '../creators/{{snakeCase name}}';\n\nconst {{camelCase name}}Thunk = () => dispatch => {\n  dispatch(request{{properCase name}}());\n  return fetch('{{url}}')\n    .then(\n      response => response.json(),\n      error => dispatch(failure{{properCase name}}()),\n    )\n    .then(json => dispatch(success{{properCase name}}(json)));\n};\n\nexport default {{camelCase name}}Thunk;\n\n");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {{ camelCase name }}Thunk from '../{{ snakeCase name }}';\n\n// TODO replace mock value with realistic return.\nconst mockValue = 'hello world';\nconst mockError = 'Failure';\nconst doNothing = jest.fn(() => null);\njest.spyOn(global, 'fetch').mockImplementationOnce(() => new Promise((resolve) => {\n  resolve({ json: () => mockValue });\n}));\n\njest.spyOn(global, 'fetch').mockImplementationOnce(() => new Promise((_resolve, reject) => {\n  reject(mockError);\n}));\n\njest.mock('../../creators/{{ snakeCase name }}', () => ({\n  request{{ properCase name }}: jest.fn(doNothing),\n  success{{ properCase name }}: jest.fn(doNothing),\n  failure{{ properCase name }}: jest.fn(doNothing),\n}));\n\nit('{{ camelCase name }}Thunk shall successfully execute when fetch resovles.', () => {\n  expect({{ camelCase name }}Thunk());\n  expect(doNothing).toBeCalledWith({\n    type: 'REQUEST_{{ upperCase name }}',\n    data: mockValue,\n  });\n});\n\nit('{{ camelCase name }}Thunk shall successfully execute when fetch resovles.', () => {\n  expect({{ camelCase name }}Thunk());\n  expect(doNothing).toBeCalledWith({\n    type: 'REQUEST_{{ upperCase name }}',\n    error: mockError,\n  });\n});\n");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var appRoot = __webpack_require__(1);

var _require = __webpack_require__(3),
    prompt = _require.prompt;

var _require2 = __webpack_require__(4),
    addAction = _require2.addAction,
    modifyAction = _require2.modifyAction;

var _require3 = __webpack_require__(0),
    applySettings = _require3.applySettings;

var _require4 = __webpack_require__(5),
    requestActions = _require4.requestActions,
    requestCreators = _require4.requestCreators,
    requestReducer = _require4.requestReducer,
    requestThunk = _require4.requestThunk,
    requestThunkTest = _require4.requestThunkTest;

var generateRequestReducerActions = function generateRequestReducerActions(_ref) {
  var isSemicolons = _ref.isSemicolons,
      jsExt = _ref.jsExt;
  var actions = [addAction("".concat(appRoot.path, "/src/redux/reducer/{{snakeCase name}}.").concat(jsExt), requestReducer), addAction("".concat(appRoot.path, "/src/redux/actions/{{snakeCase name}}.").concat(jsExt), requestActions), addAction("".concat(appRoot.path, "/src/redux/creators/{{snakeCase name}}.").concat(jsExt), requestCreators), addAction("".concat(appRoot.path, "/src/redux/thunk-actions/{{snakeCase name}}.").concat(jsExt), requestThunk), addAction("".concat(appRoot.path, "/src/redux/thunk-actions/__test__/{{snakeCase name}}.test.").concat(jsExt), requestThunkTest)];

  if (!isSemicolons) {
    actions = [].concat(_toConsumableArray(actions), [modifyAction("".concat(appRoot.path, "/src/redux/reducer/{{snakeCase name}}.").concat(jsExt), /;\n/g, '\n'), modifyAction("".concat(appRoot.path, "/src/redux/actions/{{snakeCase name}}.").concat(jsExt), /;\n/g, '\n'), modifyAction("".concat(appRoot.path, "/src/redux/creators/{{snakeCase name}}.").concat(jsExt), /;\n/g, '\n'), modifyAction("".concat(appRoot.path, "/src/redux/thunk-actions/{{snakeCase name}}.").concat(jsExt), /;\n/g, '\n'), modifyAction("".concat(appRoot.path, "/src/redux/thunk-actions/__test__/{{snakeCase name}}.test.").concat(jsExt), /;\n/g, '\n')]);
  }

  return actions;
};

var useRequestReducerGenerator = function useRequestReducerGenerator(plop, settings) {
  plop.setGenerator('request reducer', {
    description: 'Create a reducer that is designed to send an async request',
    prompts: [prompt('input', 'name', 'What is the name of the request?'), prompt('input', 'url', 'What is the url the request should be sent to?')],
    actions: function actions(data) {
      applySettings(data, settings);
      return generateRequestReducerActions(data);
    }
  });
};

module.exports = {
  useRequestReducerGenerator: useRequestReducerGenerator,
  generateRequestReducerActions: generateRequestReducerActions
};

/***/ })
/******/ ]);