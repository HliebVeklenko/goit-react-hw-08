import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

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
