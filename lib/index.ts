import updateNotifier from 'update-notifier'
import { program } from 'commander'
import { name, version } from '../package.json'

// Update library
updateNotifier({ pkg: { name, version } }).notify()

// Command
program.version(version).parse(process.argv)
