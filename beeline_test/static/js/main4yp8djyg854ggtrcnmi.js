'use strict';

(function () {
  var control = [].slice.call(document.querySelectorAll('.view-controller')),
      btn_container = document.querySelector('.button-container'),
      posts = [].slice.call(document.querySelectorAll('.post')),
      img = [].slice.call(document.querySelectorAll('.post__image')),
      description = [].slice.call(document.querySelectorAll('.post__description')),
      info = [].slice.call(document.querySelectorAll('.post__info')),
      like = [].slice.call(document.querySelectorAll('.post__like-part')),
      col_1 = [].slice.call(document.querySelectorAll('.col-1')),
      banners = [].slice.call(document.querySelectorAll('.banner')),
      rows = [].slice.call(document.querySelectorAll('.post-wrapper__row')),
      footer = [].slice.call(document.querySelectorAll('.page__footer')),
      popular__title = [].slice.call(document.querySelectorAll('.popular__title')),
      hidden_content = [].slice.call(document.querySelectorAll('.post__hidden-content')),
      buttons = [].slice.call(document.querySelectorAll('.view-controller')),
      halfopacity_layout = [].slice.call(document.querySelectorAll('.post__halfopacity-layout'));

  var arrElem = [posts, img, description, info, like, col_1, banners, rows, footer, popular__title, hidden_content, halfopacity_layout];
  var data = ['post--line', 'img--line', 'description--line', 'info--line', 'like-part--line', 'col-1--line', 'block--hidden', 'row--line', 'footer--margin', 'block--hidden', 'block--show', 'block--hidden'];

  function classChange(typeOfChange, elems) {
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (typeOfChange == 'del') {
      elems.forEach(function (elem, index) {
        elem.forEach(function (el, key) {
          el.classList.remove(classes[index]);
        });
      });
    } else if (typeOfChange == 'add') {
      elems.forEach(function (elem, index) {
        elem.forEach(function (el, key) {
          el.classList.add(classes[index]);
        });
      });
    }
  }
  function setView() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "grid";

    if (type === "line") {
      classChange('del', arrElem, data);
    } else if (type === "grid") {
      classChange('add', arrElem, data);
    }
  }
  function setColorBtn(type) {
    if (type === "grid") {
      buttons[1].classList.remove('controller--active');
      buttons[0].classList.add('controller--active');
    } else if (type === "line") {
      buttons[0].classList.remove('controller--active');
      buttons[1].classList.add('controller--active');
    }
  }

  btn_container.addEventListener('click', function (e) {
    var view = e.target.getAttribute('data-view');
    setView(view);
    setColorBtn(view);
  }, true);

  /*--- BTN colorChange ---*/
})();
"use strict";
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
    var outer = [].concat(_toConsumableArray(document.querySelectorAll('.action-panel__nav-item'))),
        inner = [].concat(_toConsumableArray(document.querySelectorAll('.drop-list'))),
        arrow = [].concat(_toConsumableArray(document.querySelectorAll('.action-panel__nav-arrow'))),
        action_panel = document.querySelector('.action-panel'),
        mobile_btn = document.querySelector('.nav-line__mobile-btn');

    var states = [0, 0, 0],
        outerLength = outer.length;
    function openClose(state, openedElement, arrowElement) {
        !state ? (openedElement.classList.remove('open--dropList'), arrowElement.classList.remove('dark--arrow')) : (openedElement.classList.add('open--dropList'), arrowElement.classList.add('dark--arrow'));
    }

    var _loop = function _loop(i) {
        outer[i].addEventListener('click', function (e) {
            states.forEach(function (v, index) {
                i == index ? v = 1 : v = 0;
            });
            states[i] ? states[i] = 0 : states[i] = 1;

            openClose(states[i], inner[i], arrow[i]);
        });
    };

    for (var i = 0; i < outerLength; i++) {
        _loop(i);
    }
    mobile_btn.addEventListener('click', function (e) {
        if (action_panel.classList.contains('action-panel__open-mobile')) {
            action_panel.classList.remove('action-panel__open-mobile');
        } else {
            action_panel.classList.add('action-panel__open-mobile');
        }
    });
})();
"use strict";
"use strict";
"use strict";