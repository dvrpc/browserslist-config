# browserslist-config

```shell
npm i --save-dev @dvrpc/browserslist
```

Add to `package.json`:

```json
"browerslist": [
  "extends @dvrpc/browserslist-config"
]
```

Check regularly for updates using `npm outdated` and `npm update`


## Update Procedure

See: https://github.com/ai/browserslist#custom-usage-data

1. Import your Google Analytics data into Can I Use. Press Import… button in Settings page.
2. Open browser DevTools on Can I Use and paste this snippet into the browser console:
```js
var e=document.createElement('a');e.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(JSON.parse(localStorage['usage-data-by-id'])[localStorage['config-primary_usage']])));e.setAttribute('download','stats.json');document.body.appendChild(e);e.click();document.body.removeChild(e);
```
3. Commit stats.json file in this project.
4. Bump version to 1.YY.M [year, month] and publish to npm
