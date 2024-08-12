[![test-workflow][test-badge]][test-workflow]

# console.plot 

ASCII-terminal plotter 

> wraps [asciichart][asciichart]

## Usage 

```js
import console from '@nicholaswmin/console'

const arrays = {
  foo: [1,2,3,4,5,6,7,9,15],
  bar: [2,3,4,6,7,8,9,10,9]
}

console.plot(arrays, {
  title: 'timeline',
  subtitle: 'Durations, in millis',
  height: Math.ceil(process.stdout.rows / 3) || 20,
  width: Math.ceil(process.stdout.columns / 2) || 100
})
```

## Test 

```bash 
npm test 
```

## Authors

[@nicholaswmin][nicholaswmin]

## License

[MIT-0 License][license]

[test-badge]: https://github.com/nicholaswmin/console-plot/actions/workflows/test.yml/badge.svg
[test-workflow]: https://github.com/nicholaswmin/console-plot/actions/workflows/test.yml

[asciichart]: https://github.com/kroitor/asciichart
[nicholaswmin]: https://github.com/nicholaswmin
[license]: ./LICENSE
