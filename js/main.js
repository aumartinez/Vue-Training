//Main.js

new Vue({
  el: '#app',
  data: {
    submissions: submissions,
  },
  computed: {
    sortedSubmissions(){
      return this.submissions.sort((a,b) => {
        return b.votes - a.votes;
      });
    }
  }
});