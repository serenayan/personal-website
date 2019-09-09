const crypto = require("crypto");

export function sha1(data) {
    return crypto.createHash("sha1").update(data, "binary").digest("hex");
}