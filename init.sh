#!/bin/sh
cd `dirname $0`
APPLICATION=$1
DOMAIN=$2
DIRNAME=`pwd`
BASENAME=`basename ${DIRNAME}`
NAMESPACE=`echo $2 | sed -e 's/\./\n/g' | tac | xargs echo | sed -e 's/ /./g'`
echo $DIRNAME $BASENAME
cordova create tmp ${NAMESPACE} ${APPLICATION}
cp -r tmp/* ./
rm -rf tmp