Cryptolio
=========

Setup android emulator
----------------------

touch ~/.android/repositories.cfg

brew cask install caskroom/versions/java8
brew cask install android-sdk
brew cask install intel-haxm

export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"
export ANDROID_HOME="/usr/local/share/android-sdk"

sdkmanager --update
sdkmanager "platform-tools" "platforms;android-27" "extras;intel;Hardware_Accelerated_Execution_Manager" "build-tools;27.0.0" "system-images;android-27;google_apis;x86" "emulator"
avdmanager create avd -n test -k "system-images;android-27;google_apis;x86"

/usr/local/share/android-sdk/tools/emulator -avd test
