# Design System example

This repository provides an example of developing and documenting a React component library. For example purposes the library developed here is based on Chakra-UI.

## Development

This repository uses `npm` and [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Automated Releases

This repo comes witha basic setup for conventional commits.

### Commit message format

Homepage: https://www.conventionalcommits.org/

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

types: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test

### How are commits translated to release versions?

- `fix` type commits are translated to `PATCH` releases
- `feat` type commits are translated to `MINOR` releases
- changes with `BREAKING CHANGE` in the commits, regardless of type, are translated to `MAJOR` releases.
