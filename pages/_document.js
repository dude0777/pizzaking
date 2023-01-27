import Document, { Head, Main, NextScript } from 'next/document'
//_document.js is uIn Next.js, the _document.js file is used to customize the <head> of the document for all pages in your application. This allows you to add global elements such as meta tags, scripts, and styles that will be present on every page of your application.

// The _document.js file exports a class that extends the Document class from the next/document module. In this class, you can use the render() method to customize the <head> and <body> of the document.

// Here are a few examples of what you can do with the _document.js file:

// Add Google Fonts to your application
// Add meta tags for SEO
// Add analytics scripts
// Add a global CSS file
// It is important to note that any modifications you make to the _document.js file will be applied to all pages of your application, so use it with care.

// It is also possible to use a _app.js file which is a higher-order component that wraps all the pages. It is a good place to put global styles, headers, footers and other elements that should be present on all pages.
class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,600&display=swap" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
          <meta name="description" content="My Next.js App" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument

