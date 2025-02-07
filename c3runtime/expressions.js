"use strict";

{
    // callMap push globalThis.
    globalThis.C3.Plugins.SecureData.Exps = {
        Get(key) {
			const ret = this.EncryptData(this.secureData.get(key));
            if (typeof ret === "undefined")
                return 0;
            else
                return ret
        },
		KeyCount() {
            return this.secureData.size
        },
		AsJSON() {
            return this.GetAsJsonString()
        },
		AsJSONWithKey() {
			return this.GetAsJsonStringWithKey()
		}
    }
};