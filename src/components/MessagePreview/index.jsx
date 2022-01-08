
import styles from "./MessagePreview.module.scss";
import { formatDateAgo } from "../../libs/utils";

const MessagePreview = (props) => {
  const data = props.data || {
    text: "lorem ipsum",
    date: new Date(),
    sender: "User",
  };

  return (
    <div className={styles.message}>
      <h5>{data.sender}</h5>
      <p>
        <small>
          {formatDateAgo(data.date)}
        </small>
      </p>
      <p>{data.text}</p>
    </div>
  );
};

export default MessagePreview;