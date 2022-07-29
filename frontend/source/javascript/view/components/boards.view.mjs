'use strict';

import { Columns } from "../columns.view.mjs"; 

export class BoardsView {
    #nodeBody;

    constructor() {        
        this.#nodeBody = document.querySelector('body')
    }

    init() {
        const container = this.#createContainer()
        this.#nodeBody.append(container);
        container.innerHTML = this.#addBoards()
        container.id = "container"
        const board1 = document.querySelector(".board-container")
        this.#addClickListener(board1)
    }

    #createContainer() {
        return document.createElement('div')
    }

    #addClickListener(node){
        node.addEventListener('click', function() {
            const columns = new Columns()
            columns.init()
        })
    }

    #addBoards() {
        return `
        <div class="container ps-3">
            <h1 style="border-bottom: 1px solid #F7F7F7;width: fit-content;">Tableros</h1>
            <p class="fs-6">Cantidad de tableros 1/1</p>
        </div>
    
    <div class="container d-flex flex-row bd-highlight">
        
        <button class="btn btn-ligth align-self-center mx-2" style=" height: auto;" type="button">
    
           crear tablero
    
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
        </button>
    
        <div id="container" class="board-container me-4">
            <div class="card" style="width: 18rem;">
                <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956999.jpg&fm=jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title align-self-center">Titulo de tableroooo</h5>
                        
                        <div class="dropdown">
                            <button class="btn btn-ligth" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Editar nombre</a></li>
                            <li><a class="dropdown-item" href="#">A Favoritos</a></li>
                            <li><a class="dropdown-item" href="#">Eliminar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    
        
        <div id="container" class="board-container">
            <div class="card" style="width: 18rem;">
                <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956999.jpg&fm=jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title align-self-center">Segundo tabledo</h5>
                        
                        <div class="dropdown">
                            <button class="btn btn-ligth" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Editar nombre</a></li>
                            <li><a class="dropdown-item" href="#">A Favoritos</a></li>
                            <li><a class="dropdown-item" href="#">Eliminar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
