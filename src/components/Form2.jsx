import { useState, useEffect } from 'react';
import Input from './Input';
import LabelName from './LabelName';
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import Heading from './Heading';

export default function Form2(){
    const [inputs, setInputs] = useState(() => {
        const storedInputs = localStorage.getItem('inputs');
        return storedInputs ? JSON.parse(storedInputs) : {};
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", inputs);
        localStorage.setItem('Details', JSON.stringify(inputs));
        localStorage.setItem('inputs', JSON.stringify(inputs));
        await submitUser();
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("Updated Form Data:", inputs);
        localStorage.setItem('Details', JSON.stringify(inputs));
        localStorage.setItem('inputs', JSON.stringify(inputs));
        await updateUser();
      
    }

    const handlePatch = async (e) => {
        e.preventDefault();
        console.log("Patched Form Data:", inputs);
        localStorage.setItem('Details', JSON.stringify(inputs));
        localStorage.setItem('inputs', JSON.stringify(inputs));
        await updateUser2();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const userId = 251; // Replace with the dynamic ID if applicable
        console.log("Deleting User ID:", userId);
        await deleteUser(userId);
    };
    const handleRemoveItem = () => {
        localStorage.removeItem('inputs'); // Remove the stored data
        setInputs({}); // Reset the form state
        console.log("Local storage data cleared!");
    };

    const handleClear = () => {
        localStorage.clear('inputs'); // Remove the stored data
        setInputs({}); // Reset the form state
        console.log("Local storage data cleared!");
    };

    const submitUser = async () => {
        try { 
         const res = await fetch('https://reqres.in/api/users', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/json',
         },
         body: JSON.stringify(inputs),
     });
     if(!res.ok){
         throw new Error(`Http error! status: ${res.status}`);
     }
     const data = await res.json();
     console.log("User successfully submitted:", data);
 } catch (error) {
     console.error("Error submitting user:", error);
 }

};

const updateUser = async (id) => {
    try { 
     const res = await fetch(`https://reqres.in/api/users/${id}`, {
     method: 'PUT',
     headers: {
     'Content-Type': 'application/json',
     },
     body: JSON.stringify(inputs),
 });
 if(!res.ok){
     throw new Error(`Http error! status: ${res.status}`);
 }
 const data = await res.json();
 console.log("User successfully updated:", data);
} catch (error) {
 console.error("Error updatong user:", error);
}

};


const updateUser2 = async (id) => {
    try { 
     const res = await fetch(`https://reqres.in/api/users/${id}`, {
     method: 'PATCH',
     headers: {
     'Content-Type': 'application/json',
     },
     body: JSON.stringify({
        ...inputs,
        name: inputs.name || "Furdiki"
     }),
 });
 if(!res.ok){
     throw new Error(`Http error! status: ${res.status}`);
 }
 const data = await res.json();
 console.log("User successfully patched:", data);
} catch (error) {
 console.error("Error patching user:", error);
}

};

const deleteUser = async (id) => {
    try {
        const res = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        if (res.status !== 204) throw new Error(`HTTP error! status: ${res.status}`);
        console.log("User successfully deleted");
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};


    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://reqres.in/api/users");
            const data = await res.json();
            console.log('Fetched data', data);
        };

        getData();
    },[]);

    const Label = {
        label1: "FULL NAME :",
        label2: "EMAIL :",
        label3: "SUBJECT :",
        label4: "MESSAGE :",
    };

    const { label1, label2, label3, label4 } = Label;


    return (
        <div className="justify-items-center mx-auto w-96 py-3 mt-10 border-2 bg-white drop-shadow-lg inset-1">
            <Heading />
            <form onSubmit={handleSubmit}>
                <LabelName label={label1} /> <br />
                <Input
                    name="name"
                    type="text"
                    value={inputs.name || ""}
                    handleInput={handleChange}
                /> <br />
                <LabelName label={label2} /> <br />
                <Input
                    name="email"
                    type="email"
                    value={inputs.email || ""}
                    handleInput={handleChange}
                /> <br />
                <LabelName label={label3} /> <br />
                <Input
                    name="subject"
                    type="text"
                    value={inputs.subject || ""}
                    handleInput={handleChange}
                /> <br />
                <LabelName label={label4} /> <br />
                <TextArea
                    name="textarea"
                    value={inputs.textarea || ""}
                    handleTextarea={handleChange}
                /> <br />
                <SubmitButton  />
            </form>
            <button
            type='button'
            className='mt-4 p-3 bg-red-500 text-white rounded'
            onClick={handleRemoveItem}
            >
                Clear Form Data
            </button> <br />

            <button
            type='button'
            className='mt-4 p-3 bg-red-500 text-white rounded'
            onClick={handleClear}
            >
                Clear local storage
            </button> <br />

            <button
            type='button' 
            className='mt-4 p-3 bg-red-500 text-white rounded'
            onClick={handleUpdate}
            >
                Update User
            </button> <br />

            <button
            type='button' 
            className='mt-4 p-3 bg-red-500 text-white rounded'
            onClick={handlePatch}
            >
                Patch
            </button> <br />

            <button
            type='button' 
            className='mt-4 p-3 bg-red-500 text-white rounded'
            onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

