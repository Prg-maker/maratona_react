import React, { InputHTMLAttributes } from "react";
import {clsx} from 'clsx'


export interface TextInputRootProps{
  children: React.ReactNode
}

function TextInputRoot({children}:TextInputRootProps){
  return(
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300 hover:ring-2 ">
      {children}
    </div>
  )
}


/*function TextInputIcon(){
  return()

}*/


export interface TextInputInputProps  extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps) {


  return (
    <input  className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none " {...props}/>

)
}

export const TextInput={
  Root:TextInputRoot,
  Input: TextInputInput,

} 
