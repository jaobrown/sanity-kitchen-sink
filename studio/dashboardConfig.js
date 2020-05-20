export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ec57c15f7d4e41f6b61d9c2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-178n18mw',
                  apiId: 'bc2e0d69-6061-4fbd-b4c3-49634ef9edd7'
                },
                {
                  buildHookId: '5ec57c16aa84b503715ef994',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qzertz3a',
                  apiId: '5a444b8d-4e14-4c2c-a4d7-586cb273748b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaobrown/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qzertz3a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
