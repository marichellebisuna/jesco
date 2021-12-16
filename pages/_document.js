import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='robots' content='index, follow' />
          <title>Jesco - Fashoin eCommerce HTML Template</title>
          <meta
            name='description'
            content='Jesco - Fashoin eCommerce HTML Template'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />

          {/* <!-- Add site Favicon --> */}
          <link
            rel='shortcut icon'
            href='assets/images/favicon/favicon.ico'
            type='image/png'
          />

          {/* <!-- vendor css (Icon Font) --> */}
          <link
            rel='stylesheet'
            href='assets/css/vendor/bootstrap.bundle.min.css'
          />
          <link
            rel='stylesheet'
            href='assets/css/vendor/pe-icon-7-stroke.css'
          />
          <link rel='stylesheet' href='assets/css/vendor/font.awesome.css' />

          {/* <!-- plugins css (All Plugins Files) --> */}
          <link rel='stylesheet' href='assets/css/plugins/animate.css' />
          <link
            rel='stylesheet'
            href='assets/css/plugins/swiper-bundle.min.css'
          />
          <link rel='stylesheet' href='assets/css/plugins/jquery-ui.min.css' />
          <link rel='stylesheet' href='assets/css/plugins/nice-select.css' />
          <link rel='stylesheet' href='assets/css/plugins/venobox.css' />
          <link rel='stylesheet' href='assets/css/style.css' />

          <script src='assets/js/vendor/jquery-3.6.0.min.js'></script>
          <script src='assets/js/vendor/bootstrap.bundle.min.js'></script>
          <script src='assets/js/vendor/jquery-migrate-3.3.2.min.js'></script>
          <script src='assets/js/vendor/modernizr-3.11.2.min.js'></script>

          {/* <!--Plugins JS--> */}
          <script src='assets/js/plugins/swiper-bundle.min.js'></script>
          <script src='assets/js/plugins/jquery-ui.min.js'></script>
          <script src='assets/js/plugins/jquery.nice-select.min.js'></script>
          <script src='assets/js/plugins/countdown.js'></script>
          <script src='assets/js/plugins/scrollup.js'></script>
          <script src='assets/js/plugins/jquery.zoom.min.js'></script>
          <script src='assets/js/plugins/venobox.min.js'></script>
          <script src='assets/js/plugins/ajax-mail.js'></script>

          {/* <!-- Use the minified version files listed below for better performance and remove the files listed above --> */}
          {/* <!-- <script src="assets/js/vendor/vendor.min.js"></script>
    <script src="assets/js/plugins/plugins.min.js"></script> --> */}

          {/* <!-- Main Js --> */}
          <script src='assets/js/main.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
