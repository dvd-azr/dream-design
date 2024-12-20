const origin = window.location.origin,
  title = "Dream Design | Under Maintenance",
  description = "We design and build, turning your dreams ideas into reality.",
  banner = origin + "/assets/img/logo/dd-id.png";

document.write(/*html*/ `
<title>${title}</title>
<!-- Meta Tag -->
<meta name="description" content="${description}" />
<!-- Google+ / Schema.org -->
<meta itemprop="name" content="${title}" />
<meta itemprop="description" content="${description}" />
<meta itemprop="image" content="${banner}" />

<!-- Twitter Meta -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${banner}" />

<!-- Facebook Meta -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${origin}" />
<meta property="og:locale" content="id_ID" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${banner}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />

<meta name="Googlebot" content="index, follow" />
<meta name="robots" content="index, follow" />
<meta name="author" content="Dream Design" />
<meta name="copyright" content="Dream Design" />
<meta name="language" content="Indonesia" />
<meta name="revisit-after" content="1 days" />
<meta name="webcrawlers" content="all" />
<meta name="rating" content="general" />
<meta name="distribution" content="global" />
<meta name="resource-type" content="document" />
<meta name="HandheldFriendly" content="true" />
<meta name="MobileOptimized" content="320" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="/assets/img/logo/dd-id.png" />
<meta name="theme-color" content="#FFFFFF" />
`);
