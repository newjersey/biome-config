# biome-config

### Publishing a new version of the package

1. Go the the [Draft Release action](https://github.com/newjersey/biome-config/actions/workflows/draft-release.yml), click "Run workflow" (you need write permissions to do this). Choose the branch (`main`) and the semver level of the new version (patch, minor, major).
2. Confirm this worked by checking that `package.json` version has been bumped and a draft release for this version is available in the [Releases page](https://github.com/newjersey/biome-config/releases).
3. Click to Edit the new release, and update the description if needed. Click "Publish." This will trigger the publish-release Github Actions workflow.
4. Once the workflow is completed, confirm that the package is updated on [NPM registry](https://www.npmjs.com/package/@newjersey/biome-config).
   