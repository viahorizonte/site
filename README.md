![Build Status](https://github.com/viahorizonte/site/workflows/CI/badge.svg)

# VHZ Site

This contains the code running on [viahorizonte.life](https://viahorizonte.life).

## Pull Requests

Please send your PRs.

## Developer Setup

This website is built with [Eleventy](https://www.11ty.io) and is hosted on [GitHub Pages](https://pages.github.com/).

### Local development

To set up a local development environment, install [Node.js](https://nodejs.org/) (be sure to follow the instructions for your platform) and follow the steps below:

```sh
# Clone the repository
git clone git@github.com:viahorizonte/site.git viahorizonte-site

# Navigate to the root directory
cd viahorizonte-site

# Install dependencies
npm install
```

Once you have set up your environment, you can run a copy of the website locally using this command:

```sh
$ npm start
```

This will watch for changes to the source code and rebuild the website, which will be hosted at `http://localhost:8080/`.

## License

[MIT License](LICENSE)