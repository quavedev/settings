# quave:settings

`quave:settings` is a Meteor package that allows you to get settings for a specific package in a standard way.
  
## Why
Many packages need to read settings in the startup phase, with this package we can all use the same standard. This package is intended for package authors.

We believe we are not reinventing the wheel in this package but what we are doing is like putting together the wheels in the vehicle :).
  
## Installation

Package usage (package.js)
```javascript
  api.use('quave:settings@1.0.0');
```

Application usage
```sh
meteor add quave:settings
```

### Usage

```javascript
import { getSettings } from "meteor/quave:settings";

const PACKAGE_NAME = "quave:collections";

const settings = getSettings({ packageName: PACKAGE_NAME });

const { isVerbose } = settings;

if (isVerbose) {
  console.log(`[${PACKAGE_NAME}]: starting...`);
}
```

## Limitations
- We expect your settings to be in your Meteor settings file, inside the `packages` key and then inside a key with your package name. You can add settings to the public section as well, following the same standard. Public settings take precedence over private.

### License

MIT
