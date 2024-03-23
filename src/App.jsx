import { useState ,useCallback } from 'react'
import { setFlagsFromString } from 'v8';


function App() {
  const [length,setLength]= useState(18);
  const [character,setcharacter]= useState(false);
  const [number,setnumber]= useState(false);
  const [password,setpassword] = useState("");

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="abcdfghijkalmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTUVWXYZ";

    if(number) str+='1234567890'
    if(character) str+='@#$%^*()?/\{}]['

    for(let i =0;i<=str.length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass= str.charAt(char);

    }

    setpassword(pass)
  },[length,character,number,setpassword])

  

  return (
    <>
    <div className='w-50 shadow-md rounded-lg text-orange-500 px-4  my-10  max-w-md mx-auto bg-zinc-800 text-oorange-500'>
    <h1 className='text-white text-center m-5'>password generator</h1>

     <div className='flex overflow-hidden mb-4 shadow rounded-md'>
     <input
     className='w-full py-1 px-3  m-10 outline-none text-black '
     placeholder='password'
     readOnly
     value={password}
   type='text'

     />
  <button className='outline-none bg-blue-700 shrink-0 px-3 py-0.5 '>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
          type='range'
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)

          }}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex item-center gap-x-1'>
      <input 
        type='checkbox'
        defaultChecked={number}
        id='numberInput'
        onChange={()=>{
          setnumber((prev)=>!prev);

        }}
       
      />
      <label htmlFor='numberInput'>NUmbers</label>
      </div>
      <div>
      <input 
        type='checkbox'
        defaultChecked={character}
        id='numberInput'
        onChange={()=>{
          setnumber((prev)=>!prev);

        }}
       
      />
      <label htmlFor='numberInput'>character</label>
      </div>

      </div>
    
    
    </div>
    </>
  )
  }

export default App
