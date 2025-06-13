'use client';

import { useState } from "react";
import { Input, Field, Label, Textarea } from '@headlessui/react'
import Button from "./button";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="font-montserrat mx-6 lg:mx-8">
            <div className="text-black-strong">
                <Field className="form-fields">
                    <Label className="form-font">Full Name</Label>
                    <Input placeholder="your name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={"form-inputs form-font"}/>
                </Field>
                <Field className="form-fields">
                    <Label className="form-font">Phone Number</Label>
                    <Input placeholder="your phone number" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={"form-inputs form-font"}/>
                </Field>
                <Field className="form-fields">
                    <Label className="form-font">Email</Label>
                    <Input placeholder="your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={"form-inputs form-font"}/>
                </Field>
                <Field className="form-fields">
                    <Label className="form-font">Tell Us More</Label>
                    <Textarea placeholder="write your inquiry..." type="text" value={description} onChange={(e) => setDescription(e.target.value)} className={"form-inputs form-font w-full h-64"}></Textarea>
                </Field>
            </div>

            <div className='mt-10 flex items-end'>
                <Button content={"Submit"} textColor={'#ffffff'} bgColor={'#045fd0'}/>
            </div>
        </form>
    )
}

export default ContactForm;