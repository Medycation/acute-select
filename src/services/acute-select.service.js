// Service to allow host pages to change settings for all instances (in their module.run function)
angular
    .module('acute.select')
    .factory('acuteSelectService', acuteSelectService);

function acuteSelectService() {
    var defaultSettings = {
        'templatePath': '/acute.select/',
        'noItemsText': 'No items found.',
        'placeholderText': 'Please select...',
        'loadingText': 'Loading...',
        'placeholderSearch': 'search',
        'itemHeight': 24,
        'itemsInView': 10,
        'pageSize': null,
        'minWidth': '100px',
        'maxWidth': '',
        'showSearchBox': true,
        'comboMode': false,
        'comboSelectOnFocus': true,
        'loadOnCreate': true,
        // If true, while loadOnCreate is false, the load function will be called when the dropdown opens
        'loadOnOpen': false,
        'allowCustomText': false,
        'minSearchLength': 0,
        'filterType': 'contains',    // or 'start'
        'allowClear': true,
        'debug': false,
        'customClass': ''
    };

    return {
        getSettings: function () {
            // Add trailing '/' to template path if not present
            var len = defaultSettings.templatePath.length;
            if (len > 0 && defaultSettings.templatePath.substr(len - 1, 1) !== '/') {
                defaultSettings.templatePath += '/';
            }
            return angular.copy(defaultSettings);
        },

        updateSetting: function (settingName, value) {
            updateSingleSetting(settingName, value);
        },

        updateSettings: function (settings) {
            for (var name in settings) {
                updateSingleSetting(name, settings[name]);
            }
        }
    };

    function updateSingleSetting(settingName, value) {
        if (defaultSettings.hasOwnProperty(settingName)) {
            defaultSettings[settingName] = value;
        }
    }
}

