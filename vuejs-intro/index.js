const app = Vue.createApp({
  data() {
    return {
      login: 'hemershon',
      bio: '----',
      company: 'ACME inc',
      avatar_url: 'https://unsplash.it/256',
      searchInput: ''
    }
  }, 
  methods: {
    async featchGithubUser() {
      const res = await fetch('https://api.github.com/users/${this.searchInput}')
      const { login, name, bio, company, avatar_url } = await res.json()

      this.login = login 
      this.name = name
      this.bio = bio
      this.company = company
      this.avatar_url = avatar_url
    }
  }
})

app.mount('#app')