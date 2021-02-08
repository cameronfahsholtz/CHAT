
import {useState} from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Messages';
import NamePicker from './NamePicker';
import {db, useDB} from './db'

function App() {
  const messages = useDB()
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  )

  return <div className="App">

    <header className="header">
      <div className="logo" />
      CHATTER
      <NamePicker
        saveName={setUsername}
      />
    </header>

    <main className="messages">
        {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
    </main>

    <TextInput
      send={(t)=> db.send({text:t, name:username, date: new Date()})}
    />

  </div>
}
export default App;
