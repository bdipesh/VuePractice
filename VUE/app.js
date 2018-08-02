var app = new Vue({
  el:'#first',
  data:{
    message: 'You loaded' + new Date().toLocaleString()
  }
});
var app2 = new Vue({
  el:'#second',
  data:{
    seen: true
  }
});
var app3 = new Vue({
  el:'#third',
  data:{
    todos:[
      {text:'Learn js'},
      {text: 'Learn Vue'},
      {text: 'Build something new'}
    ]
  }
});
var app4 =  new Vue({
  el:'#four',
  data:{
    message:'you are awesome'
  },
  methods:{
    reverseMessage:()=>{
      this.message = this.message.split('').reverse().join('');
    }
  }
});
