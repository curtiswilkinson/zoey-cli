import Init from './init'
import * as fs from 'mz/fs'
import * as rimraf from 'rimraf'

describe('Init', () => {
  test('Writes a file in the current dir if not provided a project path', async () => {
    await Init()
    const result = await fs.exists('./zoey.config.toml')
    expect(result).toBe(true)
    await fs.unlink('./zoey.config.toml')
  })

  test('Writes a file into the provided directory', async () => {
    await fs.mkdir('tmpInit')
    await Init('./tmpInit')
    const result = await fs.exists('./tmpInit/zoey.config.toml')
    expect(result).toBe(true)

    rimraf('./tmpInit', () => ({}))
  })
})
