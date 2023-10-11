function CustomTextInput(props) {
    // textInput debe estar declarado aquí para que la ref pueda hacer referencia a este
    let textInput = useRef(null);
  
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
  }

export default CustomTextInput