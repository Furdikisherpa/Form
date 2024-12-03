
export default function Input({name, type, value,  handleInput}) {

  return (
    <div>
       <input
            name={name}
            type={type}
            value={value || ""}
            onChange={handleInput}
            className="w-80 border-b-2"
           
          />
    </div>
  )
}
