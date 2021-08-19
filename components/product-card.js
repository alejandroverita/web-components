

class ProductCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow( { mode: 'open' });
    }

    static get observedAttributes() {
        return ["img", "title", "price", "description", "collection"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
       
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = 
        `
        <article class="card">
            <section class="card__img">
                <img src="${this.img}" alt="${this.title}"/>
            </section>

            <section class="card__info">
                <header class="card__info--header">
                
                    <h2>${this.title}</h2>
                    <h3>${this.collection}</h3>
                </header>
                <div class="card__info-content">

                    <p>${this.description}</p>

                </div>

                <footer class="card__info--footer">
                    <p class="card__info--footer-price">${this.price}</p>
                    <button class="card__info--footer-button" type="button">Comprar</button>
                </footer>
            </section>

        </article>
        ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        return `
            <style>
                

                :host {
                    --primary-background: #5a6cb2;
                    --text-color: #a2a2a2;
                    --secondary-text-color: white;
                    
                    margin: 0 auto;
                }

                .card {
                    position: relative;
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    grid-template-rows: 100% ;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    width: 60rem;
                    height: 36rem;
                    /* margin: 20px; */
                    background-color: whitesmoke;
                    margin: 50px auto;
                }

                .card__img{
                    position: relative;
                    justify-content: center;
                    width:100%;
                    height: 100%;
                    background-color: var(--primary-background);
                }

                .card__img:before{
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    font-size: 5rem;
                    font-weight: 800;
                    color: var(--just-background);
                    content: 'NIKE';
                    opacity: 0.2;

                }

                .card__img img {
                    position: relative;
                    top: 100px;
                    left: -10rem;
                    width: 150%;
                    height: 90%;
                    transform: rotate(-30deg);
                }

                .card__info{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    /* align-items: center; */
                    width: 90%;
                    margin: 0 auto;
                }

                .card__info--header h2{
                    margin-bottom: 25px;
                    font-size: 2rem;
                    line-height: 0.8rem;
                    /* color: #444; */
                }

                
                .card__info--header h3{
                    float: left;
                    font-size: 1rem;
                    color: var(--text-color);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }


                .card__info-content{
                    max-width: 85%;
                    margin-left: 15%;
                    margin-bottom: 35px;
                    
                    font-size: 0.8rem;
                }

                .card__info--footer{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .card__info--footer-price {
                    font-size: 2rem;
                    color: var(--text-color);
                    padding: 5px;
                    font-weight: 700;
                }

                .card__info--footer-button{
                    
                    padding: 10px 15px;
                    border: none;
                    font-size: 1rem;
                    color: var(--secondary-text-color);
                    letter-spacing: 1px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border-radius: 20px;
                    background-color: var(--primary-background);
                    cursor: pointer;
                }


                @media (max-width: 1080px) {
                    .card {                   
                        grid-template-columns: 100%;
                        grid-template-rows: repeat(2, 50%);
                        width: 36rem;
                        height: 50rem;
                    }

                    
                    .card__img {
                        padding: 40px;
                        width: 100%;
                        box-sizing: border-box;
                        height: auto;
                        text-align: center;
                    }
                    .card__img img{
                        left: initial;
                        width: 100%;
                        height: auto;
                        transform: rotate(0deg);
                    }
                    .card__info {
                        width: auto;
                        height: auto;
                        padding: 20px;
                    }
                    .card__info-content p {
                        max-width: 100%;
                        margin-left: 0;
                    }
                }

            </style>
        `;
    }

    render() {
        //false solo clonara el main, true clona todo lo que este adento de la etiqueta
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
    }
    
    //hace que aparezca en el dom
    connectedCallback() {
        this.render();
    }
}

customElements.define('product-card', ProductCard)