import React, {useEffect , useState , useRef} from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import axios from 'axios';


import { useAuth } from '../contexts/AuthContext'

const Chats = () => {
    const history = useHistory();
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);
    
    const handleLogout =  async () => {
        await auth.signOut();

        history.push('/');
    }

    // handle image
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob(); 

        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
    }

    useEffect(() => {
        if(!user){
            history.push('/');
            return;
        }
axios.get('https://api.chatengine.io/users/me',{
headers: { 
    "project-id": "915b9e42-b291-484e-82fa-ffffd0bddc33",
    "user-name" : user.email,
    "user-secret" : user.uid, }
})
.then(()=>{
    setLoading(false)
})
.catch(()=> {
    let formdata = new FormData();
    formdata.append('email', user.email);
    formdata.append('username' , user.email);
    formdata.append('secret', user.uid);

    getFile(user.photoURL)
    .then((avatar) => {
        formdata.append('avatar',avatar, avatar.name);

        axios.post('https://api.chatengine.io/users', 
        formdata,
        {headers : { "private-key": "afa693e1-9ea5-4a5e-9d84-a15de21ec700" }})
        .then(()=> setLoading(false))
        .catch((error) => console.log(error))
    })
})
    },[user, history]

    );

    // if(!user || loading) return 'loading..'
  return (
   <div className='chats-page'>
    <div className='nav-bar'>
        <div className='logo-tab'>
            Dirgho Batra
        </div>
        <div onClick={handleLogout} className='logout-tab'>
Logout
        </div>
    </div>

    <ChatEngine
        height="calc(100vh - 66px)"
        projectID="915b9e42-b291-484e-82fa-ffffd0bddc33"
        userName={user.email}
        userSecret={user.uid}
    />
   </div>
  )
}

export default Chats