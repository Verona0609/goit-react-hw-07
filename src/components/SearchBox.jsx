import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange= (e)=>{
    dispatch(changeFilter(e.target.value))
  }
  return (
    <>
      <label htmlFor="findContact">
        Find contact by name
        <input
          className={styles.input}
          name="findContact"
          type="text"
          placeholder="Rosie Simpson"
          value={filter}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default SearchBox;
