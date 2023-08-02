import { MdTask } from 'react-icons/md'
import { FaCog, FaLightbulb, FaQuestion } from 'react-icons/fa'

export const getIconByCategory = (category: string): React.ReactNode => {
  switch(category) {
    case "Task":
      return (<MdTask size={24} className={'text-light-300'}/>)
    case "Random Thought":
      return <FaCog size={24} className={'text-light-300'}/>
    case "Idea":
      return <FaLightbulb size={24} className={'text-light-300'}/>
    default:
      return <FaQuestion size={24} className={'text-light-300'}/>
  }
}