import { DefaultSeo } from "next-seo";
import Script from "next/script";

const SEO = () => {
  return (
    <>
      <DefaultSeo
        title="AI SF | May 15-19"
        description="May 15 - 19. An AI week for builders."
        openGraph={{
          url: "https://aisf.co",
          title: "AI SF | May 15-19",
          description: "May 15 - 19. An AI week for builders.",
          images: [
            {
              url: "https://aisf.co/preview-image.png",
              width: 1200,
              height: 630,
              alt: "Preview Image",
            },
          ],
          site_name: "AI SF",
        }}
      />

      <Script strategy="lazyOnload">{`
        _linkedin_partner_id = "4782732";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})(window.lintrk);

        window.lintrk('track', { conversion_id: 12231860 });
      `}</Script>
    </>
  );
};

export default SEO;
