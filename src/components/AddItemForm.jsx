// components/AddItemForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemtodb } from '../store/apiservice.js';
import {addItem} from "../store/item.js"

function AddItemForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ name: '', category: '', note: '', image: '' })
  const { name, category, note, image } = input;

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItemData = { name, category, note, image };
    console.log(newItemData);
    dispatch(addItem(newItemData))
    try {
      await addItemtodb(newItemData);
      // Clear form fields
      setInput({ name: '', category: '', note: '', image: '' });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=' h-full m-4 p-2 flex-col flex gap-5'>
      <span className='flex flex-col'>
        {/* <label htmlFor="" className='text-base '>Name</label> */}
        <input type="text" id='Name' name='name'   className='border-2  focus:border-orange-500 focus:outline-none focus:ring focus:ring-orange-200 rounded-md my-2 p-2  placeholder:text-slate-400 placceholder:text-lg' placeholder='Name of Item' required value={name} onChange={(e) => handleChange(e)} />
      </span>
      <span className='flex flex-col' >
        <input type="text" id=''  name='category'  className='border-2    focus:border-orange-500 focus:outline-none focus:ring focus:ring-orange-200 rounded-md my-2 p-2  placeholder:text-slate-400 placceholder:text-lg' placeholder="Category" required value={category} onChange={(e) => handleChange(e)} />
      </span>
      <span className='flex flex-col' >
        <textarea  id="notes" name='note'   className='border-2   focus:border-orange-500 focus:outline-none focus:ring focus:ring-orange-200 rounded-md my-2 p-2  placeholder:text-slate-400 placceholder:text-lg' placeholder="Write note about your items ..." value={note} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
      </span>
      <span className='flex flex-col' >
        <input type="text" id='' name='image'   className='border-2   focus:border-orange-500 focus:outline-none focus:ring focus:ring-orange-200 rounded-md my-2 p-2  placeholder:text-slate-400 placceholder:text-lg' placeholder="Image url" value={image} onChange={(e) => handleChange(e)}  />
      </span>
      <div className='flex justify-center gap-5 mt-5'>
        <button type="submit" className=' border-2 px-8 py-2 rounded-md opacity-80'>Cancel</button>
        <button type="submit" className=' border-2 px-8 py-2 rounded-md bg-orange-500 opacity-80 text-white'>Add Item</button>
      </div>
    </form>
  );
}

export default AddItemForm;
