harmony = {
    __getFuncPatch: (hook, orig) => function (...args) {
        let res = hook.apply(this, [...args, orig]);
        if (res === false) return;
        else if (Array.isArray(res)) args = res;
        orig.apply(this, [...args]);
    },
    patchFunction: function (type, name, hook) {
        if (typeof type == "object") {
            if (!type.__proto__[name]) type[name] = this.__getFuncPatch(type[name], hook);
            else type.__proto__[name] = this.__getFuncPatch(type.__proto__[name], hook);
        } else type.prototype[name] = this.__getFuncPatch(type.prototype[name], hook);
    }
};
