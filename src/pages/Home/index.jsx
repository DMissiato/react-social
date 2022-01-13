
import { useState, useEffect, Suspense, lazy } from "react";
import { http } from "./../../libs/http";
import styles from "./Home.module.scss";

const FriendPreview = lazy(() => import(/* webpackChunkName: "friendpreview" */ '../../components/FriendPreview'));
const MessagePreview = lazy(() => import(/* webpackChunkName: "messagepreview" */ '../../components/MessagePreview'));
const Post = lazy(() => import(/* webpackChunkName: "post" */ '../../components/Post'));


const friends = [];

const messages = [];

const posts = [];

const Home = () => {
  const [friendsPreview, setFriendsPreview] = useState(friends);
  const [allPosts, setAllPosts] = useState(posts);
  const [messagesPreview, setMessagesPreview] = useState(messages);

  
  useEffect(() => {

    http("/friends?_limit=4").then((data) => setFriendsPreview(data));
    http("/messages?_limit=4").then((data) => setMessagesPreview(data));
    http("/posts").then((data) => setAllPosts(data));

    // Promise.all([
    //   http("/friends?_limit=4"),
    //   http("/messages?_limit=4"),
    //   http("/posts")
    // ]).then((data) => console.log(data[0]))
  }, []);

  return (
    <section className={styles.home}>
      <h3>Bevenuto utente</h3>
      <div className={styles.grid}>
        <Suspense fallback={<div>Loading...</div>}>
          <aside>
            {friendsPreview.map((friend, index) => (
              
                <FriendPreview key={index} data={friend} />
              
            ))}
          </aside>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            {allPosts.reverse().map((post, index) => (
                <Post key={index} data={post} />
            ))}
          </main>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <aside>
            {messagesPreview.map((message, index) => (
                <MessagePreview key={index} data={message} />
                ))}
          </aside>
        </Suspense>
      </div>
    </section>
  );
};

export default Home;