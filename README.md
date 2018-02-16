Cryptolio
=========

Setup android emulator
----------------------
Install required tools
```
brew cask install caskroom/versions/java8
brew cask install android-sdk
brew cask install intel-haxm
```
Configure local environment
```
export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"
export ANDROID_HOME="/usr/local/share/android-sdk"
touch ~/.android/repositories.cfg
```
Update the android sdk and install the platform
```
sdkmanager --update
sdkmanager "platform-tools" "platforms;android-27" "extras;intel;Hardware_Accelerated_Execution_Manager" "build-tools;27.0.0" "system-images;android-27;google_apis;x86" "emulator"
```
Create the emulator
```
avdmanager create avd -n test -k "system-images;android-27;google_apis;x86"
```
Run the emulator
```
/usr/local/share/android-sdk/tools/emulator -avd test
```


How to run on iOS Simulator
---------------------------
```
yarn emulator:run-ios
```

How to install React Native debugging tools
-------------------------------------------
```
brew update && brew cask install react-native-debugger
```

How to use React Native debugging tools
-------------------------------------------------
- While the app is running, run `yarn devtools`
- Press Cmd-D to open the internal dev tools
- Click on Debug JS Remotely
