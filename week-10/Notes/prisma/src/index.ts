import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string ){
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        },
        select :{ 
            firstName: true,
            lastName: true
        }
    })
    console.log(res);   // output: { firstName: 'Shivam', lastName: 'Kumar' }
}

async function updateUser(email: string, firstName: string, lastName: string ){
    const res = await prisma.user.update({
        where: { email },
        data: { firstName, lastName }
    })
    console.log(res);

}

// insertUser("shivam@gmail.com", "password", "Shivam", "Kumar");
updateUser("shivam@gmail.com", "Shivam2", "Kumar2");