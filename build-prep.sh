#!/bin/bash

npx react-native bundle --platform android --dev false --entry-file index.js -- bundle-output android/app/src/main/asssets/index.android.bundle --assets-dest android/app/src/main/res