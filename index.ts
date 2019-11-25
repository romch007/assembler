/*
* @adonisjs/assembler
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { Manifest } from '@adonisjs/ace'
new Manifest(__dirname).generate([
  './commands/Build',
  './commands/Serve',
  './commands/Invoke',
])
