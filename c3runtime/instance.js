"use strict";
{
    // Porting BY EMI INDO with c3addon-ide-plus
    const IInstance = self.IInstance;
    globalThis.C3.Plugins.SecureData.Instance = class SecureDataInstance extends globalThis.ISDKInstanceBase {
        constructor(inst, properties) {
            super();

            const properties = this._getInitProperties();
            this.secureData = new Map;
            this.curKey = "";
            this.encryptKey = "";
            if (properties) {
                this.encryptKey = properties[0]
            }
        }
        _release() {
            this.secureData.clear();
            super._release()
        }
        GetAsJsonString() {
            return JSON.stringify({
                "c2SecureData": true,
                "data": C3.MapToObject(this.secureData)
            })
        }
        GetAsJsonStringWithKey() {
            return JSON.stringify({
                "c2SecureData": true,
                "data": C3.MapToObject(this.secureData),
                "encrypt_key": this.EncryptDataKey(this.encryptKey)
            })
        }
        GetDataMap() {
            return this.secureData
        }
        _saveToJson() {
            return C3.MapToObject(this.secureData)
        }
        _loadFromJson(o) {
            C3.ObjectToMap(o, this.secureData)
        }
        EncryptData(b) {
            var e = this.encryptKey;
            b = String(b);
            var c = 0, f = "", d;
            for (d = 0; d < b.length; d++) {
                var a = b.charAt(d);
                a = a.charCodeAt(0) ^ e.charCodeAt(c);
                a = String.fromCharCode(a);
                f += a;
                c == e.length - 1 ? c = 0 : c++;
            }

            return f;
        }
        EncryptDataKey(b) {
            b = String(b);
            var c = 0, e = "", d;
            for (d = 0; d < b.length; d++) {
                var a = b.charAt(d);
                a = a.charCodeAt(0) ^ "yVzrMkAuCybStclIndeHuamcOlqycwTwdnD".charCodeAt(c);
                a = String.fromCharCode(a);
                e += a;
                34 == c ? c = 0 : c++;
            }

            return e;
        }
        GetDebuggerProperties() {
            const prefix = "plugins.secureData";
            return [{
                title: "SecureData",
                properties: [{
                    name: "Key count",
                    value: this.secureData.size
                }, {
                    name: "Encrypt Key",
                    value: this.encryptKey
                }, ...[...this.secureData].map(entry => ({
                    name: "$" + entry[0],
                    value: this.EncryptData(entry[1]),
                    onedit: v => this.secureData.set(entry[0], this.EncryptData(v))
                }))]
            }]
        }
        GetScriptInterfaceClass() {
            return self.ISecureDataInstance
        }
    };
    const map = new WeakMap;
    self.ISecureDataInstance = class ISecureDataInstance extends IInstance {
        constructor() {
            super();
            map.set(this, IInstance._GetInitInst().GetSdkInstance())
        }
        getDataMap() {
            return map.get(this).GetDataMap()
        }
        getEncryptData(b) {
            return map.get(this).GetEncryptData(b)
        }
        getEncryptDataKey(b) {
            return map.get(this).GetEncryptDataKey(b)
        }
    }
};