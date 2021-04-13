import type { App } from 'vue';

declare global {
  declare interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    LOCAL_CONFIG?: any;
    LightSDK?: any;
    $eventBus?: any;
  }
}
