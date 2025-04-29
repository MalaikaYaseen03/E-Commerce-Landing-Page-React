const DropdownBtn = ({ dropdownTitle, dropdownItem1, dropdownItem2 }) => {
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          {dropdownTitle}
        </button>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li>
            <button className="dropdown-item" type="button">
              {dropdownItem1}
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              {dropdownItem2}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownBtn;
