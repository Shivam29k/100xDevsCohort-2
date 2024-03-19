# AWS SETUP
1) After spinning up an instance we will create a SSh key that will allow us to connect to the remote desktop cli
That ssh key will be of `.pem` type
2) Now if to access the terminal we first need to change the permissions of `.pem` file

### How to change the permissions of a file
(permission to access `filename.pep` should only be with the owner or else aws will refuse to connect)

For Windows - https://stackoverflow.com/questions/64687271/how-to-avoid-permission-denied-publickey-ssh-key-windows

For linux - `chmod 700 filename.pem`

### Now connect to the remote instance cli
Now run `ssh -i filename.pem ubuntu@<aws instance ip>`
Example `ssh -i filename.pem ubuntu@12.23.343.454`



## 

Now we have to start our node.js application
for that we willfirst installl node.js then clone our repo then npm i
then index.js

suppose our index,js is listening at port 8080 so now we can sent a get requets at `123.123.123.123:8080` 

every time we will have to add the port number in out request url, to avboid this we use ``nginx``

## what can nginx do ? 
by default aws instace listens on port 80 for any http request and our application is running on port 8080, so we run nginx on port 80 then and tell nginx to resverse proxy based on the domain name.

our request -> domain name -> a:b:c:d:80 -> nginx -> desired port

suppose we have two node.js porcess running on listening on port 8080 and one at 8081, now we want domain1.com points to 8080 and domain2.com points to 8081, to achive this we will tell nginx the same things then put  instance public ip as ip of both the domains, and after that nginx will do its work to reverse proxy.


## How to install nginx
```
sudo apt update
sudo apt install nginx
```

If install is successfull then nginx will automatically start and will be running on port 80.

### nginx logic to reverse proxy

```
sudo rm sudo vi /etc/nginx/nginx.conf
sudo vi /etc/nginx/nginx.conf

// first line will remove the default nginx configiration
// Second line will open the nginx configuration file
```

```
events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name domain1.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}

	server {
    listen 80;
    server_name domain2.com;

    location / {
        proxy_pass http://localhost:8081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}
```

use this code in the nginx.conf file and then restart the nginx server (add the server as per the number of proxies you want to create)
 
```sudo service nginx restart```

Now issue is that wheneveer we restart the server we have to manually start the node.js application, to avoid this we will use `pm2`

```
npm i -g pm2
pm2 start index.js
```
