export default function DateInput({
  labelDescription = 'Digite o nome: ',
  inputValue = '',
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="mb-1" htmlFor="inputName">
        {labelDescription}
      </label>
      <input
        autoFocus
        className="p-1 border "
        id="inputName"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
