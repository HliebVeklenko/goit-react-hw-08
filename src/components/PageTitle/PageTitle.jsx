import css from "./PageTitle.module.css";

function PageTitle({ children }) {
  return <h2 className={css.title}>{children}</h2>;
}

export default PageTitle;
