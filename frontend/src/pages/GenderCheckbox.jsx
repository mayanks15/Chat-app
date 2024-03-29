const GenderCheckbox = ({ handleGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio border-slate-900"
            onChange={()=>{handleGender("male")}}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio border-slate-900"
            onChange={()=>{handleGender("female")}}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
