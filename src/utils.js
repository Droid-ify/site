// TODO: evaluate this in the browser for SSR builds
export function detectOs() {
    // Default to Windows in SSR
    let userAgent = typeof navigator != "undefined" ? navigator.userAgent : "";

    if (userAgent.includes("Macintosh")) {
        return "mac";
    } else if (userAgent.includes("Linux")) {
        return "linux";
    } else {
        // Most likely
        return "windows";
    }
}
