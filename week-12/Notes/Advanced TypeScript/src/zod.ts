import { z } from 'zod';
import exrepss from 'express';


const app = exrepss();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email' }),
    age: z.number().int().positive({ message: 'Invalid age' }),
});

type userProfileType = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);

    const updateBody: userProfileType = req.body;

    if (success) {
        // Update the user profile
    } else {
        // Return the validation error
        res.status(400).json({ error: "Use Valid Inputs" });
    }
})