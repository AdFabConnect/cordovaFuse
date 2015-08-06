#!/bin/sh
set -euo pipefail

APPLICATION=`cat package.json | grep -m 1 "name" | sed -e 's/"name": "//' -e 's/",//'`
DOMAIN=`cat package.json | grep  "bundleId" | sed -e 's/"bundleId": "//' -e 's/",//'`

cordova create tmp $DOMAIN $APPLICATION
cp -r tmp/* ./
rm -rf tmp