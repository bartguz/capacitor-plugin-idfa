import { WebPlugin } from '@capacitor/core';
import type { AdvertisingInfoResponse, IdfaPlugin } from './definitions';
export declare class IdfaWeb extends WebPlugin implements IdfaPlugin {
    constructor();
    getAdvertisingInfo(): Promise<AdvertisingInfoResponse>;
}