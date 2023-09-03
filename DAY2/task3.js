/* function validatePassword(request, response, next) {
	let { password } = request.body;
	if (password.length < 8) {
	  response.status(400).send("invalid password - must be at least 8 characters");
	} else {
	  next();
	}
  }
  

function validateEmail(request, response, next) {
	let { email } = request.body;
	if (!email.includes("@")  && !email.includes("gmail.com")) {
		response.status(400).send("invalid email - must contain @ or gmail.com");
	} else {
		next();
	}
} */





// database start

const database = {
	users: [
		{
			id: "1",
			name: "John",
			email: "John@mail.com",
		},
		{
			id: "2",
			name: "Sally",
			email: "Sally@mail.com",
		},
	],
	blogs: [
		{
			id: "1",
			post: "Eyad El mogy",
			
		},
		{
			id: "2",
			name: "SABAHO KORA",

		},
	],
};

// database end

// server creation 

const express = require("express");
const web = express();
web.use (express.json());

/* web.use(validateEmail);
web.use(validatePassword); */
// user get , getall , post methods

web.get("/users" , (req , res) =>{
    res.json(database.users);
});

web.get("/users/:userId" , (req , res)=>{
    const {userId}= req.params;
    const user = database.users.find((user) => user.id === userId);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json("User not found");
	}
});

web.post("/signup" , /* validateEmail , validatePassword , */ (req , res)=>{
    const { name, email } = req.body;
    database.users.push({
        id: database.users.length +1,
        name,
        email
    })
	res.status(200).json({ message: "signup successfully" });
});

// user end methods

// blog get , getall , post methods

web.get("/blogs" , (req ,res)=>{
    res.json(database.blogs);
});

web.get("/blogs/:blogId" , (req , res)=>{
    const {blogId}= req.params;
    const blog = database.blogs.find((blog) => blog.id === blogId);
    if(blog)
        res.json(blog);
    else
        res.status(404).json("post not found");
});

web.post("/blogs" , (req , res)=>{
    const { post }= req.body;
    database.blogs.push({
        id: database.blogs.length +1,
        post
    });
    res.status(201).json("post has been added");
});

// blog end

// Start the server
web.listen(5000, () => console.log("Server ready on port 5000"));
