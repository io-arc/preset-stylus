import { program } from 'commander'
import cpx from 'cpx'
import { green, red } from 'kleur'
import path from 'path'
import updateNotifier from 'update-notifier'
import { name, version } from '../package.json'

// Update library
updateNotifier({ pkg: { name, version } }).notify()

// Command
program
  .version(version)
  .option(
    '-o, --overwrite',
    'If the file has the same name, it will be overwritten.'
  )
  .parse(process.argv)

const overwrite = !program.overwrite

cpx.copy(
  `${path.dirname(__filename)}/template/**/*.styl`,
  '',
  { update: overwrite },
  (error: Error | null): void => {
    if (error != null) {
      console.log('Oops X(')
      console.log(red(JSON.stringify(error)))
      return
    }

    console.log(green('Assets copy is done !'))
  }
)
