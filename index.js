import { styleText } from 'node:util'
import asciichart from 'asciichart'

const asciicolors = [
  'magenta', 'blue', 'cyan', 'green', 'yellow', 
  'lightmagenta', 'lightblue', 'lightcyan', 'lightgreen', 'lightyellow'
]

const plot = (obj, { 
  height     = (Math.ceil(process.stdout.rows / 3)   || 25), 
  width      = (Math.ceil(process.stdout.columns / 2) || 100), 
  title      = '', 
  subtitle   = '' 
} = {}) => {
  if (!obj)
    return console.log('no data ...')
  
  const config  = { subtitle, height, padding: '       ' }  
  const padding = ' '.repeat(config.padding.length - 5)

  let chart     = `\n${padding}${title}\n\n`
  let infolabel = ''

  const br      = '\n'.repeat(2)
  const keys    = Object.keys(obj)
  const ascols  = keys.map((_, i) => asciicolors[i])
  const colors  = asciicolors.map(color => asciichart[color])
  const labels  = keys.map((key, i) => styleText([ascols[i]], `-- ${key}`))
  const arrays  = keys.map(k =>obj[k].slice(-width)).filter(x => x.length)
  const lens    = arrays.map(arr => arr.length)
  const maxlen  = Math.max(...lens)

  if (!arrays.length)
    return console.log('No data ...')

  infolabel = maxlen < width 
    ? `plotted: ${maxlen} out of ${width}` 
    : `- last: ${maxlen} items`
  
  chart += labels.reduce((acc, label) => acc += `  ${label}`, '') + br
  chart += asciichart.plot(arrays, { ...config, colors })    
  chart += config.subtitle 
    ? `${br}${padding}${config.subtitle}${br}${padding}${infolabel}${br}` : br
  
  return console.log(chart)
}

console.plot = plot

export default console
