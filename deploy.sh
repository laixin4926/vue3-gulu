rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:laixin4926/vue3-gulu-webpack.git
git push -f -u origin master &&
cd - 