#!/bin/sh
APPLICATION=`cat config.js | grep  "appName" | sed -e "s/appName: '//" -e "s/'//"`
DOMAIN=`cat config.js | grep  "bundleId" | sed -e "s/, bundleId: '//" -e "s/'//"`

cordova create tmp $DOMAIN $APPLICATION
cp -r tmp/* ./
rm -rf tmp