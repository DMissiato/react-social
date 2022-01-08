import { useEffect, useState } from 'react';
import { httpPOST } from '../../libs/http';

import styles from './CreatePost.module.scss';

const CreatePost = (title) =>
{
    const [authorInput, setAuthorInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [formPostObj, setFormPostObj] = useState({});

    const handleSendBtn = (event) => 
    {
        event.preventDefault();
        httpPOST('/posts', formPostObj);
        alert('Il post è stato creato con successo!');
    };

    useEffect(() => 
    {
        setFormPostObj(
            {
                author: authorInput,
                text: messageInput,
                date: new Date().toISOString(),
                photo: imgInput
            }
        );
    }, [authorInput, imgInput, messageInput]);

    return (
        <div className={styles.createPost}>
            <form>
                <div className={styles.__author}>

                    <input 
                        value={authorInput}
                        onChange={(e) => setAuthorInput(e.target.value)}
                        name="author" 
                        id="author" 
                        type="text" 
                        placeholder='Author' 
                        required
                    />
                    <input 
                        value={imgInput} 
                        onChange={(e) => setImgInput(e.target.value)}
                        name="img" 
                        id="img" 
                        type="text" 
                        placeholder='Img URL' 
                    />
                    
                    <button type="submit" onClick={handleSendBtn}>
                        SEND
                    </button>
                </div>

                <textarea 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10" 
                    placeholder='Messagge' 
                    required
                >    
                </textarea>
                
                <button type="button" onClick={() => console.log(formPostObj)}>Debug</button>

            </form>
        </div>
    );
}

export default CreatePost;