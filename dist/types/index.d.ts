import { Directive, Plugin } from "vue";

declare const VueAllClickAwayPlugin: Plugin;

declare const directive: Directive;
declare const mixin: {
    directives: {
        AllClickAway: Directive;
    };
};

export { mixin, directive };
export default VueAllClickAwayPlugin;
