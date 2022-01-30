//Main.js

new Vue({
  el: '#app',
  data: {
    submissions: submissions,
    change: false,
  },  
  computed: {
    sortedSubmissions: function(){
      return this.submissions.sort((a,b) => {
        return b.votes - a.votes;
      });
    }
  },  
  components: {
    'submission-component': submissionComponent,
  },
  methods: {
    maxvote: function(){     
     return Math.max(...this.submissions.map(o => o.votes));     
    },
  }
});
         