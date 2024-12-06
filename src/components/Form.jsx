import { useEffect, useState } from 'react'
import Input from './Input'
import LabelName from './LabelName'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea'
import Heading from './Heading'

export default function Form() {

    const [inputs, setInputs] = useState(() => {
      const storedInputs = localStorage.getItem('inputs');
      return storedInputs ? JSON.parse(storedInputs) : {};
    });


    const handleChange = (event) => {
      const { name, value } = event.target.name;
      setInputs(values => ({...values, [name]: value}))

      
    }


    const Label = {
        label1 : "FULL NAME :",
        label2 : "EMAIL :",
        label3 : "SUBJECT :",
        label4 : "MESSAGE :",
    }

    const{label1, label2, label3, label4} = Label;
   

  return (
    <div className='justify-items-center mx-auto w-96 py-3 mt-10 border-2 bg-white drop-shadow-lg  inset-1 '>
      <Heading />
      <form  >
      <LabelName label={label1}  /> <br />
      <Input name="name" type="text" value={inputs.name} handleInput={handleChange} defaultvalue={inputs.name}  /> <br />
      <LabelName label={label2} /> <br />
      <Input name="email" type="email" value={inputs.email} handleInput={handleChange} defaultvalue={inputs.email}/> <br />
      <LabelName label={label3} /> <br />
      <Input name="subject" type="text" value={inputs.subject} handleInput={handleChange} defaultvalue={inputs.subject}/> <br />
      <LabelName label={label4} /> <br />
      <TextArea name="textarea" value={inputs.textarea} handleTextarea={handleChange} defaultvalue={inputs.textarea}/> <br />

     </form>
    </div>
  )
}
