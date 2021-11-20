# Documentation

In order to write meaninful test you need to be able to do 3 things:
- navigate to a page and inspect its content
- emulate user interaction (mouse, keybaard)
- make assessments about the page

## Navigate to and around the page

#### Important

| Command | Descritpion |
| ------- | ----------- |
| [open](open.md#open)          | navigate to a url |
| [reload](reload.md#reload)    | reload current page |
| [get](get.md#get)             | get element on the page |
| [find](find.md#find)          | find child element(s) within the current subject |
| [closest](closest.md#closest) | find closest parent starting with the current subject |
| [invoke](invoke.md#invoke)    | invoke a method on the current subject |

#### Other

| Command | Descritpion |
| ------- | ----------- |
| [wait](wait.md#wait)      | wait for something to happen |
| [then](then.md#then)      | execute a function |
| [if](if.md#if)            | execute a function, if the element present |
| [tag](tag.md#tag)         | tag previous command with a message |
| [pause](pause.md#pause)   | pauses in debugger |
| [begin](begin.md#begin)   | begins the group of commands |
| [end](end.md#end)         | ends the group of commands |
| [break](berak.md#berak)   | exists current group of commands |

## Emulate user actions

#### Important

| Command | Descritpion |
| ------- | ----------- |
| click     | emulate mouse click |
| type      | emulate typing on the keyboard |
| trigger   | trigger any event |

#### Other

| Command | Descritpion |
| ------- | ----------- |
| clear     | clear input |
| focus     | focus input |
| blur      | blur input |
| select    | select item in the drop down control |
| check     | check checkbox |
| uncheck   | uncheck checkbox |

## Assertions and error reporting

| Command | Descritpion |
| ------- | ----------- |
| should  |   |
| log     |   |
| error   |   |

## Custom Commands

| Command | Descritpion |
| ------- | ----------- |
| commands  |   |
| add       |   |
| overwrite |   |
| runner    |   |
| steps     |   |