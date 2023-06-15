#!/usr/bin/env bash

set -eufo pipefail

src="$(dirname "$1")/$(basename "$1" .png)"

echo "Resizing $src"
convert -resize 418x866 -filter Lanczos $src.png $src.tmp1
echo "Compressing $src as PNG"
zopflipng $src.tmp1 $src.tmp2 & 
echo "Converting $src to WebP"
cwebp -q 90 $src.tmp1 -o $src.webp &
wait

rm -f $src.png $src.tmp1
mv $src.tmp2 $src.png
