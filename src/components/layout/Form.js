export const LabelAndInput = ({
    label,
    inputType,
    inputName,
    handleChange,
    value,
  }) => {
    return (
      <div className="flex flex-col mb-2">
        <label htmlFor="name">{label}</label>
        <Input
          inputType={inputType}
          inputName={inputName}
          handleChange={handleChange}
          value={value}
        />
      </div>
    )
  }

  export const Input = ({
    inputType,
    inputName,
    handleChange,
    value,
    placeHolder,
    extraClasses
  }) => {
    const classes = "px-3 py-2 border-gray-200 border-2 rounded " + extraClasses

    return (
      <input
        className={classes}
        type={inputType}
        name={inputName}
        id={inputName}
        onChange={handleChange}
        value={value}
        placeholder={placeHolder}
      />
    )
  }