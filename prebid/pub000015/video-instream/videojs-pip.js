/*! @name @brightcove/videojs-pip @version 1.1.3 @license UNLICENSED */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('global/window'), require('global/document'), require('video.js'), require('@brightcove/loscore')) :
  typeof define === 'function' && define.amd ? define(['global/window', 'global/document', 'video.js', '@brightcove/loscore'], factory) :
  (global.videojsPip = factory(global.window,global.document,global.videojs,global.videojs.bc_));
}(this, (function (window,document,videojs,_) { 'use strict';

  window = window && window.hasOwnProperty('default') ? window['default'] : window;
  document = document && document.hasOwnProperty('default') ? document['default'] : document;
  videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var version = "1.1.3";

  // https://github.com/w3c/IntersectionObserver/blob/9a44a313c2154761f3d002779661be0447adb689/polyfill/intersection-observer.js

  var html = document.documentElement;
  var body = document.body;

  var getRootRect = function getRootRect() {
    return {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  };

  var computeRectIntersection = function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  };

  var calcIntersectionRatio = function calcIntersectionRatio(el) {
    var elRect = videojs.dom.getBoundingClientRect(el);
    var rootRect = getRootRect();
    var intersectionRect = computeRectIntersection(rootRect, elRect);
    var elArea = elRect.width * elRect.height;
    var intersectionArea = intersectionRect.width * intersectionRect.height;

    if (elArea) {
      return intersectionArea / elArea;
    }

    return 0;
  };

  var ViewableObserver =
  /*#__PURE__*/
  function () {
    function ViewableObserver(el, threshold, callback, supportsIntersectionObserver) {
      var _this = this;

      this.el_ = el;
      this.threshold_ = threshold;
      this.callback_ = callback;
      this.supportsIO_ = supportsIntersectionObserver;
      this.observing_ = false; // Default behavior for IO is to detect support.

      if (supportsIntersectionObserver === undefined) {
        this.supportsIO_ = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
      }

      if (this.supportsIO_) {
        this.io_ = new window.IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].target === el) {
              return callback(entries[i].intersectionRatio >= threshold);
            }
          }
        }, {
          threshold: threshold
        });
      } else {
        this.boundCheckForIntersection_ = _.throttle(function (e) {
          return _this.checkForIntersection_(e);
        }, 500);
      }
    }

    var _proto = ViewableObserver.prototype;

    _proto.observe = function observe() {
      if (this.observing_) {
        return;
      }

      this.observing_ = true;

      if (this.supportsIO_) {
        this.io_.observe(this.el_);
      } else {
        videojs.on(window, 'resize', this.boundCheckForIntersection_);
        videojs.on(document, 'scroll', this.boundCheckForIntersection_);
      }
    };

    _proto.unobserve = function unobserve() {
      if (!this.observing_) {
        return;
      }

      this.observing_ = false;

      if (this.supportsIO_) {
        this.io_.unobserve(this.el_);
      } else {
        videojs.off(window, 'resize', this.boundCheckForIntersection_);
        videojs.off(document, 'scroll', this.boundCheckForIntersection_);
      }
    };

    _proto.dispose = function dispose() {
      this.unobserve();
      this.io_ = null;
      this.el_ = null;
      this.callback_ = null;
    };

    _proto.checkForIntersection_ = function checkForIntersection_() {
      // If the element isn't displayed, an intersection can't happen.
      if (window.getComputedStyle(this.el_).display === 'none') {
        return;
      }

      var intersectionRatio = calcIntersectionRatio(this.el_);
      this.callback_(intersectionRatio >= this.threshold_);
    };

    return ViewableObserver;
  }();

  var _videojs$browser = videojs.browser,
      IS_ANDROID = _videojs$browser.IS_ANDROID,
      IS_IOS = _videojs$browser.IS_IOS;
  var CloseButton = videojs.getComponent('CloseButton');
  var Plugin = videojs.getPlugin('plugin');
  var classPrefix = 'vjs-pip';
  var classContainer = classPrefix + "-container";
  var classActive = classPrefix + "-active";
  var classInactive = classPrefix + "-inactive";
  var classLegacyResponsive = classPrefix + "-legacy-responsive";
  var classStudioResponsive = classPrefix + "-studio-responsive"; // Default options for the plugin.

  var defaults = {
    allowOnMobile: false,
    closeable: true,
    height: null,
    manualContainerSize: false,
    posX: 'right',
    posY: 'bottom',
    scale: 2 / 3,
    // By default, this private option is explicitly undefined. This allows us
    // to configure the internal behavior of the ViewableObserver class easily
    // for testing purposes. Setting to a boolean will force it to use or not
    // use IntersectionObserver.
    useIntersectionObserver_: undefined,
    viewable: 0.8,
    width: null
  }; // Valid posX and posY values.

  var validPosX = ['left', 'right'];
  var validPosY = ['top', 'bottom'];
  var manualAttribute = 'data-manual-container-size'; // Functions to identify element types.

  var isDiv = function isDiv(el) {
    return el && el.tagName.toLowerCase() === 'div';
  };

  var isResp = function isResp(el) {
    return isDiv(el) && el.hasAttribute('style');
  };

  var isPip = function isPip(el) {
    return isDiv(el) && videojs.dom.hasClass(el, classContainer);
  };
  /**
   * A plugin for enabling a Picture-In-Picture mode for the Brightcove Player.
   */


  var Pip =
  /*#__PURE__*/
  function (_Plugin) {
    _inheritsLoose(Pip, _Plugin);

    /**
     * Create a Pip plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An options object.
     */
    function Pip(player, options) {
      var _this;

      _this = _Plugin.call(this, player) || this;

      if (!_this.containerEl()) {
        return _this.dispose() || _assertThisInitialized(_this);
      }

      _this.setOptions(options);

      if (!_this.options.allowOnMobile && (IS_ANDROID || IS_IOS)) {
        return _this.dispose() || _assertThisInitialized(_this);
      }

      _this.oneWindowScroll_ = _this.oneWindowScroll_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      window.addEventListener('scroll', _this.oneWindowScroll_);

      _this.observe_();

      player.addClass(classPrefix);

      if (!player.fluid() && !_this.options.manualContainerSize) {
        _this.setContainerSize_(_this.player.currentDimensions());

        _this.on(player, 'playerresize', _this.onPlayerResize_);
      }

      _this.on(player, 'fullscreenchange', _this.onFullscreenChange_);

      _this.enable();

      return _this;
    }
    /**
     * Set options for the plugin.
     *
     * @param  {Object} [options]
     *         An options object.
     *
     * @param  {boolean} [options.allowOnMobile = false]
     *         By default, picture-in-picture mode will not work on Android or
     *         iOS mobile devices.
     *
     *         The reason this doesn't work nicely out of the box on those
     *         platforms because CSS fixed positioning does not work on zoomable
     *         devices with multiple viewports in the same way it does on desktop
     *         devices.
     *
     * @param  {boolean} [options.closeable = true]
     *         By default, picture-in-picture mode will include a close button,
     *         which the user can click to disable picture-in-picture mode.
     *
     * @param  {number} [options.height = null]
     *         By default, the plugin will scale down the player's dimensions by
     *         a factor determined by the `scale` option. However, providing a
     *         `height` (or `width`) will override the default scaling and set
     *         the size of the scaled-down player explicitly.
     *
     *         If only one dimension is provided, the other will be scaled down
     *         to maintain the aspect ratio. If both dimensions are provided,
     *         the player will be set to the exact, specified size.
     *
     * @param  {boolean} [options.manualContainerSize = false]
     *         By default, a player with this plugin enabled will keep the
     *         physical dimensions of the special container element in sync with
     *         the player's dimensions. However, this doesn't work for all cases,
     *         so it can be disabled by setting this option to `false`.
     *
     *         When doing so, the container element will behave like a normal
     *         block element. This means that users of the plugin will need to
     *         manage its size on their own.
     *
     *         This option can also be set in the embed code via the boolean
     *         `data-manual-container-size` attribute on the container.
     *         Its presence will set this option to `true` and any value passed
     *         to the plugin will take precedence over any value defined in the
     *         embed code.
     *
     * @param  {string} [options.posX = "right"]
     *         The horizontal alignment of the player when it is in picture-in-
     *         picture mode - one of "right" or "left".
     *
     * @param  {string} [options.posY = "bottom"]
     *         The vertical alignment of the player when it is in picture-in-
     *         picture mode - one of "top" or "bottom".
     *
     * @param  {number} [options.scale = 2 / 3]
     *         The scaling factor applied to the player when it is in picture-in-
     *         picture mode.
     *
     *         Must be a number greater than zero and less than or equal to 1.
     *
     * @param  {number} [options.width = null]
     *         By default, the plugin will scale down the player's dimensions by
     *         a factor determined by the `scale` option. However, providing a
     *         `width` (or `height`) will override the default scaling and set
     *         the size of the scaled-down player explicitly.
     *
     *         If only one dimension is provided, the other will be scaled down
     *         to maintain the aspect ratio. If both dimensions are provided,
     *         the player will be set to the exact, specified size.
     *
     * @param  {number} [options.viewable = 0.8]
     *         The threshold at which the player is considered viewable. In other
     *         words, when this percentage of the player is visible in the
     *         browser's viewport, it is considered viewable.
     *
     *         For example, with the default of 0.8, the player is not considered
     *         viewable unless 80% of it is visible in the viewport.
     *
     *         Must be a number greater than or equal to 0 or less than or equal
     *         to 1.
     */


    var _proto = Pip.prototype;

    _proto.setOptions = function setOptions(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          allowOnMobile = _ref.allowOnMobile,
          closeable = _ref.closeable,
          height = _ref.height,
          manualContainerSize = _ref.manualContainerSize,
          posX = _ref.posX,
          posY = _ref.posY,
          scale = _ref.scale,
          useIntersectionObserver_ = _ref.useIntersectionObserver_,
          width = _ref.width,
          viewable = _ref.viewable;

      if (!_.isObj(this.options)) {
        this.options = videojs.mergeOptions(defaults);
      }

      if (typeof allowOnMobile === 'boolean') {
        this.options.allowOnMobile = allowOnMobile;
      }

      if (typeof manualContainerSize === 'boolean') {
        this.options.manualContainerSize = manualContainerSize;
      } else {
        this.options.manualContainerSize = this.containerEl().hasAttribute(manualAttribute);
      }

      if (typeof closeable === 'boolean') {
        this.options.closeable = closeable;
      }

      if (height === null || _.isNum(height)) {
        this.options.height = height;
      }

      if (width === null || _.isNum(width)) {
        this.options.width = width;
      }

      if (_.isNum(scale) && scale > 0 && scale <= 1) {
        this.options.scale = scale;
      }

      if (validPosX.indexOf(posX) !== -1) {
        this.options.posX = posX;
      }

      if (validPosY.indexOf(posY) !== -1) {
        this.options.posY = posY;
      }

      if (useIntersectionObserver_ !== undefined) {
        this.options.useIntersectionObserver_ = useIntersectionObserver_;
      }

      if (_.isNum(viewable) && viewable >= 0 && viewable <= 1) {
        this.options.viewable = viewable;
      }
    }
    /**
     * Many Brightcove Players still have the old responsive embed code, which
     * wraps the player in two extra <div> elements with style attributes.
     *
     * This makes the minimal assumption of an embed that looks like this:
     *
     * <div class="vjs-pip-container">
     *   <div style="...">
     *     <div style="...">
     *       <video ...>
     *
     * @return {boolean}
     *         Whether or not the player is embedded in a legacy responsive
     *         embed.
     */
    ;

    _proto.isLegacyResponsive_ = function isLegacyResponsive_() {
      var parent = this.player.el().parentElement;
      return !isPip(parent) && isResp(parent) && isResp(parent.parentElement) && isPip(parent.parentElement.parentElement);
    }
    /**
     * Many Brightcove Players may have the newer Studio-provided responsive
     * embed code, which wraps the player in one extra <div> element with a
     * style attribute.
     *
     * This makes the minimal assumption of an embed that looks like this:
     *
     * <div class="vjs-pip-container">
     *   <div style="...">
     *     <video ...>
     *
     * @return {boolean}
     *         Whether or not the player is embedded in a Studio responsive
     *         embed.
     */
    ;

    _proto.isStudioResponsive_ = function isStudioResponsive_() {
      var parent = this.player.el().parentElement;
      return !isPip(parent) && isResp(parent) && isPip(parent.parentElement);
    }
    /**
     * Get the player's picture-in-picture container element.
     *
     * @return {Element|undefined}
     *         Return the element or undefined if not found.
     */
    ;

    _proto.containerEl = function containerEl() {
      if (this.containerEl_) {
        return this.containerEl_;
      } // In general, we want the player's parent element to be the PIP container.


      var container = this.player.el().parentElement; // The Studio responsive embed varies slightly from what you'd get with
      // a plain Video.js player. We need to detect and support this embed type.

      if (this.isStudioResponsive_()) {
        container = container.parentElement;
        videojs.dom.addClass(container, classStudioResponsive);
        this.setState({
          studioResponsive: true
        }); // However, many Brightcove Players still have the old responsive embed
        // code, which wraps the player in two extra <div> elements.
      } else if (this.isLegacyResponsive_()) {
        container = container.parentElement.parentElement;
        videojs.dom.addClass(container, classLegacyResponsive);
        this.setState({
          legacyResponsive: true
        });
      }

      if (!videojs.dom.hasClass(container, classContainer)) {
        videojs.log.warn("expected player to be a child of a \"" + classContainer + "\" element, cannot continue with picture-in-picture plugin");
        return;
      }

      return container;
    }
    /**
     * Enable automatic picture-in-picture behavior.
     */
    ;

    _proto.enable = function enable() {
      if (this.state.enabled) {
        return;
      }

      this.player.trigger('beforepipenabled');
      this.setState({
        enabled: true
      });
      this.observe_();
      this.player.trigger('pipenabled');
    }
    /**
     * Disable automatic picture-in-picture behavior.
     */
    ;

    _proto.disable = function disable() {
      if (!this.state.enabled) {
        return;
      }

      this.player.trigger('beforepipdisabled'); // If PIP mode is active, deactivate it.

      if (this.state.active) {
        this.deactivate();
      }

      this.setState({
        enabled: false
      });
      this.unobserve_();
      this.player.trigger('pipdisabled');
    }
    /**
     * Activate picture-in-picture mode, moving the player to a specific location
     * in the browser viewport.
     */
    ;

    _proto.activate = function activate() {
      var player = this.player;

      if (!this.state.enabled || this.state.active || !this.state.haveSeenScroll || !player.hasStarted()) {
        return;
      }

      this.storeBeforeActiveState_();
      player.trigger('beforepipactive'); // We need to put the player in a PIP-active state before scaling it, so
      // the resize listener does not trigger.

      this.setState({
        active: true
      });
      this.setContainerSize_();
      this.scalePlayer_();
      this.addCloseButton_();
      player.fluid(false);
      this.setActiveClasses_();
      this.observe_();
      player.trigger('pipactive');
    }
    /**
     * Deactivate picture-in-picture mode, restoring the player's original position.
     */
    ;

    _proto.deactivate = function deactivate() {
      var player = this.player;

      if (!this.state.enabled || !this.state.active) {
        return;
      }

      player.trigger('beforepipinactive');
      this.unsetContainerSize_();
      this.restorePlayer_();
      this.removeCloseButton_();

      if (this.beforeActiveState_.wasFluid_) {
        player.fluid(true);
      }

      this.setInactiveClasses_();
      this.setState({
        active: false
      });
      player.trigger('pipinactive');
    }
    /**
     * Activate or deactivate picture-in-picture mode based on the current state.
     *
     * If activated, will be deactivated and vice versa.
     */
    ;

    _proto.toggle = function toggle() {
      if (this.state.active) {
        this.deactivate();
      } else {
        this.activate();
      }
    }
    /**
     * Observe the DOM for intersection of the player or container.
     *
     * @private
     */
    ;

    _proto.observe_ = function observe_() {
      var _this2 = this;

      var options = this.options,
          player = this.player,
          state = this.state; // When PIP mode is active, we observe the container. Otherwise, we observe
      // the player itself. This helps ensure PIP works well with manually-sized
      // containers.

      var el = state.active ? this.containerEl() : player.el(); // If the observed element is changing, we need a new observer, so discard
      // the current one.

      if (this.vo_ && this.vo_.el_ !== el) {
        this.vo_.dispose();
        this.vo_ = null;
      } // Create a new ViewableObserver - if needed.


      if (!this.vo_) {
        this.vo_ = new ViewableObserver(el, options.viewable, function (viewable) {
          return _this2.onViewableChange_(viewable);
        }, options.useIntersectionObserver_);
      }

      this.vo_.observe();
    }
    /**
     * Unobserve the DOM for intersection of the player or container.
     *
     * @private
     */
    ;

    _proto.unobserve_ = function unobserve_() {
      if (!this.vo_) {
        return;
      }

      this.vo_.unobserve();
    }
    /**
     * Store various states of the player/DOM before PIP mode is activated.
     *
     * @private
     */
    ;

    _proto.storeBeforeActiveState_ = function storeBeforeActiveState_() {
      var options = this.options,
          player = this.player,
          state = this.state; // When returning from fullscreen mode, we don't want to store beforeActiveState
      // because we want to keep the container size that player originally had, not
      // the size from fullscreen.

      if (state.isFullscreen) {
        return;
      }

      var bas = this.beforeActiveState_ = {
        activeClasses: [classActive, classPrefix + "-x-" + options.posX, classPrefix + "-y-" + options.posY],
        inactiveClasses: [classInactive],
        playerDimensions: player.currentDimensions(),
        wasFluid_: player.fluid()
      };
      ['vjs-16-9', 'vjs-4-3', 'vjs-fill'].forEach(function (c) {
        if (player.hasClass(c)) {
          bas.inactiveClasses.push(c);
        }
      });

      if (!options.manualContainerSize) {
        var _this$containerEl = this.containerEl(),
            style = _this$containerEl.style;

        bas.containerDimensions = {
          height: style.height,
          width: style.width
        };
      }

      if (state.legacyResponsive) {
        var _player$el = player.el(),
            _style = _player$el.style;

        bas.playerStyle = {
          height: _style.height,
          width: _style.width
        };
      }
    }
    /**
     * Clear various stored states of the player/DOM from before PIP mode was
     * activated.
     *
     * @private
     */
    ;

    _proto.clearBeforeActiveState_ = function clearBeforeActiveState_() {
      this.beforeActiveState_ = null;
    }
    /**
     * Set the container to match the size of the player.
     *
     * @private
     * @param {Object} [playerDimensions]
     *        Provide a dimensions object describing the player's current size.
     *        If none is provided, looks in the `beforeActiveState_` object.
     */
    ;

    _proto.setContainerSize_ = function setContainerSize_(playerDimensions) {
      if (playerDimensions === void 0) {
        playerDimensions = this.beforeActiveState_.playerDimensions;
      }

      if (this.options.manualContainerSize) {
        return;
      }

      var _this$containerEl2 = this.containerEl(),
          style = _this$containerEl2.style;

      ['height', 'width'].forEach(function (k) {
        if (_.isNum(playerDimensions[k])) {
          style[k] = playerDimensions[k] + 'px';
        } else {
          style[k] = null;
        }
      });
    }
    /**
     * Restore the container to its original state.
     *
     * @private
     */
    ;

    _proto.unsetContainerSize_ = function unsetContainerSize_() {
      if (this.options.manualContainerSize) {
        return;
      }

      var containerDimensions = this.beforeActiveState_.containerDimensions;

      var _this$containerEl3 = this.containerEl(),
          style = _this$containerEl3.style;

      style.height = containerDimensions.height;
      style.width = containerDimensions.width;
    }
    /**
     * When the player detaches from the page, it should be downscaled if it is
     * bigger than the threshold.
     *
     * @private
     */
    ;

    _proto.scalePlayer_ = function scalePlayer_() {
      var options = this.options,
          player = this.player,
          state = this.state;
      var height = options.height,
          scale = options.scale,
          width = options.width;

      var hasExplicitHeight = _.isNum(height);

      var hasExplicitWidth = _.isNum(width);

      var playerDimensions = this.beforeActiveState_.playerDimensions; // If neither the height nor width is explicitly set, scale both
      // player dimensions based on the `scale` option.

      if (!hasExplicitHeight && !hasExplicitWidth) {
        height = Math.round(playerDimensions.height * scale);
        width = Math.round(playerDimensions.width * scale); // If we reach this point, we have at least one explicit dimension.
      } else {
        var aspectRatio = playerDimensions.width / playerDimensions.height; // Do we need to calculate a height?

        if (!hasExplicitHeight) {
          height = width / aspectRatio;
        } // Do we need to calculate a width?


        if (!hasExplicitWidth) {
          width = height * aspectRatio;
        }
      } // The legacy responsive embeds have hard-coded width and height properties
      // so they need to keep those.


      if (state.legacyResponsive) {
        var _player$el2 = player.el(),
            style = _player$el2.style;

        style.height = height + "px";
        style.width = width + "px";
      } else {
        player.dimension('height', height);
        player.dimension('width', width);
      }
    }
    /**
     * Restore the player to its original size.
     *
     * @private
     */
    ;

    _proto.restorePlayer_ = function restorePlayer_() {
      var player = this.player,
          state = this.state;

      var _player$el3 = player.el(),
          style = _player$el3.style;

      var _this$beforeActiveSta = this.beforeActiveState_,
          playerDimensions = _this$beforeActiveSta.playerDimensions,
          playerStyle = _this$beforeActiveSta.playerStyle;

      if (state.legacyResponsive) {
        style.height = playerStyle.height;
        style.width = playerStyle.width;
      } else if (state.studioResponsive) {
        style.height = '';
        style.width = '';
      } else {
        // Setting the dimensions here works nicely with modern fluid mode
        // because the fluid mode styles override the player dimension styles.
        player.dimensions(playerDimensions.width, playerDimensions.height);
      }
    }
    /**
     * Add a close button, if needed.
     *
     * @private
     */
    ;

    _proto.addCloseButton_ = function addCloseButton_() {
      var _this3 = this;

      if (!this.options.closeable) {
        return;
      }

      var player = this.player;
      var btn = this.closeButton_ = new CloseButton(player);
      btn.addClass('vjs-pip-close-button');
      btn.on('close', function () {
        player.trigger('beforepipclose');
        player.pause();

        _this3.disable();

        player.trigger('pipclose');
      });
      player.addChild(btn);
    }
    /**
     * Add a close button, if any.
     *
     * @private
     */
    ;

    _proto.removeCloseButton_ = function removeCloseButton_() {
      if (this.closeButton_) {
        this.closeButton_.dispose();
        this.closeButton_ = null;
      }
    }
    /**
     * Sets the classes that indicate that PIP mode is active. Removes any
     * classes that indicate that PIP mode is inactive.
     *
     * @private
     */
    ;

    _proto.setActiveClasses_ = function setActiveClasses_() {
      var player = this.player;
      var _this$beforeActiveSta2 = this.beforeActiveState_,
          activeClasses = _this$beforeActiveSta2.activeClasses,
          inactiveClasses = _this$beforeActiveSta2.inactiveClasses;
      activeClasses.forEach(function (c) {
        return player.addClass(c);
      });
      inactiveClasses.forEach(function (c) {
        return player.removeClass(c);
      });
    }
    /**
     * Sets the classes that indicate that PIP mode is inactive. Removes any
     * classes that indicate that PIP mode is active.
     *
     * @private
     */
    ;

    _proto.setInactiveClasses_ = function setInactiveClasses_() {
      var player = this.player;
      var _this$beforeActiveSta3 = this.beforeActiveState_,
          activeClasses = _this$beforeActiveSta3.activeClasses,
          inactiveClasses = _this$beforeActiveSta3.inactiveClasses;
      activeClasses.forEach(function (c) {
        return player.removeClass(c);
      });
      inactiveClasses.forEach(function (c) {
        return player.addClass(c);
      });
    }
    /**
     * Handles changes to the player's viewability.
     *
     * @private
     * @param  {boolean} viewable
     *         Whether or not the player is viewable.
     */
    ;

    _proto.onViewableChange_ = function onViewableChange_(viewable) {
      this.setState({
        viewable: viewable
      });

      if (viewable) {
        this.deactivate();
      } else {
        this.activate();
      }
    }
    /**
     * Handles changes to the player's dimensions.
     *
     * @private
     */
    ;

    _proto.onPlayerResize_ = function onPlayerResize_() {
      var player = this.player;

      if (player.fluid() || this.state.active || this.options.manualContainerSize) {
        return;
      }

      this.setContainerSize_(this.player.currentDimensions());
    }
    /**
     * Handles a window scroll event once to log that we've seen one.
     *
     * Normally, window scroll listeners should be throttled, but this removes
     * itself immediately; so, does not need throttling.
     *
     * @private
     */
    ;

    _proto.oneWindowScroll_ = function oneWindowScroll_() {
      window.removeEventListener('scroll', this.oneWindowScroll_);
      this.setState({
        haveSeenScroll: true
      });
    }
    /**
     * Handles fullscreen changes. We need a flag to know when player was
     * in fullscreen mode, so that we don't store fullscreen style.
     *
     * @private
     */
    ;

    _proto.onFullscreenChange_ = function onFullscreenChange_() {
      this.setState({
        isFullscreen: !this.state.isFullscreen
      });
    }
    /**
     * Disposes the picture-in-picture plugin.
     */
    ;

    _proto.dispose = function dispose() {
      if (this.state.active) {
        this.deactivate();
      }

      this.disable();
      window.removeEventListener('scroll', this.oneWindowScroll_);

      _Plugin.prototype.dispose.call(this);
    };

    return Pip;
  }(Plugin);

  Pip.defaultState = {
    active: false,
    enabled: false,
    haveSeenScroll: false,
    legacyResponsive: false,
    viewable: false,
    isFullscreen: false
  };
  Pip.VERSION = version;
  videojs.registerPlugin('pip', Pip);

  return Pip;

})));