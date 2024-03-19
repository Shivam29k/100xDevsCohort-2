import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any){
  if(c.req.header("Authorization")){
    // Validation
    await next()
  } else {
    return c.text("You don't have the authorization.")
  }
} 

// app.use(authMiddleware);   // How to use middleware in hone

app.get('/', (c) => {
  return c.text('Hello Hono!')
  
})

app.get('/hello', authMiddleware, async (c)=>{
  const body = await c.req.json();  // json() is a async function
  const header = c.req.header("Authorization");  // How to get header from a request in hono
  const query = c.req.query("param");  // How to get a query passed in url from a request in hono

  console.log(body);
  console.log(header);
  console.log(query);

  return c.json({
    body: body, header: {Authorization: header}, query: {param: query}
  })
})

export default app
