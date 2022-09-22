import { registerPlugin } from '@capacitor/core';
export * from './definitions';
export * from './web';
const Idfa = registerPlugin('Idfa', {
    web: () => import('./web').then(m => new m.IdfaWeb()),
});
export * from './definitions';
export { Idfa };
//# sourceMappingURL=index.js.map