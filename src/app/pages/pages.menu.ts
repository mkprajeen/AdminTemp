export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'PatientEncounter',
        data: {
          menu: {
            title: 'general.menu.patientencounter',
            icon: 'fa fa-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'PatientListComponent',
            data: {
              menu: {
                title: 'general.menu.patientlist',
              }
            }            
          },
          {
            path: 'EncounterList',
            data: {
              menu: {
                title: 'general.menu.encounterlist',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'fa fa-clone',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
      
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://google.com',
            icon: 'fa fa-heart',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
