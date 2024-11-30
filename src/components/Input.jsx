
export default function Input({name, type, value,  handleInput}) {

  return (
    <div className="border-b-2 border-b-black w-60 ">
       <input
            name={name}
            type={type}
            value={value}
            onChange={handleInput}
          />
    </div>
  )
}
