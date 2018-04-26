<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div v-if="loggedIn==false">
    Enter you name: <input type="text" v-model="name" />
    <button type="button" v-on:click="login(name)">Login</button>
    </div>
    <div v-else>
    <div v-if="showList">
    <h3>User List</h3>
    <center>
    <table v-if="users.length" border="1">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Email</th>
        <th>Active</th>
        <th>Delete</th>
      </tr>
      <tr v-for="user in users">
      <td>{{user.firstname}}</td>
      <td>{{user.lastname}}</td>
      <td>{{user.age}}</td>
      <td>{{user.email}}</td>
      <td>{{user.isActive}}</td>
      <td><button v-on:click="deleteUser(user)">Delete</button></td>
      </tr>
    </table>
    <div v-else>No Users Found!!</div>
    <button type="button" v-on:click="showList = false">Add</button>
    </center>
    </div>
    <div v-else>
    <h3>Add User</h3>
      <form v-on:submit="addUser">
        <input type="textbox" placeholder="First Name" v-model="userObj.firstname"/><br/>
        <input type="textbox" placeholder="Last Name" v-model="userObj.lastname"/><br/>
        <input type="textbox" placeholder="Age" v-model="userObj.age"/><br/>
        <input type="textbox" placeholder="Email" v-model="userObj.email"/><br/><br/>
        <button type="submit">Submit</button>
        <button type="button" v-on:click="showList = true">Cancel</button>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      default: 'Welcome to My Vue.js App'
    }
  },
  data () {
    return {
      loggedIn: false,
      showList: true,
      name: '',
      userObj: {
        firstName: '',
        lastname: '',
        age: '',
        email: ''
      },
      users: [{
        username: 'suri',
        firstname: 'Surjeet',
        lastname: 'Bhadauriya',
        age: 21,
        email: 'sbsurjeet66@gmail.com',
        isActive: true
      }]
    }
  },
  methods: {
    login: function (name) {
      if (name.length > 2) {
        this.loggedIn = true
        alert('Logged in Successfull')
      } else {
        this.loggedIn = false
        alert('Invalid username')
      }
      this.name = ''
    },
    addUser: function (e) {
      this.userObj.isActive = true
      this.users.push(this.userObj)
      this.showList = true
      e.preventDefault()
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created: function () {
    console.log('Just Created')
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      console.log(response.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
