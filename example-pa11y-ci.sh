# Install globally once
npm install --global pa11y-ci

# use forever
npx --no-install pa11y-ci https://google.com

# run against a series of sites
npx pa11y-ci https://pa11y.org https://pa11y.org/contributing

# or a sitemap
npx -pa11y-ci --sitemap http://pa11y.org/sitemap.xml