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
  -  ${chalk.magenta('      Salt')}, 防止密码被暴力破解.
  -  ${chalk.magenta('管理员用户名')}, 管理员的用户名.
  -  ${chalk.magenta('管理员密码')}, 在您作为管理员登陆时所需要的密码.
  -  ${chalk.magenta('      端口')}, WebSocket通讯端口.
  \u200b
`);
