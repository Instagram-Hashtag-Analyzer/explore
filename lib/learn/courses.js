import { PLATFORM_NAME } from '../constants';

const courses = [
  {
    id: 'basics',
    name: 'Basics',
    lessons: [
      {
        id: 'create-nextjs-app',
        name: 'Create a Next.js App',
        // 50 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 20
          },
          {
            id: 'welcome-to-nextjs',
            name: 'Welcome to Next.js',
            points: 15
          },
          {
            id: 'editing-the-page',
            name: 'Editing the Page',
            points: 15
          }
        ]
      },
      {
        id: 'navigate-between-pages',
        name: 'Navigate Between Pages',
        // 50 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'pages-in-nextjs',
            name: 'Pages in Next.js',
            points: 10
          },
          {
            id: 'link-component',
            name: 'Link Component',
            points: 25
          },
          {
            id: 'client-side',
            name: 'Client-Side Navigation',
            points: 10
          }
        ]
      },
      {
        id: 'assets-metadata-css',
        name: 'Assets, Metadata, and CSS',
        // 100 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'assets',
            name: 'Assets',
            points: 10
          },
          {
            id: 'metadata',
            name: 'Metadata',
            points: 10
          },
          {
            id: 'css-styling',
            name: 'CSS Styling',
            points: 10
          },
          {
            id: 'layout-component',
            name: 'Layout Component',
            points: 15
          },
          {
            id: 'global-styles',
            name: 'Global Styles',
            points: 15
          },
          {
            id: 'polishing-layout',
            name: 'Polishing Layout',
            points: 20
          },
          {
            id: 'styling-tips',
            name: 'Styling Tips',
            points: 15
          }
        ]
      },
      {
        id: 'data-fetching',
        name: 'Pre-rendering and Data Fetching',
        // 100 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'pre-rendering',
            name: 'Pre-rendering',
            points: 10
          },
          {
            id: 'two-forms',
            name: 'Two Forms of Pre-rendering',
            points: 10
          },
          {
            id: 'with-data',
            name: 'Static Generation with and without Data',
            points: 10
          },
          {
            id: 'blog-data',
            name: 'Blog Data',
            points: 20
          },
          {
            id: 'implement-getstaticprops',
            name: 'Implement getStaticProps',
            points: 25
          },
          {
            id: 'getstaticprops-details',
            name: 'getStaticProps Details',
            points: 10
          },
          {
            id: 'request-time',
            name: 'Fetching Data at Request Time',
            points: 10
          }
        ]
      },
      {
        id: 'dynamic-routes',
        name: 'Dynamic Routes',
        // 100 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'page-path-external-data',
            name: 'Page Path Depends on External Data',
            points: 10
          },
          {
            id: 'implement-getstaticpaths',
            name: 'Implement getStaticPaths',
            points: 15
          },
          {
            id: 'implement-getstaticprops',
            name: 'Implement getStaticProps',
            points: 15
          },
          {
            id: 'render-markdown',
            name: 'Render Markdown',
            points: 15
          },
          {
            id: 'polishing-post-page',
            name: 'Polishing the Post Page',
            points: 15
          },
          {
            id: 'polishing-index-page',
            name: 'Polishing the Index Page',
            points: 15
          },
          {
            id: 'dynamic-routes-details',
            name: 'Dynamic Routes Details',
            points: 10
          }
        ]
      },
      {
        id: 'api-routes',
        name: 'API Routes',
        // 25 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'creating-api-routes',
            name: 'Creating API Routes',
            points: 10
          },
          {
            id: 'api-routes-details',
            name: 'API Routes Details',
            points: 10
          }
        ]
      },
      {
        id: 'deploying-nextjs-app',
        name: 'Deploying Your Next.js App',
        // 75 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'github',
            name: 'Push to GitHub',
            points: 20
          },
          {
            id: 'deploy',
            name: `Deploy to ${PLATFORM_NAME}`,
            points: 20
          },
          {
            id: 'platform-details',
            name: `Next.js and ${PLATFORM_NAME}`,
            points: 10
          },
          {
            id: 'other-hosting-options',
            name: 'Other Hosting Options',
            points: 10
          },
          {
            id: 'finally',
            name: 'Finally',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'excel',
    name: 'Excel',
    lessons: [
      {
        id: 'typescript',
        name: 'TypeScript',
        // 50 points
        steps: [
          {
            id: 'setup',
            name: 'Setup',
            points: 5
          },
          {
            id: 'create-tsconfig',
            name: 'Create tsconfig.json',
            points: 10
          },
          {
            id: 'nextjs-types',
            name: 'Next.js Specific Types',
            points: 35
          }
        ]
      }
    ]
  }
];

export default courses;
