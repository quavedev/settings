Package.describe({
  name: 'quave:settings',
  version: '0.0.1',
  summary: 'Utility package to get settings for a package',
  git: 'https://github.com/quavedev/settings',
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.2');
  api.use('ecmascript');

  api.mainModule('settings.js');
});
