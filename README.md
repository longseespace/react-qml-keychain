# RQKeychain

[QtKeychain](https://github.com/frankosterfeld/qtkeychain) for QML and [React QML](https://github.com/longseespace/react-qml) applications

## Installation
```sh
# install native component
qpm install com.react-qml.keychain
# (optional) install corresponding package for react-qml application
yarn add @react-qml/keychain
```

The package is provided as a qpm package,
[`com.react-qml.keychain`](https://www.qpm.io/packages/com.react-qml.keychain/index.html).  
Check their
[GitHub - Usage for App Developers](https://github.com/Cutehacks/qpm/blob/master/README.md#usage-for-app-developers)
to learn more about qpm.

## API
This package exposes a QML singleton `RQKeychain` with the following methods:

```typescript
export interface RQKeychainError {
  name: string;
  message: string;
}

export type RQKeychainCallback<T> = (
  error: RQKeychainError | boolean,
  result: T
) => void;

export interface RQKeychainType {
  setInsecureFallback(insecureFallback: boolean): void;
  readPassword(
    service: string,
    account: string,
    callback: RQKeychainCallback<string>
  ): void;
  writePassword(
    service: string,
    account: string,
    value: string,
    callback?: RQKeychainCallback<void>
  ): void;
  deletePassword(
    service: string,
    account: string,
    callback?: RQKeychainCallback<void>
  ): void;
}
```

## Examples

Usage in QML file

```qml
import ReactQML 1.0

Item {
  Component.onCompleted: {
    RQKeychain.readPassword('Slack', 'token', function(error, result) {
      // result handling
    });
  }
}
```

Usage in JS file
```javascript
import Keychain from '@react-qml/keychain';
Keychain.readPassword('Slack', 'token', (error, result) => {
  // result handling
})
```

## License
RQKeychain is available under MIT.  
QtKeychain is available under the [Modified BSD License](http://www.gnu.org/licenses/license-list.html#ModifiedBSD). See the file COPYING for details.
