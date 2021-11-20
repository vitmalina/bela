# Documentation

In order to write meaninful test you need to be able to do 3 things:
- navigate to a page and inspect its content
- emulate user interaction (mouse, keybaard)
- make assessments about the page


### Navigate to and around the page

| Command | Descritpion |
| ------- | ----------- |
| [open](open.md#open)          | navigate to a url |
| [reload](reload.md#reload)    | reload current page |
| [get](get.md#get)             | get element on the page |
| [find](find.md#find)          | find child element(s) within the current subject |
| [closest](closest.md#closest) | find closest parent starting with the current subject |
| [invoke](invoke.md#invoke)    | invoke a method on the current subject |
| - | |
| [wait](wait.md#wait)          | wait for something to happen |
| [then](then.md#then)          | execute a function |
| [if](if.md#if)                | execute a function, if the element present |
| [tag](tag.md#tag)             | tag previous command with a message |
| [pause](pause.md#pause)       | pause in debugger |
| [begin](begin.md#begin)       | begin a group of commands |
| [end](end.md#end)             | end the group of commands |
| [break](break.md#break)       | exit current group of commands |

### Emulate user actions

| Command | Descritpion |
| ------- | ----------- |
| [click](click.md#click)       | emulate mouse click |
| [type](type.md#type)          | emulate typing on the keyboard |
| [drag](drag.md#drag)          | emulate drag action |
| [trigger](trigger.md#trigger) | trigger any event |
| - | |
| [clear](clear.md#clear)       | clear input |
| [focus](focus.md#focus)       | focus input |
| [blur](blur.md#blur)          | blur input |
| [select](select.md#select)    | select item in the drop down control |
| [check](check.md#check)       | check checkbox |
| [uncheck](uncheck.md#uncheck) | uncheck checkbox |

### Assertions and error reporting

| Command | Descritpion |
| ------- | ----------- |
| [should](should.md#should)    | make assertions about the subject |
| [log](log.md#log)             | log a message |
| [error](error.md#error)       | log an error |

### Custom Commands

| Command | Descritpion |
| ------- | ----------- |
| [add](custom.add.md)               | add a custom command |
| [remove](custom.remove.md)         | remove a custom command |
| [overwrite](custom.overwrite.md)   | overwrite existing command (any, not just custom commands)  |
