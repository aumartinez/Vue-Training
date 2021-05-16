let data = {
  items: [
  {text: 'Bananas', checked: true},
  {text: 'Apples', checked: false}
  ],
  title: 'My Shopping List',
  newItem: ''
};

new Vue({
  el: '#app',
  data: data,
  methods:{
    addItem: function(evt){
      evt.preventDefault();
      let addedItem;
      
      addedItem = this.newItem.trim();
      
      if (addedItem) {
        this.items.push({
          text: addedItem,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
});