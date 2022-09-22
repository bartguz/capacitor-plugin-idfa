var capacitorPlugin = (function (exports, core) {
    'use strict';

    class IdfaWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'Idfa',
                platforms: ['web'],
            });
        }
        async getAdvertisingInfo() {
            return { id: null, isAdTrackingLimited: true };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IdfaWeb: IdfaWeb
    });

    const Idfa = core.registerPlugin('Idfa', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IdfaWeb()),
    });

    exports.Idfa = Idfa;
    exports.IdfaWeb = IdfaWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
