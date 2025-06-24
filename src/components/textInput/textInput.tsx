import './textInput.scss';

interface TextInputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeHolder: string;
  error: string
}

const TextInput = (props: TextInputProps) => {
  return (
    <div className="textInput">
      <label htmlFor={props.id}>Full Name</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
        placeholder={props.placeHolder}
      />
      {props.error && (
        <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px' }}>
          {props.error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
