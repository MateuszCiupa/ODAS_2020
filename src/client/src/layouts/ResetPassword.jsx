import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import useStyles from 'assets/useStyles';

export default () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (email) {
            const response = await fetch('/api/email/reset/password', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        } else {
            console.log('No email provided!');
        }
    };

    return (
        <Paper className={classes.paper} square>
            <Typography component="h1" variant="h5">
                Reset password
            </Typography>

            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.text_field}
                    required
                    label="Email"
                    margin="normal"
                    autoFocus
                    onChange={e => setEmail(e.target.value)}
                />
                
                <div className={classes.weird_buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send request
                    </Button>
                </div>
            </form>
        </Paper>
    );
};
