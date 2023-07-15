export type IUseIntervalValue<T> = [
    internalValue: T,
    setInternalValue: React.Dispatch<React.SetStateAction<T>>
];