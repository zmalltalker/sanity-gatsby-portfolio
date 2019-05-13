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
                  buildHookId: '5cd948bfe770ace1b900aad2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zni6r77v',
                  apiId: '82028533-84cc-4f80-b3e9-09920c385796'
                },
                {
                  buildHookId: '5cd948bf7775a0ca0555b061',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v2tjyjjt',
                  apiId: '9b72dde3-3658-405d-a378-b47479e6c094'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zmalltalker/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-v2tjyjjt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
