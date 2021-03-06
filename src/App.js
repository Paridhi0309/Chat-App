import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
        height="100vh"
        projectID="19f95b45-6a13-438c-a39f-4d4f61c621ae"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
