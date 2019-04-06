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

declare const RQKeychain: RQKeychainType;

export default RQKeychain;
