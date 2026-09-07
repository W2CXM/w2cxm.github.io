var footer_data = `<div style="padding: 2vh;"></div>

<footer id="footer" style="background-color: rgba(0, 0, 0, 0.8); left: 0; width: 100vw; align-items: center; justify-content: center; font-size: 0.8em;">
    <div style="padding: 2vh;"></div>
    <div class="main_content" style="display: grid; grid-template-columns: 4fr 2.2fr 1px 3fr 1px 1fr 4fr; margin: auto;">
        <div></div>
        <div style="text-align: left; padding: 1rem 10%; overflow-wrap: anywhere;">Email us: <a href="mailto:w2cxm@cornell.edu">w2cxm@cornell.edu</a><br><br>401 Barton Hall<br>Ithaca, New York, U.S.<br><br>QSL via KD2EAT</div>
        <div style="background-color: white; width: 100%;"></div>
        <div id="copyright" style="text-align: center; padding: 1rem 10%; font-size: 0.8em; line-height: 1.5em;">© <span id="copyright-year"></span> by the Cornell Amateur Radio Club<br><br>This organization is a registered General Student Organization of Cornell University.<br><a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment" target="_blank" rel="noopener noreferrer">Equal Education and Employment</a></div>
        <div style="background-color: white; width: 100%;"></div>
        <div style="padding: 1rem 10%; max-width: 20vw; display: grid; grid-template-columns: 1fr 1fr; gap: 15%; place-items: center;">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/W2CXM"><img style="width: 100%;" src="/data/social/facebook.png" alt="Facebook"></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cornellamateurradio_w2cxm"><img style="width: 100%;" src="/data/social/instagram.png" alt="Instagram"></a>
        </div>
        <div></div>
    </div>
    <div style="padding: 2vh;"></div>
</footer>`;

document.write(footer_data);
document.getElementById('copyright-year').textContent = new Date().getFullYear();