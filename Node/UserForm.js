function UserForm(req,res){
 res.write(` <form action="submit" method="POST">
<input type="text" placeholder="enter user name"/>
<input type="email" placeholder="enter user email"/>
<button type="submit">submit form</button>
</form>`)
}
module.exports=UserForm;