/**
 * PORTFÓLIO PESSOAL - GABRIELLY ALEXANDRA AGUIAR BRUNO
 * Script interativo escrito em JavaScript Vanilla (pt-BR)
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // ----------------------------------------------------------------------
    // 1. ALTERNÂNCIA DE TEMA (DARK / LIGHT MODE)
    // ----------------------------------------------------------------------
    const botaoTema = document.getElementById("botao-tema");
    const iconeTema = document.getElementById("icone-tema");
    const elementoHtml = document.documentElement;

    function alternarTema() {
        const temaAtual = elementoHtml.getAttribute("data-tema");
        const novoTema = temaAtual === "dark" ? "light" : "dark";

        elementoHtml.setAttribute("data-tema", novoTema);

        // Atualiza o ícone
        if (novoTema === "dark") {
            iconeTema.className = "bi bi-moon-fill";
        } else {
            iconeTema.className = "bi bi-sun-fill";
        }
    }

    botaoTema.addEventListener("click", alternarTema);

    // ----------------------------------------------------------------------
    // 2. MENU HAMBÚRGUER MOBILE
    // ----------------------------------------------------------------------
    const botaoMenuMobile = document.getElementById("botao-menu-mobile");
    const menuNavegacao = document.getElementById("menu-navegacao");
    const linksMenu = document.querySelectorAll(".link-menu");

    botaoMenuMobile.addEventListener("click", function () {
        menuNavegacao.classList.toggle("ativo");
    });

    // Fecha o menu mobile ao clicar em um dos links
    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            menuNavegacao.classList.remove("ativo");
        });
    });

    // ----------------------------------------------------------------------
    // 3. EFEITO MÁQUINA DE ESCREVER (TYPING EFFECT)
    // ----------------------------------------------------------------------
    const elementoTexto = document.getElementById("texto-maquina");
    const textoParaDigitar = "Estudante de Desenvolvimento Full Stack";
    let indiceCaractere = 0;

    function digitarTexto() {
        if (indiceCaractere < textoParaDigitar.length) {
            elementoTexto.textContent += textoParaDigitar.charAt(indiceCaractere);
            indiceCaractere++;
            setTimeout(digitarTexto, 80); // Velocidade da digitação em milissegundos
        }
    }

    // Inicia o efeito após meio segundo
    setTimeout(digitarTexto, 500);

    // ----------------------------------------------------------------------
    // 4. ANO DINÂMICO NO RODAPÉ
    // ----------------------------------------------------------------------
    const elementoAno = document.getElementById("ano-atual");
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 5. BOTÃO "VOLTAR AO TOPO"
    // ----------------------------------------------------------------------
    const botaoTopo = document.getElementById("botao-topo");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    });

    botaoTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ----------------------------------------------------------------------
    // 6. ANIMAÇÃO DE ENTRADA AO ROLAR (INTERSECTION OBSERVER)
    // ----------------------------------------------------------------------
    const elementosObservaveis = document.querySelectorAll(".observavel");

    const observadorScroll = new IntersectionObserver(
        function (entradas, observer) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel-animado");
                    observer.unobserve(entrada.target); // Anima apenas uma vez
                }
            });
        },
        {
            threshold: 0.15 // Dispara quando 15% do elemento estiver visível
        }
    );

    elementosObservaveis.forEach(function (elemento) {
        observadorScroll.observe(elemento);
    });
});