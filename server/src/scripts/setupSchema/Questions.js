/**
  * This object contains Prompt ( https://www.npmjs.com/package/prompt ) style
  * questions that the SetupWizard will require an answer to. Questions are asked
  * in the order they are specified here.
  *
  * The resulting config.json file will be used by the server, accessed by the
  * name specified. IE, a valid use is; config.adminName
  *
  */

const Questions = {
  properties: {
    tripSalt: {
      description: '识别码 (留空默认或者随机生成)',
      type: 'string',
      hidden: true,
      replace: '*',
      before: (value) => {
        salt = value;
        return value;
      },
    },

    adminName: {
      description: '管理员用户名',
      pattern: /^"?[a-zA-Z0-9_]+"?$/,
      type: 'string',
      message: '随便写，但只能是字母或数字',
      before: (value) => value.replace(/"/g, ''),
    },

    adminTrip: {
      type: 'string',
      hidden: true,
      replace: '*',
      description: '管理员密码',
      message: '你必须输入或重新输入你记得住密码',
      before: (value) => {
        const crypto = require('crypto');
        const sha = crypto.createHash('sha256');
        sha.update(value + salt);
        return sha.digest('base64').substr(0, 6);
      },
    },

    websocketPort: {
      type: 'integer',
      message: '端口只能是数字好吗',
      description: 'Websocket端口',
      default: '26264',
    },
  },
};

module.exports = Questions;
