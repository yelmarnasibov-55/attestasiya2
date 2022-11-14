class Message {
    constructor(author, time, text) {
      this.author = author;
      this.time = time;
      this.text = text;
    }
  
    toString() {
      console.log(`${this.time} ${this.author}: ${this.text}`)
    }
  }
  
  class Messenger {
    constructor() {
      this.history = [];
    }
  
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  
    send(author, text) {
      this.history.push(new Message(author, this.gettime(), text));
    }
  
    show_history() {  
      this.history.forEach(el=> el.toString())
    }
  }
  
  
  let messenger = new Messenger()
  messenger.send('Yelmar', 'first message')
  messenger.send('Samir', 'second message')
  messenger.send("Mammad","hello world!")
  messenger.show_history()
