import {ISimpson} from "../../models/ISimpson.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: ISimpson,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-2 size-4/5'>
            <h3 className='text-2xl font-bold text-center my-5'>{item.name} {item.surname}, age {item.age}</h3>
            <p className='text-2xl text-justify px-3'>{children}</p>
            <img src={item.photo} alt={item.info}/>
        </div>
    )

}