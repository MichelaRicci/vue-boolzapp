console.log('Vue Ok');

const app = Vue.createApp({

    data(){

      return{
          currentIndex: 0,

          newMessage: '',

          search: '',

        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },

        contacts: [
          {
            name: 'Michele',
            avatar: '_1',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
            ],

          },

          {
            name: 'Fabio',
            avatar: '_2',
            visible: true,

            messages: [{
              date: '20/03/2020 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
            }
            ],
          },
          {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [{
              date: '28/03/2020 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
            }
            ],
          },
          {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [{
              date: '10/01/2020 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
            ],
          },
        ]

      }
    },

  computed: {
    currentContact() {
      return this.contacts[this.currentIndex];
    },

    currentChat() {
      return this.currentContact.messages;
    },

    filteredContacts(){
      return this.contacts.map(contact => {
        contact.visible = contact.name.toLowerCase().includes(this.search.toLowerCase());
        return contact;
      })},

  },

  methods: {
    buildAvatar(avatar) {
      return `img/avatar${avatar}.jpg`;
    },
  
    setCurrentIndex(index) {
      this.currentIndex = index;
    },

    addNewMessage() {
      let newMessageItem = {
        text : this.newMessage,
        status : 'sent',
      }

      if (this.newMessage) {
        this.currentChat.push(newMessageItem);
        this.newMessage = ''

        setTimeout(() => {
          let autoMessage = {
          text : 'Ok',
          status : 'received'
          }
          this.currentChat.push(autoMessage);
        }, 1000);

      }
    },
      
  }
  
}).mount('#root');
  