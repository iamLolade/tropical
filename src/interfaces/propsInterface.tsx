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
    handleSubmit: (e: React.FormEvent) => Promise<void>
}

export interface MainProps {
    resolvedData: Data[],
    handleFetch:()=> Promise<void>,
    data: Data,
    handleDelete:(id:string)=>Promise<void>,
    isClicked: boolean
}