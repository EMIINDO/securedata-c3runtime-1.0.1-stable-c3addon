"use strict";

{
    const C3 = globalThis.C3;
    globalThis.C3.Plugins.SecureData.Acts = {
		AddSecureKey(key, value) {
			this.secureData.set(key, this.EncryptData(value))
		},
		SetKey(key, value) {
			if (this.secureData.has(key))
                this.secureData.set(key, this.EncryptData(value))
		},
		AddTo(key, value) {
			if (this.secureData.has(key))
				this.secureData.set(key, this.EncryptData(Number(this.EncryptData(this.secureData.get(key))) + value))
		},
		SubtractFrom(key, value) {
			if (this.secureData.has(key))
				this.secureData.set(key, this.EncryptData(Number(this.EncryptData(this.secureData.get(key))) - value))
		},
        DeleteKey(key) {
            this.secureData.delete(key)
        },
        Clear() {
            this.secureData.clear()
        },
        JSONLoad(json) {
            let o = null;
            try {
                o = JSON.parse(json)
            } catch (err) {
                console.error("[Construct 3] Error parsing JSON: ", err);
                return
            }
            if (!o["c2SecureData"])
                return;
            C3.ObjectToMap(o["data"], this.secureData)
        },
		JSONLoadWithKey(json) {
			let o = null;
            try {
                o = JSON.parse(json)
            } catch (err) {
                console.error("[Construct 3] Error parsing JSON: ", err);
                return
            }
            if (!o["c2SecureData"])
                return;
            C3.ObjectToMap(o["data"], this.secureData)
			
			var s = o["encrypt_key"];
			this.encryptKey = this.EncryptDataKey(s);
		}
    }
}