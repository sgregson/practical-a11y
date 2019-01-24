// .pa11ci
{
  "defaults": {
    "timeout": 5000
  },
  "urls": [
    "http://pa11y.org/",
    {
      "url": "http://pa11y.org/contributing",
      // Wow such timeout
      "timeout": 50000,
      "actions": [
        "click element #tab-1",
        "wait for element #tab-1-content to be visible",
        "set field #fullname to John Doe",
        "check field #terms-and-conditions",
        "uncheck field #subscribe-to-marketing",
        "screen capture example.png",
        "wait for fragment to be #page-2",
        "wait for path to not be /login",
        "wait for url to be https://example.com/",
        "wait for #my-image to emit load",
        "navigate to https://another-example.com/"
      ]
    },
    "https://wayfair.com",
    "https://wayfair.com"
  ]
}
