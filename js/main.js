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
  methods: {
    upvote: function(submissionId){
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
    },
    maxvote: function(){     
     return Math.max(...this.submissions.map(o => o.votes));     
    },
    orderchange: function(submissionId){
      const currentIndex = this.submissions.map(i => i.id).indexOf(submissionId);
      const prevIndex = currentIndex - 1;

      this.submissions.forEach(o => o.change = false);

      if (currentIndex > 0) {

        let prevVote = this.submissions[prevIndex].votes;
        let currVote = this.submissions[currentIndex].votes;

        if (currVote > prevVote) { 
          this.submissions[currentIndex].change = true;          
        }
      }
    }
  }
});