export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ddce3ab2bab047984e07840',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e2w88mm2',
                  apiId: 'ca5c5564-011b-4dfc-bca4-5eabc05d114b'
                },
                {
                  buildHookId: '5ddce3ab2bab04afd9e07826',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ytsqtb67',
                  apiId: 'd96fd296-ff55-4e33-be7d-20e56c842a61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sreng-S/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ytsqtb67.netlify.com', category: 'apps'}
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
