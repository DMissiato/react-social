
import { useState, useEffect } from 'react';
import { http } from   './../../libs/http';
import MessagePreview from '../../components/MessagePreview';
import styles from './Messages.module.scss';

const Messages = () =>
{
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        http('/messages').then((data) => setMessages(data));
    }, []);

    return (
        <div className={styles.Messages}>
            <aside>
                {messages.map((message, index) => (
                    <MessagePreview key={index} data={message} />
                ))}
            </aside>
        </div>
    );
};

export default Messages;