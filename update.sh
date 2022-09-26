#!/bin/bash

# shellcheck disable=SC2164
cd "$(dirname "$0")"

# Fetch the latest changes
git fetch --all

# Apply the latest changes
git pull

# Clean up the old files
yarn clean

# Build the website
yarn build
