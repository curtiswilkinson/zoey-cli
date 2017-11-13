#!/usr/bin/env node
import * as cli from 'cli'
import Config from './config'
import Build from './build'
import Init from './init'

export interface Options {
  init: boolean
  project: string
  index: boolean
  'no-cache': boolean
}

const main = async () => {
  const options: Options = cli.parse({
    init: ['i', 'Initialise a default zoey configuration file', 'bool'],
    project: ['p', 'Path to the zoey configuration file', 'file', './'],
    index: [
      false,
      'Place a project in cache to avoid an upfront full build',
      'bool'
    ],
    'no-cache': [false, 'Build all services regardless of cache status', 'bool']
  })

  if (options.init) {
    return Init(options.project)
  }

  const config = await Config.parse(options.project)

  return Build.init(config, options)
}

main()
