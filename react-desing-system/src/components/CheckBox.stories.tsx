import {CheckBox , CheckBoxProps} from './CheckBox'
import {Meta, StoryObj} from '@storybook/react'
import { Text } from './Text'

export default {
  title:'Components/CheckBox',
  component:CheckBox,
  args:{

  },
  decorators:[
    (texStory) => {
      return(
        <div className='flex items-center gap-2'>
          {texStory()}
          <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
 
} as Meta<CheckBoxProps>


export const CustomComponent : StoryObj<CheckBoxProps> = {}