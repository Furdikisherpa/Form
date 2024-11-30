import { useState } from 'react'
import Input from './Input'
import LabelName from './LabelName'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea'
import Heading from './Heading'

export default function Form() {

    const [inputs, setInputs] = useState('');


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
    }

    

    const Label = {
        label1 : "Full Name",
        label2 : "Email",
        label3 : "Subject",
        label4 : "Message",
    }

    const{label1, label2, label3, label4} = Label;
   

  return (
    <div className='w-60 mx-auto '>
      <Heading />
      <form onSubmit={handleSubmit} >
      <LabelName label={label1}  /> <br />
      <Input name="name" type="text" value={inputs.name} handleInput={handleChange} /> <br />
      <LabelName label={label2} /> <br />
      <Input name="email" type="email" value={inputs.email} handleInput={handleChange} /> <br />
      <LabelName label={label3} /> <br />
      <Input name="subject" type="text" value={inputs.subject} handleInput={handleChange} /> <br />
      <LabelName label={label4} /> <br />
      <TextArea name="textarea" value={inputs.textarea} handleTextarea={handleChange} /> <br />
      <SubmitButton />
     </form>
    </div>
  )
}
