import "./footer.scss";
import { Instagram, Facebook, Twitter, Copyright } from "@material-ui/icons";
export default function Footer() {
  return (
    <div className="footer-main">
      <footer id="footer">
        <div class="restaurant-footer">
          <div class="visit-us">
            <h3>FAQ</h3>
            <h3>Investor Relation</h3>
            <h3>Ways to Watch</h3>
          </div>
          <div class="hours">
            <h3>Home</h3>
            <h3>Jobs</h3>
            <h3>Terms Of Use</h3>
          </div>
          <div class="social">
            <h3>LET'S GET SOCIAL</h3>
            <div class="footer-icons">
              <Instagram className="fa-brands fa-square-instagram" />
              <Facebook className="fa-brands fa-square-facebook" />
              <Twitter className="fa-brands fa-square-twitter" />
            </div>
          </div>
        </div>
        <p class="copyrigth">2023 Movie Island, All Rights Reserved</p>
      </footer>
    </div>
  );
}
