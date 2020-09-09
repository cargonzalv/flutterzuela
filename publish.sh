flutter build web --release
sed -i.bak s/'"#"+a'/'""'/g ./build/web/main.dart.js
rm -rf docs
cp -R build/web docs