import type { ComponentType } from 'react';
export declare type TRout = {
    name: string;
    url: string;
    container: ComponentType;
    exact: boolean;
};
export declare type TRoutMap = {
    [key: string]: string;
};
