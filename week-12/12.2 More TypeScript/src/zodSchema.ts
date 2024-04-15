import { z } from 'zod';
import express from 'express';

const app = express();


const userProfileSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email' }),
    age: z.number().min(18, { message: 'Age must be greater than 18' }).optional(),
})

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put('/user', (req, res) => {
    const success = userProfileSchema.safeParse(req.body);
    const updatebody: FinalUserSchema = req.body;

    if (success.success) {
        res.send('User updated successfully');
    } else {
        res.status(400).send(success.error.errors);
    }
})