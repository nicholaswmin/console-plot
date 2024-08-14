[![test-workflow][test-badge]][test-workflow]

# console.plot 

ASCII-terminal plotter 

> wraps [asciichart][asciichart]

## Install 

```bash 
npm i --save @nicholaswmin/console-plot
```

## Usage 

```js
import console from '@nicholaswmin/console'

const arrays = {
  foo: [1,2,4,4,5,5,4,3,6,7,8,12,16,14,14,13,13,12,10,12,13,13,13,14,14,14,15],
  bar: [1,3,5,5,7,12,12,12,12,10,8,12,10,10,9,10,9,10,12,12,12,12,12,15,12,12]
}

console.plot(arrays, {
  title: 'data timeline',
  subtitle: 'Location: Okinawa, Japan',
  height: 15,
  width: 120
})
```

logs:

```js

data timeline

-- foo  -- bar

240.00 ┤                                                                                   ╭─────────────── 
233.50 ┤                                                                                 ╭─╯                
227.00 ┤                                                                               ╭─╯                  
220.50 ┤                                                                            ╭──╯                    
214.00 ┤                                                                          ╭─╯                       
207.50 ┤                                                                        ╭─╯                         
201.00 ┤                                                                      ╭─╯                           
194.50 ┤                                                                   ╭──╯                             
188.00 ┤                                   ╭──╮                          ╭─╯                                
181.50 ┤                                ╭──╯  ╰──╮                     ╭─╯                                  
175.00 ┼────╮                        ╭──╯        ╰──╮                ╭─╯                                    
168.50 ┼────╰─────╮────────────────╭─╯──────────────╰──╮─────────────╯                                      
162.00 ┤          ╰─╮           ╭──╯                   ╰─────────────────────────────────────────╮          
155.50 ┤            ╰───╮   ╭───╯                                                                ╰──╮       
149.00 ┤                ╰───╯                                                                       ╰─╮     
142.50 ┤                                                                                              ╰──╮  
136.00 ┤                                                                                                 ╰─ 

- Location: Okinawa, Japan
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
