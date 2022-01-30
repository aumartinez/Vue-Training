//Templates.js

const submissionComponent = {
  template: `
    <div class="wrapper">
      <figure class="media-left">
        <img class="image is-64x64" 
        v-bind:src="item.submissionImage" />
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a href="#" class="has-text-info">{{item.title}}</a>
              <span class="tag is-small">#{{item.id}}</span>
            </strong>
            <br />
              {{item.description}}
            <br />
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24" 
              v-bind:src="item.avatar" />
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span 
        v-on:click="upvote(item.id), orderchange(item.id)"
        class="icon is-small">
        <i class="fa fa-chevron-up"></i>
        <strong class="has-text-info">{{item.votes}}</strong>
        </span>
      </div>
    </div>
  `,
  props: ['item', 'submissions'],
  methods: {
    upvote: function(submissionId){
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
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
  },
};