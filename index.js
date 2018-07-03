#!/usr/bin/env node

var dns = require('@distdns/server')({
  server: [
    'revelation1.dwebs.io:6620',
    'revelation2.dwebs.io:6620'
  ]
})

dns.whoami(function (err, me) {
  if (err) throw err
  console.log('dWeb dDNS Is Working', me)
  process.exit(0)
})
