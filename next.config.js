/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
    prependData: `@import "/src/styles/_mixin.scss"; @import "/src/styles/_colors.scss";`,
  },
};

module.exports = nextConfig;
