# biome-config

Shared [Biome](https://biomejs.dev) configuration for New Jersey Innovation Authority projects.

### Usage

Install the config alongside Biome (`@biomejs/biome` `^2.5.11` is a peer dependency):

With pnpm:

```sh
pnpm add --save-dev --save-exact @biomejs/biome @newjersey/biome-config
```

With npm:

```sh
npm install --save-dev --save-exact @biomejs/biome @newjersey/biome-config
```

Extend it from your repo's `biome.json`:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@newjersey/biome-config/biome"]
}
```

This config holds rules and formatting only. Keep repo-specific settings such as `files.includes` in your own `biome.json`. Settings in your file override the shared ones, so you can turn off or adjust individual rules there.

### Publishing a new version of the package

1. Go the the [Draft Release action](https://github.com/newjersey/biome-config/actions/workflows/draft-release.yml), click "Run workflow" (you need write permissions to do this). Choose the branch (`main`) and the semver level of the new version (patch, minor, major).
2. Confirm this worked by checking that a "Bump version to vX.Y.Z" pull request is open and a draft release for this version is available in the [Releases page](https://github.com/newjersey/biome-config/releases).
3. Merge the version bump pull request.
4. Click to Edit the new release, and update the description if needed. Click "Publish." This will trigger the publish-release Github Actions workflow.
5. Once the workflow is completed, confirm that the package is updated on [NPM registry](https://www.npmjs.com/package/@newjersey/biome-config).
   