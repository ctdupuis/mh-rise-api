# mh-rise-api

## Prerequisites

## Yarn
Requires [Yarn](https://yarnpkg.com/) installed in your system.

### Installing in Ubuntu 20.04 LTS
Referring to [Linuxize: How to Install Yarn on Ubuntu 20.04](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/) as a guide:

Import repository:
```
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Update pacakge list and install Yarn:
```
$ sudo apt update
$ sudo apt install yarn
```
To run pacakage:
```
$ yarn run start
```

Look at which port it's listening to:
```
Listening on PORT 5000
```
Type it into your web browser:
```
localhost:5000
```

To stop the server, simply press `ctrl + c` in the terminal.