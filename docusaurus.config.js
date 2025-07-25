/** @type {import('@docusaurus/types').DocusaurusConfig} */

/* Smart quotes via retext-smartypants */
const visit = require('unist-util-visit');
const retext = require('retext');
const retextSmartypants = require('retext-smartypants');

function remarkSmartypants(options) {
  const processor = retext().use(retextSmartypants, options);

  function transformer(tree) {
    visit(tree, 'text', node => {
      node.value = String(processor.processSync(node.value));
    });
  }

  return transformer;
}

module.exports = {
  title: 'Droid-ify',
  tagline: 'Minimal F-droid client for design and performance',
  url: 'https://Droid-ify.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Droid-ify',
  projectName: 'Droid-ify',
  titleDelimiter: '·',
  themeConfig: {
    navbar: {
      title: 'Droid-ify',
      hideOnScroll: true,
      logo: {
        alt: 'Droid-ify Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          to: 'overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: 'features',
          label: 'Features',
          position: 'left',
        },
        {
          to: 'screenshots',
          label: 'Screenshots',
          position: 'left',
        },
        {
          to: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'community',
          label: 'Community',
          position: 'left',
        },

        {
          to: 'download',
          label: 'Download',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Discover',
          items: [
            {
              label: 'Overview',
              to: '/overview',
            },
            {
              label: 'Features',
              to: '/features',
            },
            {
              label: 'Screenshots',
              to: '/screenshots',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Droid-ify',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/Droidify',
            },
            {
              label: 'Developer',
              href: 'https://sribalaji.eu.org/',
            },
            {
              label: 'More',
              to: '/community',
            },
          ],
        },
        /**
        {
          title: 'Developers',
          items: [
            {
              label: 'Source code',
              to: '/developers/download',
            },
            {
              label: 'Build',
              to: '/developers/build',
            },
            {
              label: 'Contribute',
              to: '/developers/contribute',
            },
            {
              label: 'Technical details',
              to: '/performance',
            },
          ],
        }, */
        {
          title: 'Resources',
          items: [
            {
              label: 'Donate',
              to: '/donate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://sribalaji.eu.org/">SriBalaji (thecloverly)</a><br><span style="color:var(--ifm-footer-link-color);display:inline-block;padding-top:1em">Android is a trademark of Google LLC.</span><br><span style="color:var(--ifm-footer-link-color)">Droid-ify is not affiliated with F-Droid.</span>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
       id: 'Release_v0.6.6',
       content: 'Droid-ify v0.6.6 is now available',
     },
    algolia: process.env.ALGOLIA_API_KEY && {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          remarkPlugins: [
            remarkSmartypants,
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: process.env.SA_DOMAIN && [
    {
      postbuild: 'node src/algolia.js',
    },
    {
      src: `https://${process.env.SA_DOMAIN}/latest.js`,
      async: true,
      defer: true,
      'data-skip-dnt': 'true',
    },
    {
      src: 'https://kdrag0n.dev/js/plaus.js',
      async: true,
      defer: true,
      'data-domain': 'Droid-ify.org',
    }
  ],
};
