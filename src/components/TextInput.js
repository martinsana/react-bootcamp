export default function TextInput({
  labelDescription = 'Digite o nome: ',
  inputValue = 'Digite o nome:',
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col">
      <label className="mb-1" htmlFor="inputName">
        {labelDescription}
      </label>
      <input
        autoFocus
        className="p-1 border "
        id="inputName"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
