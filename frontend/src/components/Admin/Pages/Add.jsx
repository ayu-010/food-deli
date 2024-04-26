import React from 'react'
import { assets } from '../Assest/assets'


const Add = () => {
  return (
    // form banana h yeha pe taaki asdd kar sake
    <div>
        <form>
            <div>
                <p>upload image</p>
                <label htmlFor='image'>
                    <img src={assets.upload_area}></img>
                </label>
                <input type='file'></input>
            </div>
            <div>

                <p>product name</p>
                <input type='text' name='name' placeholder='Type here'></input>
            </div>
            <div>
                <p>product description</p>
                <textarea  name='description' rows='6' 
                placeholder='write content here' required></textarea>
            </div>
            <div>
                <div>
                    <p>product catgory</p>
                    <select name='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="sandwich">sandwich</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Cake">Cake</option>
                        <option value="Pureveg">Pureveg</option>
                        <option value="Paasta">Paasta</option>
                        <option value="Noddles">Noddles</option>
                    </select>
                </div>
                <div><p>Product price</p></div>
                <input type='Number' placeholder='$20'></input>
            </div>
            <button type='Submit'>ADD</button>
        </form>
    </div>
  )
}

export default Add