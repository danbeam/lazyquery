#!/bin/bash
( head -17 lazyquery.js && echo -n ";;;;;" && yui --type js --preserve-semi lazyquery.js ) > `dirname $0`/lazyquery.min.js
