import { WebPlugin } from '@capacitor/core';
export class IdfaWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map