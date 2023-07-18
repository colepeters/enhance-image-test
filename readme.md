## Workflow

1. `arc-plugin-image` RC gets plugin config from user's `.arc` file
1. `arc-plugin-image` RC writes plugin data to `@architect/shared/enhance-image/imageConfig.mjs` (which ends up in consuming project's `arc-plugin-enhance` node modules)
1. `arc-plugin-enhance` monkeypatch imports the image config: https://github.com/colepeters/enhance-image-test/blob/main/node_modules/%40enhance/arc-plugin-enhance/src/http/any-catchall/router.mjs#L8
1. `arc-plugin-enhance` monkeypatch dumps the config into the store: https://github.com/colepeters/enhance-image-test/blob/main/node_modules/%40enhance/arc-plugin-enhance/src/http/any-catchall/router.mjs#L138
1. `@enhance/image` monkeypath pulls the image config from the store and uses it to generate the required markup: https://github.com/colepeters/enhance-image-test/blob/main/node_modules/%40enhance/image/index.mjs#L16
