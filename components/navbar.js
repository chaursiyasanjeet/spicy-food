
export const navigationBar = (token, name) => {
    return (
        `<nav class="navbar navbar-expand-lg navbar-light bg-warning" >
            <div class="container-fluid" id="navItems">
            
                <a class="navbar-brand" href="../index.html"><img src="../assets/navlogo.png" style="width:90px;height:80px" alt=""><b>Spice Food</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="../html/food.html" style="color:black">Food</a>
                        <a class="nav-link" href="../html/trending.html" style="color:black">Trending</a>
                        <a class="nav-link" href="../html/search.html" style="color:black">Search</a>
                        <a class="nav-link" href="../html/cart.html" style="color:black">Cart</a> 
                        <a style="display:${!token ? 'block' : 'none'};color:black" class="nav-link" href="../html/login.html" >login</a>
                        <li style="display:${token ? 'block' : 'none'}" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${name}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="../html/search.html">Search Page</a></li>
                            <li><a class="dropdown-item" href="../html/cart.html">Cart Page</a></li>
                            <li id="logoutBtn" class="dropdown-item">Logout</li>
                        </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>`
    );
};

