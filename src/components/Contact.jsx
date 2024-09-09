import { FaPhone, FaUser } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";

import { deleteContact } from "../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={styles.item}>
        <div>
          <p>
            <FaUser style={{ marginRight: "10px" }} />
            {name}
          </p>

          <p>
            <FaPhone style={{ marginRight: "10px" }} />
            {number}
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
