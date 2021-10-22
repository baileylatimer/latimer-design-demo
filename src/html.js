import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script dangerouslySetInnerHTML= {{ __html:`


          document.addEventListener("mousemove", function(event) {
            const x = event.pageX - 10;
            const y = event.pageY - 10;
            const cursor = document.querySelector("#cursor");
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
          });

          $('div').on("mouseover", function(){
            $('#cursor').css({'transform': 'scale(2)'});
          });

          document.body.style.cursor = 'none';
          
        `}} />

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
