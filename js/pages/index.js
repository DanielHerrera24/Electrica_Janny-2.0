function index() {
  const artIndex = document.getElementById("nosotros");

  artIndex.innerHTML = `
                <article class="artIndex">
                    <div id="index-info-1" class="div-parrafos">
                        <h2 class="index-parrafos" data-aos="fade-right">NOSOTROS</h2>
                        <span data-aos="fade-right" class="borde-amarillo"></span>
                        <p data-aos="fade-right" class="index-parrafos-top parrafos"><b>Eléctrica
                            Janny</b> se destaca en el sector de venta de <b>material eléctrico</b> y en la realización de <b>obras eléctricas</b> de alta calidad en San Luis Río Colorado, Sonora.
                        </p>
                        <p data-aos="fade-right" class="index-parrafos parrafos">Destacamos por nuestro firme compromiso con la excelencia en productos y servicios. Nuestro equipo altamente capacitado y nuestra experiencia consolidada nos permiten ofrecer soluciones eléctricas eficientes y personalizadas, desde proyectos residenciales hasta obras industriales. Somos profesionales que se adaptan a las exigencias de tus requerimientos para satisfacer completamente tus necesidades.</p>
                        <p data-aos="fade-right" class="index-parrafos parrafos">Acércate a nuestra sucursal, visita nuestro <b>sitio oficial</b> y síguenos en <a href="https://www.facebook.com/electrijanny" target="_blank"><b>Facebook</b></a>, no te pierdas de todos los beneficios y material eléctrico que tenemos para ti.</p>
                    </div>
                    <div id="index-div-img-1" class="div-imgs">
                        <img src="./imgs/Tienda-vistaDesdeCaja.jpg" alt="Instalacion de luz en techo" class="index-imgs">
                    </div>
                </article>`;
}

index();
