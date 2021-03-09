const fs = require('fs');
const path = require('path');
// 获取路径
const htmlPath = path.resolve(__dirname, './public/index.html');

class WebpackPluginVersion {
  apply(compiler) {
    compiler.hooks.done.tap('done', function() {
      // 以本文的形式读取文件
      const htmlText = fs.readFileSync(htmlPath, 'utf-8')
      // 写入一段script
      const scriptHtml = `
        <script>
          window.buildTime = '${dateFormat("YYYY-mm-dd HH:MM:SS", new Date())}'
        </script>
      `;
      // 使用正则替换原来的htmlText
      const newHtmlText = htmlText.replace('</body>', scriptHtml + '</body>')
      // 写入
      fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), newHtmlText);
    })
  }
}
module.exports = WebpackPluginVersion;

const dateFormat = (fmt, date) => {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
  }
  return fmt;
}