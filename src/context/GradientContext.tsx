import * as React from 'react';

import { createContext } from "react";
import {useState} from 'react';

interface ImageColors{
    primary:string;
    secundary:string
}

interface ContextProps {
    colors:ImageColors,
    prevColors: ImageColors,
    setMainColors: (colores: ImageColors) => void,
    setPrevMainColors: (colores: ImageColors) => void,
}

export const GradientContext = createContext({} as ContextProps) 

export const GradientProvider  = ({children}:any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary:'transparent',
        secundary:'transparent'
    })
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary:'transparent',
        secundary:'transparent'
    })

    const setMainColors = ( colores:ImageColors) => {
        setColors(colores)
    }
    const setPrevMainColors = ( colores:ImageColors) => {
        setPrevColors(colores)
    }


    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}