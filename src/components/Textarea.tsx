import React, { ChangeEvent, useRef, useEffect, useCallback, useState,} from 'react';
import { useField } from '@unform/core';

import styles from '../styles/components/input.module.scss'

interface Props {
    name: string;
    label: string;
    type?: string;
}


export default function Textarea({ name, label, ...rest }: Props) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
            ref.setInputValue(value);
            },
            clearValue(ref: any) {
            ref.setInputValue('');
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            <div className={styles.inputContainer}>
                <label htmlFor="name">{label}</label>
                <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
            </div>
        </>
    );
};