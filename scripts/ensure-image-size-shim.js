const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const shimSrc = path.join(root, "patches", "image-size-metro");
const nested = path.join(root, "node_modules", "metro", "node_modules", "image-size");

function isShim(dir) {
    try {
        const pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"));
        return typeof pkg.version === "string" && pkg.version.includes("metro");
    } catch {
        return false;
    }
}

function copyShim(dest) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.cpSync(shimSrc, dest, { recursive: true, force: true });
    const nestedNext = path.join(dest, "node_modules", "image-size-next");
    if (!fs.existsSync(nestedNext)) {
        const { execSync } = require("child_process");
        execSync("npm install --ignore-scripts --no-package-lock", {
            cwd: dest,
            stdio: "ignore",
        });
    }
}

if (!fs.existsSync(path.join(root, "node_modules", "metro"))) {
    process.exit(0);
}

if (!isShim(nested)) {
    if (fs.existsSync(nested)) {
        fs.rmSync(nested, { recursive: true, force: true });
    }
    copyShim(nested);
    console.log("ensure-image-size-shim: patched metro/node_modules/image-size");
}
