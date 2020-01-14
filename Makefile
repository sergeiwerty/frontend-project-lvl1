publish:
	npm publish --dry-run
install:
	npm install
make start:
	npx babel-node src/bin/brain-games.js
make lint:
	npx eslint .
