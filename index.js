#!/usr/bin/env node

var dns = require('dns-discovery')({
  server: [
    'discovery1.publicbits.org',
    'discovery2.publicbits.org'
  ]
})

dns.whoami(function (err, me) {
  if (err) throw err
  console.log('dns worked', me)
  process.exit(0)
})
