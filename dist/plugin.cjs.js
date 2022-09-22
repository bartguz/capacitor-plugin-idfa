'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
