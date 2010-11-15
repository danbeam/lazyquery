#!/bin/bash
dir=`dirname $0`;
( head -17 $dir/lazyquery.js && echo -n ";;;;;" && yui --type js --preserve-semi $dir/lazyquery.js ) > $dir/lazyquery.min.js
