document.addEventListener('DOMContentLoaded', function() {
    var fs = require('fs'),
    filePath = '/Users/sp/Files/themes/slack/slack_dark_theme.css';
  
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
  
        if (!err) {
            var css = document.createElement('style')
            css.innerText = data;
            document.getElementsByTagName('head')[0].appendChild(css);
        }
    })
});