const DropdownBtn = ({ label, sortingOptions, value, onChange }) => {
  // return (
  //   <>
  //     <div className="btn-group">
  //       <button
  //         type="button"
  //         className="btn btn-secondary dropdown-toggle"
  //         data-bs-toggle="dropdown"
  //         data-bs-display="static"
  //         aria-expanded="false"
  //       >
  //         {dropdownTitle}
  //       </button>
  //       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
  //         {dropdownItems?.map((index, dropdownItem) => (
  //           <li key={index}>
  //             <button className="dropdown-item" type="button">
  //               {dropdownItem}
  //             </button>
  //           </li>
  //         ))}

  //         {/* <li>
  //           <button className="dropdown-item" type="button">
  //             {dropdownItem2}
  //           </button>
  //         </li> */}
  //       </ul>
  //     </div>
  //   </>
  // );
  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {sortingOptions?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownBtn;
