Package.describe({
  name: 'quave:settings',
  version: '1.0.0',
  summary: 'Utility package to get settings',
  git: 'https://github.com/quavedev/settings',
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');

  api.mainModule('settings.js');
});
