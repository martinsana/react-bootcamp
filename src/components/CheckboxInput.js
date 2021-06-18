export default function CheckboxInput({
  labelDescription = 'Descrição do label',
  inputValue = '',
  onCheckboxChange = null,
  id = 'id_input_checkbox',
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }
  return (
    <div className="flex flex-row items-center space-x-2 my-4">
      <input
        autoFocus={autoFocus}
        className="p-1 border "
        id={id}
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label className="mb-1" htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}
