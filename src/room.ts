import { child_process } from 'mz'
import Cache from './cache'

import { Room } from './config'

const service = async (
	name: string,
	buildPath: string,
	command: string
): Promise<any> => {
	// spawn the build process
	return child_process
		.exec(command, {
			cwd: buildPath,
			maxBuffer: 1024 * 10
		})
		.then(() => {
			console.log('Writing cache')
			Cache.write(buildPath)
		})
		.catch(e => {
			throw e
		})
}

export default { service }
