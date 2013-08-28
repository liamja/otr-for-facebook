OTR for Facebook
================

Encrypt your chat messages on Facebook.com with Off-the-Record Messaging.

This OTR implementation is designed to provide non-tech-savvy
users with a means to chat to facebook friends with the least
amount of setup possible.

**Do not use OTR for Facebook in life or death situations**

**[Metadata][2] can ([and will][1]) still be collected.**


What is OTR?
------------

Off-the-Record (OTR) Messaging allows you to have private conversations over
instant messaging. You can read more about OTR at
[Cypherpunks](http://www.cypherpunks.ca/otr/index.php).


Libraries
---------

This browser extension is built upon the following code:

  * [Kango cross-browser extension framework](http://kangoextensions.com/)
  * [OTR JS implementation](https://github.com/arlolra/otr)
  * [Zepto.js](http://zeptojs.com/)


Development
-----------

You'll need to download and install the Kango framwork to build the extensions:

* [Download and Install Python 2.7](http://www.python.org/download/)
* [Download Kango](http://kangoextensions.com/kango/kango-framework-latest.zip).
* Extract the archive to any directory.
* Download and install dependencies:

    npm install
    bower install

Build the extensions by running:

    /kango-path/kango.py build /otr-for-facebook/


License
-------

Released under an MIT License.

See [LICENSE.md](LICENSE.md) for the full license text.


[1]: http://www.theguardian.com/world/2013/jun/27/nsa-online-metadata-collection
[2]: http://www.theguardian.com/technology/2013/jul/07/nsa-gchq-metadata-reassurances
