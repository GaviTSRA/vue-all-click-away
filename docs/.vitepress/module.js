const clickEventType = function () {
  return document.ontouchstart !== null ? "click" : "touchstart";
};

const UNIQUE_ID = "__vue_all_click_away__";

const onMounted = function (el, binding, vnode) {
  onUnmounted(el);
  let vm = vnode.context;
  let callback = binding.value;
  let nextTick = false;
  setTimeout(function () {
    nextTick = true;
  }, 0);

  el[UNIQUE_ID] = function (event) {
    if ((!el || !el.contains(event.target)) && callback && nextTick && typeof callback === "function") {
      return callback.call(vm, event);
    }
  };

  document.addEventListener(clickEventType(), el[UNIQUE_ID], false);
  document.addEventListener("contextmenu", el[UNIQUE_ID], false);
};

const onUnmounted = function (el) {
  document.removeEventListener("contextmenu", el[UNIQUE_ID], false);
  delete el[UNIQUE_ID];
};

const onUpdated = function (el, binding, vnode) {
  if (binding.value === binding.oldValue) {
    return;
  }

  onMounted(el, binding, vnode);
};

const plugin = {
  install: function (app) {
    app.directive('click-all-away', directive);
  }
};
const directive = {
  mounted: onMounted,
  updated: onUpdated,
  unmounted: onUnmounted
};
const mixin = {
  directives: {
    AllClickAway: directive
  }
};

export default plugin;
export { directive, mixin };
//# sourceMappingURL=module.js.map
