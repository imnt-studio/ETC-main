/**
  * This script will be run before the package starts asking for the config data,
  * used to output a simple guide for the coming questions, or to spam some sexy
  * ascii art at the user.
  *
  */

import { stripIndents } from 'common-tags';
import chalk from 'chalk';

// gotta have that sexy console
console.log(stripIndents`
  ${chalk.magenta('°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸°º¤ø,¸¸,ø¤º°`°º¤ø')}
  ${chalk.gray('--------------(') + chalk.white(' ETO_Chat 服务端安装程序 ') + chalk.gray(')--------------')}
  ${chalk.magenta('°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸°º¤ø,¸¸,ø¤º°`°º¤ø')}

  如果需要进行高级安装，请查看下面的文档:
  ${chalk.green('http://gitwu.iuqaq.com/ETO_Studio/EC-main/src/branch/main/documentation')}

  ${chalk.white('温馨提示:')} ${chalk.green('npm/yarn run config')} 可以重新运行此向导。

  你现在要回答下列问题:
  -  ${chalk.magenta('      识别码')}, 用户名旁边的那组乱码，美名其曰保证密码安全
  -  ${chalk.magenta('管理员用户名')}, 这东西放在这当摆设，其实这个可以随便填
  -  ${chalk.magenta('管理员密码')}, 这个你可要认真填了，否则待会没权限别找我
  -  ${chalk.magenta('      端口')}, WebSocket端口，HTTP不是在这里改，这是服务端安装程序啊!
  \u200b
`);
