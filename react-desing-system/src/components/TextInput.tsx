import { Slot } from "@radix-ui/react-slot";
import React, { InputHTMLAttributes } from "react";

export interface TextInputRootProps{
  children: React.ReactNode
}

function TextInputRoot({children}:TextInputRootProps){
  return(
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300 hover:ring-2 ">
      {children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
  children: React.ReactNode,
}

function TextInputIcon({children}:TextInputIconProps){
  return(
    <Slot className="w-6 h-6 text-gray-400 " >
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps  extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps) {


  return (
    <input  className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none " {...props}/>

)
}
TextInputInput.displayName = 'TextInput.TextInputInput'


export const TextInput={
  Root:TextInputRoot,
  Input: TextInputInput,
  Icon:TextInputIcon
} 
