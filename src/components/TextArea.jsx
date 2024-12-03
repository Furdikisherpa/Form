
export default function TextArea( { name, value, handleTextarea, defaultvalue}) {
  return (
    <div>
      <textarea defaultValue={defaultvalue} name={name} value={value} onChange={handleTextarea} spellCheck={false} rows="3" cols="42" className="border-b-2"></textarea> <br />
    </div>
  )
}
