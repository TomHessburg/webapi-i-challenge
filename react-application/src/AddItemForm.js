import React, { useState } from 'react'

const AddItemForm = props => {

    const [userName, setUserName] = useState("")
    const [bio, setBio] = useState("")

    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                props.addItem({
                    "name": userName,
                    "bio": bio
                })
                setUserName("")
                setBio("")
            }}
        >
          <label>username:</label>
          <input 
          value={userName}
          onChange={e => setUserName(e.target.value)}
          type="text" />

          <label>bio:</label>
          <input 
          value={bio}
          onChange={e => setBio(e.target.value)}
          type="text" />

          <button type="submit">submit</button>
        </form>
    )
}

export default AddItemForm;