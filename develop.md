# Suger TypeScript SDK Development Guide

## Project Overview

The Suger TypeScript SDK is an auto-generated client library for the Suger API, built using OpenAPI Generator from a specification that is itself generated from [marketplace-service](https://github.com/sugerio/marketplace-service).

## How to generate the code

### Step1: Updates OpenAPI spec to latest

```bash
./update-openapi.sh
```

### Step2: Regenerates Go SDK from OpenAPI spec
```bash
./regenerate.sh
```
Or, to use a different version
```bash
./regenerate.sh --version xxx
```

## To run test

```bash
npm test
```