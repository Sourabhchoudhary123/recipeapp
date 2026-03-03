#!/usr/bin/env bash
set -e

# optional: print environment for debugging
echo "PORT=$PORT"
echo "NODE_ENV=$NODE_ENV"

# run the app
node server.js