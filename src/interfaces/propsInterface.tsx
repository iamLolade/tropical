import React from "react";

export interface Data {
    fruit: string
}

export interface RetrieveData {
    _id: string,
    fruit: string,
    count: number
}

export type FetchedData = RetrieveData[]

export interface HeaderProps {
    data:Data,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=> void,
    handleSubmit: (e:React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export interface MainProps {
    resolvedData: Data[],
    handleFetch:()=> Promise<void>,
    data: Data
}