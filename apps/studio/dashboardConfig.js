export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'avantgarde0707/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ed8096fd9490228722fd9c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-csuf7vhc',
                  apiId: '6f0ce3c7-f4df-460c-8dfb-d76507bde32a'
                },
                {
                  buildHookId: '60ed80969c23dc254f30e6b6',
                  title: 'Website',
                  name: 'sanity-angular-website-web-6sgorf8p',
                  apiId: 'dfb6c462-d1f3-46d8-9c53-a2e5f1692120'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/avantgarde0707/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-6sgorf8p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
