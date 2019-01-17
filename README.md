barnacles-socketio
==================

[Socket.io](https://socket.io/) interface for [barnacles](https://github.com/reelyactive/barnacles/) open source software.  We believe in an open Internet of Things.


Installation
------------

    npm install barnacles-socketio


Hello barnacles-socketio
------------------------

The following code will output _simulated_ [raddec](https://github.com/reelyactive/raddec/) data via a socket.io server running on the default port (3001).  The simulated data is provided by [barnowl](https://github.com/reelyactive/barnowl/) which is typically run in conjunction with [barnacles](https://github.com/reelyactive/barnacles/).  Install the _barnowl_, _barnacles_ and _barnacles-socketio_ packages using npm before running the code.

```javascript
const Barnowl = require('barnowl');
const Barnacles = require('barnacles');
const BarnaclesSocketIO = require('barnacles-socketio');

let barnowl = new Barnowl();
barnowl.addListener(Barnowl, {}, Barnowl.TestListener, {});

let barnacles = new Barnacles({ barnowl: barnowl });
barnacles.addInterface(BarnaclesSocketIO, { /* See options below */ });
```


Options
-------

__barnacles-socketio__ supports the following two options:

### server

Provide an instantiated server for socket.io to use.  For example, in the case of an Express server, the code will be similar to the following:

```javascript
const http = require('http');
const express = require('express');

let app = express();
let server = http.createServer(app);
server.listen(3001);

/* ... */

barnacles.addInterface(BarnaclesSocketIO, { server: server });
```

### port

In the absence of a _server_ option (as above), __barnacles-socketio__ will have socket.io instantiate its own server, listening on the provided port.  If no port is provided, the server will listen on the default port (3001).  The code is as follows:

```javascript
/* ... */

barnacles.addInterface(BarnaclesSocketIO, { port: 3001 });
```


License
-------

MIT License

Copyright (c) 2019 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
