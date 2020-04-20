/* eslint-disable @typescript-eslint/no-explicit-any */
export type Action = { type: string; data: any }
export type Dispatch = (action: any) => void;