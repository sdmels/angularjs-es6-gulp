export function UpperFilter() {
    return function(string) {
        return string.toUpperCase();
    };
}

export function LowerFilter() {
    return function(string) {
        return string.toLowerCase();
    };
}