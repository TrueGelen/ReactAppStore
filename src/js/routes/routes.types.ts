import type { ComponentType } from 'react'
export type TRout = {
	name: string;
	url: string;
	container: ComponentType
	exact: boolean
}

export type TRoutMap = {
	[key: string]: string
}