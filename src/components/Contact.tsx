import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Contact() {
    // Form State
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    // Error State for Validation
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    // Snackbar Notification State
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState<'success' | 'error'>('success');

    const form = useRef<HTMLFormElement>(null);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        // 1. Validate fields are not empty
        const isNameEmpty = name === '';
        const isEmailEmpty = email === '';
        const isMessageEmpty = message === '';

        setNameError(isNameEmpty);
        setEmailError(isEmailEmpty);
        setMessageError(isMessageEmpty);

        // 2. Only proceed if all fields are filled
        if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {

            /** * IMPORTANT: Replace these placeholders with your actual keys
             * from the EmailJS Dashboard.
             */
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

            const templateParams = {
                name: name,
                email: email,
                message: message,
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(() => {
                    setStatus('success');
                    setOpen(true);
                    // Clear form on success
                    setName('');
                    setEmail('');
                    setMessage('');
                }, (error) => {
                    console.error('EmailJS Error:', error);
                    setStatus('error');
                    setOpen(true);
                });
        }
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

                    <Box
                        ref={form}
                        component="form"
                        noValidate
                        autoComplete="off"
                        className='contact-form'
                    >
                        <div className='form-flex'>
                            <TextField
                                required
                                id="outlined-required-name"
                                label="Your Name"
                                placeholder="What's your name?"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameError}
                                helperText={nameError ? "Please enter your name" : ""}
                            />
                            <TextField
                                required
                                id="outlined-required-email"
                                label="Email / Phone"
                                placeholder="How can I reach you?"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? "Please enter your email or phone number" : ""}
                            />
                        </div>
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Message"
                            placeholder="Send me any inquiries or questions"
                            multiline
                            rows={10}
                            className="body-form"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            error={messageError}
                            helperText={messageError ? "Please enter the message" : ""}
                        />
                        <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                            Send
                        </Button>
                    </Box>

                    {/* Toast Notification for Success/Error */}
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
                            {status === 'success'
                                ? 'Message sent successfully!'
                                : 'Failed to send message. Please check your console for details.'}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    );
}

export default Contact;