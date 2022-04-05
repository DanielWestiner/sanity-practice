export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '624c6c25597fd16a62660aea',
                  title: 'Sanity Studio',
                  name: 'sanity-practice-studio',
                  apiId: '26a48e0c-6f6b-4b0e-bde7-256670672360'
                },
                {
                  buildHookId: '624c6c26a9510456c86c9d7a',
                  title: 'Portfolio Website',
                  name: 'sanity-practice-web',
                  apiId: 'de68cdf7-74c2-404c-b80e-1bcc906bf1c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielWestiner/sanity-practice',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-practice-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
