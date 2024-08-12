[![test-workflow][test-badge]][test-workflow]

# console.plot 

ASCII-terminal plotter 

> wraps [asciichart][asciichart]

## Usage 

```js
import console from '@nicholaswmin/console'

const arrays = {
  foo: [1,2,4,4,5,5,4,3,6,7,8,12,16,14,14,13,13,12,10,12,13,13,13,14,14,14,15],
  bar: [1,3,5,5,7,12,12,12,12,10,8,12,10,10,9,10,9,10,12,12,12,12,12,15,12,12]
}

console.plot(arrays, {
  title: 'timeline',
  subtitle: 'Durations, in millis',
  height: Math.ceil(process.stdout.rows / 3) || 20,
  width: Math.ceil(process.stdout.columns / 2) || 100
})
```

logs:

```js

timeline

-- foo  -- bar

19.00 ┤                                                                     ╭╮                             
17.80 ┤                               ╭╮                 ╭╮  ╭╮  ╭╮ ╭╮  ╭╮  ╭╮        ╭╮    ╭╮             
16.60 ┤                              ╭╯│           ╭─────╯│  ││  ││ ││  ││ ╭││        ││    ││          ╭╮ 
15.40 ┤        ╭╮           ╭╭╮──────╯ ╰─────╭╮  ╭─╯ ╭──────────────╯╰──╯╰──╯╰──╮─────╯╰────╯╰─╮        │╰ 
14.20 ┤        │╰─╮       ╭─╯││             ╭╯│──╯   │                          ╰────╮         ╰────╮   │  
13.00 ┤        │  ╰─╮  ╭──╯  ││             │ │      │                               ╰────╮         ╰───╯  
11.80 ┤    ╭───╮ ╭╮ ╰╮╭╯╭────╯╰╮ ╭──────────╯ ╰──────╯                                    ╰────────        
10.60 ┤    │  ││ ││  ││ │      │╭╯                                                                         
 9.40 ┤    │  │╰╮│╰─────╯      ╰╯                                                                          
 8.20 ┤    │ ╭╯ ╰╯                                                                                         
 7.00 ┤   ╭╯╭╯                                                                                             
 5.80 ┤   │╭╯                                                                                              
 4.60 ┤╭╭─╯│                                                                                               
 3.40 ┼╭╯╰─╯                                                                                               
 2.20 ┤│                                                                                                   
 1.00 ┼╯                                                                                                   

Durations, in millis

- last: 100 items
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
