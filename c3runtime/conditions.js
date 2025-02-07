"use strict";

{
    // callMap push globalThis.
    globalThis.C3.Plugins.SecureData.Cnds = {
		CompareValue(key, cmp, value) {
            const x = this.secureData.get(key);
            if (typeof x === "undefined")
                return false;
            return globalThis.C3.compare(x, cmp, this.EncryptData(value))
        }
    }
};