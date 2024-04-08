import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handlerChange = (el) => {
    dispatch(changeFilter(el.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" value={value} onChange={handlerChange} />
    </label>
  );
}

export default SearchBox;
