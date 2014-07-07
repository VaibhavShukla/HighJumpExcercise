Files:
------

1. Server.js -- contains implementation for HTTP client and server.
2. package.json

Launching the program:
----------------------

1. Perform npm install to install dependencies and libraries.

Usage:
------

1. http://localhost:8000/Weather?state=All&city=All

Gives you data for four cities:

Campbell, CA
Austin, TX
Timonium, MD
Omaha, NE

2. http://localhost:8000/Weather?state=CA&city=Campbell

Gives you data for Campbell, CA.

To run test cases:
------------------

1. npm install -g mocha
2. npm install chai
3. Go to project root directory and then launch 'mocha' command.
4. This command should run all tests defined in project.
