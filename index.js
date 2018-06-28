const _ = require('lodash');
const WarpjsPlugin = require('@warp-works/warpjs-plugin');

class WarpjsActionError extends WarpjsPlugin.Error {}

class WarpjsActionPlugin extends WarpjsPlugin {
    constructor(config, warpCore, packageJson, pluginType) {
        super(config, warpCore, packageJson, pluginType);
        this.isAction = true;
    }

    static get Error() {
        return WarpjsActionError;
    }

    get jsScriptUrl() {
        throw new WarpjsActionError(`Implement '${this.constructor.name}.jsScriptUrl'.`);
    }

    getRootUrl(domain, type, id) {
        throw new WarpjsActionError(`Implement '${this.constructor.name}.getRootUrl(domain, type, id)'.`);
    }

    toJSON(domain, type, id) {
        return Object.freeze(_.extend({}, super.toJSON(domain, type, id)), {
            isAction: this.isAction,
            jsScriptUrl: this.jsScriptUrl,
            rootUrl: this.getRootUrl(domain, type, id)
        });
    }
}

module.exports = WarpjsActionPlugin;
