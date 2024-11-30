
export default function TextArea( { name, value, handleTextarea}) {
  return (
    <div className="border-b-2 border-b-black">
      <textarea name={name} value={value} onChange={handleTextarea} spellCheck={false} rows="3" cols="30"></textarea> <br />
    </div>
  )
}
