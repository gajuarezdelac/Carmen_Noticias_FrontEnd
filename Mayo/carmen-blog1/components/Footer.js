import { FacebookOutlined,TwitterOutlined,WhatsAppOutlined } from '@ant-design/icons';


const Footer = () => {
    return (
        <>
        
    <footer class="footer-distributed">
    <div class="footer-left">
    <h3>Carmen<span> Noticias</span></h3>

    <p class="footer-links">
    <a href="#">Home</a>·
    <a href="#">Blog</a>·
    <a href="#">Contact</a>·
    </p>

    <p class="footer-company-name">Carmen Noticias &copy;2021</p>
    </div>

    <div class="footer-center">

    <div>
    <i class="fa fa-map-marker"></i>
    <p><span>Ciudad del Carmen</span>Campeche, México</p>
    </div>

    <div>
    <i class="fa fa-phone"></i>
    <p>+52 938 200 39 20</p>
    </div>

    <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">gajuarezdelac.dev@gmail.com</a></p>
    </div>

    </div>

    <div class="footer-right">

    <p class="footer-company-about">
    <span>Acerca de nosotros</span>
Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Gabriel J.
    </p>
    <div class="footer-icons">
    <a href="#"><i class="fa fa-facebook">
    <FacebookOutlined />
        </i></a>
    <a href="#">
    <WhatsAppOutlined />
        </a>
    <a href="#">
    <TwitterOutlined />
        </a>
    </div>
    </div>
    </footer>
        </>
    )
}

export default Footer;