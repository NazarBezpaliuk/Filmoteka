!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("4Nugj"),n("i91Q7"),n("8YbB4"),n("dsadE"),n("dIxxU");var r=n("bktnR"),i=n("4Nugj"),s=n("hQyPS"),c=(document.querySelector("[data-film-modal-open"),document.querySelector(".watched-render")),o=document.querySelector(".queued-render"),d=document.querySelector(".watched-btn"),l=document.querySelector(".queue-btn");c.addEventListener("click",r.openBackDrop),c.addEventListener("click",r.addClassHidden),c.addEventListener("click",s.getToBtns),o.addEventListener("click",r.openBackDrop),o.addEventListener("click",r.addClassHidden),o.addEventListener("click",s.getToBtns),window.addEventListener("load",m),l.addEventListener("click",(function(e){e.preventDefault(),o.style.display="grid",d.classList.remove("btn--active"),l.classList.add("btn--active"),window.removeEventListener("load",m),c.style.display="none",c.innerHTML="",function(e){e.preventDefault();var t=localStorage.getItem("queue_list"),a=t?JSON.parse(t):[];0===a.length?o.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of queued movies is empty.</p>\n            </li>':a.map((function(e){o.insertAdjacentHTML("beforeend",u(e))}))}(e)})),d.addEventListener("click",(function(e){e.preventDefault(),c.style.display="grid",l.classList.remove("btn--active"),d.classList.add("btn--active"),o.style.display="none",o.innerHTML="",m(e)}));JSON.parse(localStorage.getItem("watched_list")),JSON.parse(localStorage.getItem("queue_list"));function u(e){var t=[],a=(e.genres.map((function(e){t.push(e.name)})),t.join(", ")),n=e.release_date.slice(0,4)||e.first_air_date.slice(0,4);return'<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(e.id,'">\n            <img class="main-render__image"\n            src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'"\n            loading="lazy"\n            alt="').concat(e.original_title||e.name,'" \n            data-id="').concat(e.id,'">\n            <h2 class="main-render__title" data-id="').concat(e.id,'">\n            ').concat(e.original_title||e.name,'\n            </h2>\n            <p class="main-render__text" data-id="').concat(e.id,'">').concat(a," | ").concat(n,"</p>\n        </a>\n        </li>")}function m(e){e.preventDefault();var t=localStorage.getItem("watched_list"),a=t?JSON.parse(t):[];0===a.length&&(c.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of watched movies is empty.</p>\n            </li>'),a.map((function(e){c.insertAdjacentHTML("beforeend",u(e))}))}function p(){try{"dark"===localStorage.getItem("theme")?(document.querySelector(".main-render").classList.add("dark"),document.querySelector(".queued-render").classList.add("dark"),document.querySelector("body").classList.add("dark"),document.querySelector(".themetoggle").classList.add("dark"),document.querySelector(".material-icons").classList.add("dark"),document.querySelector("header").classList.add("dark"),document.querySelector(".modal").classList.add("dark"),document.querySelector(".modal-dark").classList.add("dark"),document.querySelector(".pagination").classList.add("dark"),document.querySelector(".day-nigth-btn-box").classList.add("dark")):(document.querySelector(".main-render").classList.remove("dark"),document.querySelector(".queued-render").classList.remove("dark"),document.querySelector("body").classList.remove("dark"),document.querySelector(".themetoggle").classList.remove("dark"),document.querySelector(".material-icons").classList.remove("dark"),document.querySelector("header").classList.remove("dark"),document.querySelector(".modal-dark").classList.remove("dark"),document.querySelector(".modal").classList.remove("dark"),document.querySelector(".pagination").classList.remove("dark"),document.querySelector(".day-nigth-btn-box").classList.remove("dark"))}catch(e){}}i.refs.modalCloseBtn.addEventListener("click",(function(e){if(e.preventDefault(),l.classList.contains("btn--active")){var t=localStorage.getItem("queue_list"),a=t?JSON.parse(t):[];0===a.length?o.innerHTML='<li class="api-error">\n                <p class="api-error__desc">The list of queued movies is empty.</p>\n                </li>':(o.innerHTML="",a.map((function(e){o.insertAdjacentHTML("beforeend",u(e))})))}if(d.classList.contains("btn--active")){var n=localStorage.getItem("watched_list"),r=n?JSON.parse(n):[];0===r.length?c.innerHTML='<li class="api-error">\n                <p class="api-error__desc">The list of watched movies is empty.</p>\n                </li>':(c.innerHTML="",r.map((function(e){c.insertAdjacentHTML("beforeend",u(e))})))}})),window.addEventListener("keydown",(function(e){if(console.log(e.code),"Escape"===e.code){if(console.log("done"),l.classList.contains("btn--active")){var t=localStorage.getItem("queue_list"),a=t?JSON.parse(t):[];0===a.length?o.innerHTML='<li class="api-error">\n                <p class="api-error__desc">The list of queued movies is empty.</p>\n                </li>':(o.innerHTML="",a.map((function(e){o.insertAdjacentHTML("beforeend",u(e))})))}if(d.classList.contains("btn--active")){var n=localStorage.getItem("watched_list"),r=n?JSON.parse(n):[];0===r.length?c.innerHTML='<li class="api-error">\n                        <p class="api-error__desc">The list of watched movies is empty.</p>\n                        </li>':(c.innerHTML="",r.map((function(e){c.insertAdjacentHTML("beforeend",u(e))})))}}})),i.refs.backdrop.addEventListener("click",(function(e){if(e.preventDefault(),e.target===i.refs.backdrop){if(l.classList.contains("btn--active")){var t=localStorage.getItem("queue_list"),a=t?JSON.parse(t):[];0===a.length?o.innerHTML='<li class="api-error">\n                <p class="api-error__desc">The list of queued movies is empty.</p>\n                </li>':(o.innerHTML="",a.map((function(e){o.insertAdjacentHTML("beforeend",u(e))})))}if(d.classList.contains("btn--active")){var n=localStorage.getItem("watched_list"),r=n?JSON.parse(n):[];0===r.length?c.innerHTML='<li class="api-error">\n                <p class="api-error__desc">The list of watched movies is empty.</p>\n                </li>':(c.innerHTML="",r.map((function(e){c.insertAdjacentHTML("beforeend",u(e))})))}}})),n("jomzW"),n("62hKk"),document.querySelector(".themetoggle").addEventListener("click",(function(e){e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),p()})),p()}();
//# sourceMappingURL=library.b0b90c32.js.map