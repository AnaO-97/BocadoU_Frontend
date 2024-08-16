<script src="./script.js"> </script>
<style  src="./styles.css"></style>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning fw-bold">
        <div class="container-fluid">
            <a class="navbar-brand" href="Inicio">
                <img src="../../../FACE.png" alt="" width="50" height="50">
            </a>                     
            
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="Bebidas" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bebidas
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <router-link to="Bebidas0" class="fw-bold dropdown-item">Todas</router-link></li>
                            <li>
                                <router-link to="Bebidas1" class="fw-bold dropdown-item">Jugos</router-link></li>
                            <li>
                                <a class="dropdown-item" href="Bebidas2">Batidos</a></li>
                            <li>
                                <a class="dropdown-item" href="Bebidas3">Gaseosas</a></li>
                        </ul>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="Comidas" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Comidas
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="fw-bold dropdown-item" href="Comidas0">Todas</a></li>
                            <li><a class="dropdown-item" href="Comidas1">Hamburguesas</a></li>
                            <li><a class="dropdown-item" href="Comidas2">Perros</a></li>
                            <li><a class="dropdown-item" href="Comidas3">Carnes</a></li>
                        </ul>
                    </li>

                    <div class="otherLinks">
                        <li class="nav-item">
                            <a class="nav-link" href="Reservas">Reservas</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="MiPedido">Mi pedido</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="Administrador">Administrador</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>