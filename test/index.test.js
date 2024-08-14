import test from 'node:test'

import console from '../index.js'

test('#console.plot() ', async t => {
  const logs = []
  const arrays = {
    foo: [1,2,4,4,5,5,4,3,6,7,8,12,16,14,14,13,13,12,13,13,14,14,14,15],
    bar: [1,3,5,5,7,12,12,12,12,10,8,12,10,10,9,10,9,10,12,12,15,12,12]
  }

  t.beforeEach(() => {      
    const logFn = console.log
    logs.splice(0, logs.length - 1)
    console.log = (...args) => {
      logs.push(...args)
      logFn(...args)
    }
    
    console.plot(arrays, {
      title: 'timeline',
      subtitle: 'Durations, in millis',  
      height: 15,
      width: 75
    })
  })
  
  await t.test('missing all arguments except input', async t => {
    await t.test('doesnt throw', t => {
      t.assert.doesNotThrow(() => console.plot(arrays))
    })
  })

  await t.test('plots the properties', async t => {
    await t.test('plots foo', async t => {
      t.assert.ok(logs.join().includes('foo'))
    })
    
    await t.test('plots bar', t => {
      t.assert.ok(logs.join().includes('bar'))
    })
    
    await t.test('plots the title', t => {
      t.assert.ok(logs.join().includes('timeline'))
    })

    await t.test('plots the subtitle', t => {
      t.assert.ok(logs.join().includes('Durations'))
    })
    
    await t.test('plots last "n" items, set by width', t => {
      t.assert.ok(
        logs.join().includes('plotted: 24 out of 75'), 
        'cant find "plotted: 24 out of 75"')
    })
    
    await t.test('plots the min, according to set width', async t => {
      t.assert.ok(logs.join().includes('3.00'))
    })

    await t.test('plots the max', async t => {
      t.assert.ok(logs.join().includes('15.00'))
    })
  })
})
