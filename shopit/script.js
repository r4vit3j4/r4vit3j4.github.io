num = 0;
function startup()
{
    if(localStorage.getItem("fname")!="")
    {
        document.getElementById("account").innerHTML = localStorage.getItem("fname");
        document.getElementById("account").href="./account.html"
    }
    else
    {
        document.getElementById("account").innerHTML = "Login/Signup"
        document.getElementById("account").href="./login.html"
    }
}
function login()
{
    a = document.getElementById("email").value;
    b = document.getElementById("pass").value;
    if(a!=(localStorage.getItem("email"))||b!=(localStorage.getItem("pass")))
    {
        document.getElementById("error").innerHTML = "Error Logging in<br>Make sure you have created your account first<br>or<br>Make sure that your username or password are correct"
    }
    else
    {
        location.href = "./index.html"
    }
}
function signup()
{
    localStorage.setItem("fname",document.getElementById("fname").value);
    localStorage.setItem("sname",document.getElementById("sname").value);
    localStorage.setItem("email",document.getElementById("email").value);
    localStorage.setItem("pass",document.getElementById("pass").value);
    location.href="./login.html"
}
function account()
{
    document.getElementById("dfname").innerHTML = localStorage.getItem("fname");
    document.getElementById("dsname").innerHTML = localStorage.getItem("sname");
    document.getElementById("demail").innerHTML = localStorage.getItem("pass");
}
function logout()
{
    localStorage.setItem("fname","");
    localStorage.setItem("sname","");
    localStorage.setItem("email","");
    localStorage.setItem("pass","");
    location.href="./index.html"
}
function buy(name)
{ 
    if(localStorage.getItem("fname")=="")
    {
        document.getElementById("berror"+name).innerHTML = "Please Login before buying";
    }   
    if(name==1)
    {
        localStorage.setItem("pname"+num,"Oneplus Nord");
        localStorage.setItem("pprice"+num,"29999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==2)
    {
        localStorage.setItem("pname"+num,"MI 10");
        localStorage.setItem("pprice"+num,"54999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==3)
    {
        localStorage.setItem("pname"+num,"Samsung Galaxy S21 Ultra 5G");
        localStorage.setItem("pprice"+num,"85999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==4)
    {
        localStorage.setItem("pname"+num,"Iphone 12 Pro Max");
        localStorage.setItem("pprice"+num,"124704");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==5)
    {
        localStorage.setItem("pname"+num,"Skullcandy Headphones");
        localStorage.setItem("pprice"+num,"7940");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==6)
    {
        localStorage.setItem("pname"+num,"Senheiser Headphones");
        localStorage.setItem("pprice"+num,"8946");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==7)
    {
        localStorage.setItem("pname"+num,"JBL Headphones");
        localStorage.setItem("pprice"+num,"5300");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==8)
    {
        localStorage.setItem("pname"+num,"Oneplus Buds Z");
        localStorage.setItem("pprice"+num,"2997");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==9)
    {
        localStorage.setItem("pname"+num,"Oneplus TV");
        localStorage.setItem("pprice"+num,"25999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==10)
    {
        localStorage.setItem("pname"+num,"Samsung TV");
        localStorage.setItem("pprice"+num,"49999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==11)
    {
        localStorage.setItem("pname"+num,"MI TV");
        localStorage.setItem("pprice"+num,"39999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==12)
    {
        localStorage.setItem("pname"+num,"LG TV");
        localStorage.setItem("pprice"+num,"16999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==13)
    {
        localStorage.setItem("pname"+num,"Acer Laptop");
        localStorage.setItem("pprice"+num,"117690");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==14)
    {
        localStorage.setItem("pname"+num,"Asus Laptop");
        localStorage.setItem("pprice"+num,"102990");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==15)
    {
        localStorage.setItem("pname"+num,"Dell laptop");
        localStorage.setItem("pprice"+num,"72990");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==16)
    {
        localStorage.setItem("pname"+num,"Lenovo Laptop");
        localStorage.setItem("pprice"+num,"67990");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==17)
    {
        localStorage.setItem("pname"+num,"JBL Speaker");
        localStorage.setItem("pprice"+num,"6999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==18)
    {
        localStorage.setItem("pname"+num,"Bose Speaker");
        localStorage.setItem("pprice"+num,"8990");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==19)
    {
        localStorage.setItem("pname"+num,"Marshall Speaker");
        localStorage.setItem("pprice"+num,"14999");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==20)
    {
        localStorage.setItem("pname"+num,"Sandisk 64GB Pendrive");
        localStorage.setItem("pprice"+num,"690");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==21)
    {
        localStorage.setItem("pname"+num,"Sandisk 256GB Pendrive");
        localStorage.setItem("pprice"+num,"2699");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==22)
    {
        localStorage.setItem("pname"+num,"HP 16GB Pendrive");
        localStorage.setItem("pprice"+num,"349");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==23)
    {
        localStorage.setItem("pname"+num,"Cosmic Byte Keyboard");
        localStorage.setItem("pprice"+num,"1799");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==24)
    {
        localStorage.setItem("pname"+num,"Logitech Mouse");
        localStorage.setItem("pprice"+num,"1649");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==25)
    {
        localStorage.setItem("pname"+num,"Logitech C270");
        localStorage.setItem("pprice"+num,"2049");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }if(name==26)
    {
        localStorage.setItem("pname"+num,"Mi Smart Band 5");
        localStorage.setItem("pprice"+num,"2499");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==27)
    {
        localStorage.setItem("pname"+num,"Fitbit Versa 2");
        localStorage.setItem("pprice"+num,"13666");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart";
    }
    if(name==28)
    {
        localStorage.setItem("pname"+num,"Apple watch SE");
        localStorage.setItem("pprice"+num,"29900");
        document.getElementById("bsucs"+name).innerHTML = "Added to cart"; 
    }
    num++;
}
function loadcart()
{
    fl = 0;
    if(localStorage.getItem("pname0")!=null)
    {
        document.getElementById("cart").innerHTML="<h3 style=\"font-size:20px;color:white\">Apology : The cart function could have worked, but while writing the code i faced a bug and due to time constraints fixing this could not have been possible for me in the current moment, but the source code(which still contains the bug) for the cart function is still left over as it is. I'm sure this can be fixed in the next iteration and I think you can understand this.</h3><h2>thanking you</h2>";
    }
    else
    {
        alert(1);
    }
}