cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.plugin.lowlatencyaudio/www/LowLatencyAudio.js",
        "id": "com.rjfun.cordova.plugin.lowlatencyaudio.LowLatencyAudio",
        "clobbers": [
            "window.plugins.LowLatencyAudio"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rjfun.cordova.plugin.lowlatencyaudio": "1.0"
}
// BOTTOM OF METADATA
});