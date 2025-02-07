"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const SDK = globalThis.SDK;
    const PLUGIN_ID = "SecureData";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "data-and-storage";

    let app = null;

    const PLUGIN_CLASS = SDK.Plugins.SecureData = class SecureData extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);
            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
            this._info.SetIcon("icon.png", "image/png");
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("DeX");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(false);
            this._info.SetIsDeprecated(false);
            this._info.SetSupportsEffects(false);
            this._info.SetMustPreDraw(false);
            this._info.SetCanBeBundled(false);

            this._info.SetSupportedRuntimes(["c2", "c3"]);

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
                new SDK.PluginProperty("text", "secure-key", "AaBbCcDd")
            ]);
            SDK.Lang.PopContext();		// .properties
            SDK.Lang.PopContext();
        }
    };
    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
