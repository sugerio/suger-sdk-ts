#!/bin/bash

# Regenerate Suger TypeScript SDK from OpenAPI specification
# This script uses the same command that was used to generate the current codebase

# Default version
DEFAULT_VERSION="v3.128.220"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --version)
      VERSION="$2"
      shift 2
      ;;
    *)
      echo "Unknown parameter: $1"
      echo "Usage: $0 [--version VERSION]"
      exit 1
      ;;
  esac
done

# Use provided version or default
VERSION=${VERSION:-$DEFAULT_VERSION}

echo "Regenerating Suger TypeScript SDK from OpenAPI specification..."
echo "Using version: $VERSION"

# Make sure we have openapi-generator installed
if ! command -v openapi-generator &> /dev/null; then
    echo "Error: openapi-generator is not installed."
    echo "Install it with: npm install @openapitools/openapi-generator-cli -g"
    echo "Or use: brew install openapi-generator"
    exit 1
fi


# Run the OpenAPI generator
echo "Running OpenAPI generator..."
openapi-generator generate \
  -i api/openapi.yaml \
  -g typescript \
  -o ./ \
  --git-repo-id suger-sdk-ts \
  --git-user-id sugerio \
  --additional-properties=npmName=suger-sdk-ts \
  --additional-properties=npmVersion=$VERSION \
  --additional-properties=supportsES6=true \
  --additional-properties=testScript="vitest run"

# Add node_modules and package-lock.json to .gitignore
echo "node_modules/" >> .gitignore
echo "package-lock.json" >> .gitignore

# Add test script to package.json
jq '.scripts.test = "vitest"' package.json > package.tmp.json && mv package.tmp.json package.json


echo "Code regeneration complete!"