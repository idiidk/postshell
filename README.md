# PostShell
> For when you don`t have the time.

PostShell is a no bullshit, simple and light php backdoor which can execute commands without the use of sockets. It is also password protected.

## Installation

OS X, Linux and Windows:

```sh
git clone https://github.com/idiidk/postshell.git
cd postshell
yarn i
node postshell.js <path> <pass>
```

## Usage example

First you have to upload the shell.php script to the webserver you want to backdoor. To do this you must use an exploit. For example: [unrestricted file uploading.](https://www.owasp.org/index.php/Unrestricted_File_Upload)

The postshell.js script is used to connect and interact with the backdoor. You connect by using the ```<path>``` and ```<password>``` parameters. The path is the url to the php script, for example: https://www.example.com/shell.php. The password is defined in the shell.php script.

_For more examples and usage, please refer to the [Wiki](https://github.com/idiidk/postshell/wiki)._

## Release History

* 0.1.1
    * The first proper release

## Meta

idiidk – [@idiidka](https://twitter.com/idiidka) 

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/idiidk/](https://github.com/idiidk/)

## Contributing

1. Fork it (<https://github.com/idiidk/postshell/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request